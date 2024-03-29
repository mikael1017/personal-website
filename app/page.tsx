import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profileImg from "../public/profile.png";
import Window from "@/components/Window";
import NostalgicWindow from "@/components/NostalgicWindow";
import tennisBanner from "../public/tennis.webp";
import EmailForm from "@/components/EmailForm";
import filterBanner from "../public/filter.png";
import BlockWindow from "@/components/BlockWindow";
import ImageBlockWindow from "@/components/ImageBlockWindow";
import extensionBanner from "../public/extension.png";
import driveBanner from "../public/drive_ai.png";
import { NavBar } from "@/components/NavBar";

export default function Home() {
	return (
		<div>
			<Head>
				<title></title>
				<meta name="Jaewoo's website" content="Jaewoo's website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-low font-burtons">
				<section className=" bg-white-100">
					<NavBar />
				</section>
				<section>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-high">
							Hello I'm Jay. I'm a software engineer based in
							Seattle, WA
						</h2>
						<h3 className="text-2xl py-2 text-">
							A passionate software engineer on a mission to
							create a globally adored service that enriches lives
						</h3>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
						<a href="https://github.com/mikael1017">
							<AiFillGithub />
						</a>
						<a href="https://www.linkedin.com/in/chojaewoo/">
							<AiFillLinkedin />
						</a>
					</div>
					<div className="relative bg-gradient-to-b mx-auto from-med rounded-t-full w-80">
						<Image src={profileImg} alt="my profile" />
					</div>
				</section>
				<section id="about">
					<BlockWindow
						title="About Me"
						description="My journey began with the elegance of numbers and the beauty of mathematical proofs during my undergraduate years. Little did I know that this passion for problem-solving would lead me on an exhilarating path to the realm of computer science.
						As I embarked on my master's journey in computer science, the boundless possibilities of technology opened before me like an uncharted universe. From algorithms that danced like symphonies to data structures that revealed hidden patterns, I found myself immersed in the wonders of this digital realm.
						But theory alone could not satiate my hunger for creating tangible impact. I ventured into the realm of web application development, building bridges between ideas and reality. Each line of code I crafted was a testament to my determination to create meaningful solutions that enhance lives.
						My adventure didn't end there; I embraced the challenges and joys of being a full-stack developer intern, where I honed my skills and gained invaluable experience working with diverse teams and projects."
					></BlockWindow>
				</section>
				<section>
					<ImageBlockWindow></ImageBlockWindow>
				</section>
				<section id="projects">
					<div className="text-center">
						<h3 className="text-3xl py-1">Portfolio</h3>
						{/* <BlockWindow
							title="Portfolio"
							description=""
						></BlockWindow> */}
						<div className="flex justify-center ">
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
								banner={driveBanner}
								name="Autonomous drive AI"
								title="Self-driving AI"
								description="Built an AI using NEAT-python to drive a car in a 2D environment that is built using pygame library"
								link="https://github.com/mikael1017/driveAI"
							/>
						</div>
						<div className="flex justify-center">
							<NostalgicWindow
								banner={extensionBanner}
								name="Chrome tab manager"
								title="Chrome tab manager"
								description="Manage all opened tabs in chrome"
								link="https://github.com/mikael1017/chrome_extension"
							/>
						</div>
						<div className="flex justify-center">
							<NostalgicWindow
								banner={filterBanner}
								name="Face filter app"
								title="Face filter app"
								description=""
								link="https://github.com/mikael1017/webcam_filter"
							/>
						</div>
					</div>
				</section>
				<section id="contact" className="my-10">
					<h1 className="text-3xl text-center section title">
						Contact Me
					</h1>
					<div className="email flex justify-center">
						<EmailForm />
					</div>
				</section>
			</main>
		</div>
	);
}
