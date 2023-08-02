"use client";
import React from "react";
import { useState } from "react";
import { classNames } from "tailwindcss-classnames";

export default function EmailForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.ChangeEvent<any>) => {
		e.preventDefault();
		setIsLoading(true);
		const res = await fetch("/api/sendEmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ name, subject, email, message }),
		});

		if (res.ok) {
			setStatus(true);
			setName("");
			setEmail("");
			setMessage("");
			setSubject("");
		}
	};

	return (
		<div className="nostalgic-window bg-med m-10 text-center">
			<div className="window-title-bar bg-med border-b-2 border-black">
				<span className="window-title font-bold">Send me an email</span>
				<div className="window-controls ">
					<div className="window-control"></div>
					<div className="window-control"></div>
					<div className="window-control"></div>
				</div>
			</div>
			<div className="mt-4 nostalgic-window-content flex p-4 justify-center">
				{status ? (
					<p>Thanks for your message!</p>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="mb-2">
							<label htmlFor="name">Subject</label>
							<input
								className="bg-low mx-2 "
								id="name"
								type="text"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="name">Name</label>
							<input
								className="bg-low mx-2"
								id="name"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="email">Email</label>
							<input
								className="mx-2"
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="message">Message</label>
							<textarea
								className="mx-2 p-2"
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<button
							className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-high hover:bg-white mt-4 lg:mt-0"
							type="submit"
							disabled={!name || !subject || !email || !message}
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
