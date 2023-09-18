import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// console.log(req.body);
	// console.log("hello");
	if (req.method === "POST") {
		const { name, email, subject, message } = req.body;

		const transporter = nodemailer.createTransport({
			service: "gmail", // e.g., 'smtp.gmail.com'
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PW,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: subject,
			text: `Name: ${name}\n From Email: ${email}\n\n Message: ${message}`,
		};

		if (!name || !email || !subject || !message) {
			return res.status(400).json({ error: "Please fill in all fields" });
		}

		try {
			await transporter.sendMail(mailOptions);
			res.status(200).json({ message: "Email sent successfully" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "error sending email" });
		}
	}
};
export default handler;
