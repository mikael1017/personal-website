import React from "react";

const BlockWindow = (props: { title: any; description: any }) => {
	const { title, description } = props;

	return (
		<div className="  text-center shadow-2xl p-10 rounded-xl m-10">
			<h1 className="text-2xl pt-8 pb-2">{title}</h1>
			<p className="py-2 text-lg">{description}</p>
		</div>
	);
};

export default BlockWindow;
