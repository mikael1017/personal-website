import "../styles/globals.css";
import React from "react";

export const NavBar = () => {
	return (
		<nav className="bg-med border-y-2 border-black flex items-center justify-between text-high  font-bold flex-wrap p-6">
			<div className="flex items-center flex-shrink-0  mr-6">
				<span className="font-semibold text-xl tracking-tight">
					Jaewoo Cho
				</span>
			</div>

			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a
						href="#about"
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
					>
						About
					</a>
					<a
						href="#projects"
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
					>
						Projects
					</a>
					<a
						href="#contact"
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
					>
						Contact
					</a>
					<a
						href="/games/race" // Relative URL to the resume file in the public folder
						className="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
					>
						Game
					</a>
				</div>
				<div>
					<a
						href="/resume.pdf" // Relative URL to the resume file in the public folder
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-high hover:bg-white mt-4 lg:mt-0"
					>
						Resume
					</a>
				</div>
			</div>
		</nav>
	);
};
