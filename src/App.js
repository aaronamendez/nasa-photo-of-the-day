import React, { useEffect, useState } from "react";
import axios from "axios";

import { API_KEY, API_URL } from "./Constants";
import Image from "./components/Image/Image";
import Explanation from "./components/Explanation/Explanation";

import "./App.css";

function App() {
	const [nasaData, setNasaData] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(`${API_URL}?api_key=${API_KEY}`)
				.then((res) => {
					console.log(res.data);
					setNasaData(res.data);
				})
				.catch((err) => {
					console.error(err);
				});
		};
		fetchData();
	}, []);
	return (
		<div className="App">
			<nav>
				<a
					href="https://www.calendardate.com/todays.htm"
					target="_blank"
					rel="noopener noreferrer"
				>
					{nasaData.date}
				</a>
				<a
					href="https://github.com/aaronamendez/nasa-photo-of-the-day"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github Repository
				</a>
			</nav>
			<div>
				<h1>{nasaData.title}</h1>
			</div>
			<Image nasaURL={nasaData.url} />
			<Explanation text={nasaData.explanation} />
		</div>
	);
}

export default App;
