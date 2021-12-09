import React from "react";
import "./index.css";

const Image = (props) => {
	const { nasaURL } = props;
	return (
		<div>
			<img src={nasaURL} alt="Nasa's daily Image" />
		</div>
	);
};

export default Image;
