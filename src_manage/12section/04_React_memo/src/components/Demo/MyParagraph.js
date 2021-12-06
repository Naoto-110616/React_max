import React from "react";

const MyParagraph = (props) => {
	console.log("Demo RUNNING");
	return <p>{props.children}</p>;
};

export default MyParagraph;
