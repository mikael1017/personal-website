import React from "react";
import Image from "next/image";

const ImageBlockWindow = () => {
	return (
		<div className="  text-center shadow-2xl p-10 rounded-xl m-10">
			<h1 className="text-2xl pt-8 pb-2">Programming Languages</h1>
			<div className="logos justify-around align-center flex my-4">
				<Image
					src="/java-logo.png"
					alt="Java"
					className="logo"
					width={80}
					height={80}
				/>
				<Image
					src="/python-logo.png"
					alt="Python"
					className="logo"
					width={80}
					height={80}
				/>
				<Image
					src="/C++-logo.png"
					alt="C++"
					className="logo"
					width={80}
					height={80}
				/>
				<Image
					src="/js-logo.png"
					alt="Javascript"
					className="logo rounded-lg"
					width={80}
					height={80}
				/>
			</div>
		</div>
	);
};

export default ImageBlockWindow;
