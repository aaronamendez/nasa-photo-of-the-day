import React from "react";
import "./index.css";

const Explanation = (props) => {
	const { text } = props;
	return (
		<div className="explanation-wrapper">
			<p>{text}</p>
		</div>
	);
};

export default Explanation;
