import React from "react";
import styled from "styled-components";
import "./index.css";

const ExplanationStyled = styled.div`
	p {
		font-size: 1.3em;
		width: 100%;
		text-align: center;
	}

	.explanation-wrapper {
		max-width: 50%;
		margin: 0 auto;
	}
`;

const Explanation = (props) => {
	const { text } = props;
	return (
		<ExplanationStyled className="explanation-wrapper">
			<p>{text}</p>
		</ExplanationStyled>
	);
};

export default Explanation;
