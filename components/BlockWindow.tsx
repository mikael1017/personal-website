import React from "react";

const BlockWindow = (props: { title: any; description: any }) => {
	const { title, description } = props;

	return (
		<div className="  text-center shadow-2xl p-10 rounded-xl m-10">
			<h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
			<p className="py-2">{description}</p>
		</div>
	);
};

export default BlockWindow;
