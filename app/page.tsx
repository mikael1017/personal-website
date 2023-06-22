import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profileImg from "../public/profile.png";
import Window from "@/components/Window";
import NostalgicWindow from "@/components/NostalgicWindow";
import tennisBanner from "../public/tennis.webp";
import EmailForm from "@/components/EmailForm";

export default function Home() {
	return (
		<div>
			<Head>
				<title></title>
				<meta name="Jaewoo's website" content="Jaewoo's website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-low font-burtons">
				<section className=" bg-white-100 min-h-screen">
					<nav className="bg-med border-y-2 border-black flex items-center justify-between text-high  font-bold flex-wrap p-6">
						<div className="flex items-center flex-shrink-0  mr-6">
							<span className="font-semibold text-xl tracking-tight">
								Jaewoo Cho
							</span>
						</div>

						<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
							<div className="text-sm lg:flex-grow">
								<a
									href="#responsive-header"
									className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
								>
									About
								</a>
								<a
									href="#responsive-header"
									className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
								>
									Projects
								</a>
								<a
									href="#responsive-header"
									className="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
								>
									Contact
								</a>
							</div>
							<div>
								<a
									href="#"
									className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-high hover:bg-white mt-4 lg:mt-0"
								>
									Resume
								</a>
							</div>
						</div>
					</nav>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-high">
							Hello, I'm Jay. I'm a software engineer based in
							Seattle, WA.
						</h2>
						<h3 className="text-2xl py-2 text-">
							Software developer with a passion for building
							products that make a difference. I enjoy working
							with React, TypeScript, and Node.js.
						</h3>
						<p>
							I'm currently studying Master's degree in Computer
							Science at Northeastern University
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
						<a href="https://github.com/mikael1017">
							<AiFillGithub />
						</a>
						<a href="https://www.linkedin.com/in/chojaewoo/">
							<AiFillLinkedin />
						</a>
					</div>
					<div className="relative bg-gradient-to-b mx-auto from-med rounded-t-full w-80 h-80">
						<Image src={profileImg} alt="my profile" />
					</div>
				</section>
				{}

				<section>
					<div className="  text-center shadow-2xl p-10 rounded-xl m-10">
						<h3 className="text-lg font-medium pt-8 pb-2">
							About Me
						</h3>
						<p className="py-2">
							I'm a software engineer based in Seattle, WA. I
							started programming in 2019 and have been enjoying
							it ever since. I'm currently working at Leafly as a
							Software Engineer. I'm passionate about building
							products that make a difference. I enjoy working
							with React, TypeScript, and Node.js.
						</p>
					</div>
					<div className="  text-center shadow-2xl p-10 rounded-xl m-10">
						<div>
							{/* <Image src={} alt="my projects" /> */}
							<h2>Projects</h2>
							<p>Creating a project is a great way to learn</p>
						</div>
					</div>
				</section>
				<section>
					<div className="r">
						<h3 className="text-3xl py-1">Portfolio</h3>
						<Window></Window>
						<div className="flex justify-center">
							<NostalgicWindow
								banner={tennisBanner}
								name="Find your court"
								title="Find your tennis court"
								description=""
								link="https://astonishing-elf-6929de.netlify.app/"
							/>
						</div>
						<div className="flex justify-center">
							<NostalgicWindow
								banner={tennisBanner}
								name=""
								title=""
								description=""
								link=""
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="email">
						<EmailForm />
					</div>
				</section>
			</main>
		</div>
	);
}
