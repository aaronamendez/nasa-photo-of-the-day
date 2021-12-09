import React, { useState } from "react";

const Copyright = (props) => {
	const { right } = props;
	return (
		<div>
			<h2>Copyright: {right}</h2>
		</div>
	);
};

export default Copyright;
