import "../styles/globals.css";

export const GamePageNavBar = () => {
	return (
		<nav className="bg-med border-y-2 border-black flex items-center justify-between text-high  font-bold flex-wrap p-6">
			<div className="flex items-center flex-shrink-0  mr-6">
				<span className="font-semibold text-xl tracking-tight">
					<a href="/">Jaewoo Cho</a>
				</span>
			</div>

			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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
