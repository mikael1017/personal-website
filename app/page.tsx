import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
						{/* <div class="block lg:hidden">
							<button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
								<svg
									class="fill-current h-3 w-3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Menu</title>
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
								</svg>
							</button>
						</div> */}
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
									className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
								>
									Resume
								</a>
							</div>
						</div>
					</nav>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-high">
							Hi, I'm Jay. I'm a software engineer based in
							Seattle, WA.
						</h2>
						<h3 className="text-2xl py-2 text-">
							Software developer with a passion for building
							products that make a difference. I enjoy working
							with React, TypeScript, and Node.js.
						</h3>
						<p>
							I'm currently working at{" "}
							<a href="https://www.leafly.com/">Leafly</a> as a
							Software Engineer.
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
						<AiFillGithub />
						<AiFillLinkedin />
					</div>
					<div className=""></div>
				</section>
			</main>
		</div>
	);
}
