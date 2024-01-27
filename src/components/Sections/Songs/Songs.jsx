/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CardGrid from "../../cardGrid/CardGrid";
import FilterButtons from "./FilterButtons";
import FilteredCardGrid from "./FilteredCardGrid";
import style from "./Songs.module.css";

const Songs = ({ songsData }) => {
	const [genres, setGenres] = useState([]);
	const [showAllBtn, setShowAllBtn] = useState(true);

	let tempArr = [];
	const filterGenre = async () => {
		let songsList = await songsData;
		let genresList = songsList.map((item) => item.genre.label);

		let myGenresSet = new Set();

		genresList.forEach((ele) => myGenresSet.add(ele));

		for (let genre of myGenresSet) {
			// console.log(genre);
			tempArr.push(genre);
		}

		setGenres(tempArr);
	};

	useEffect(() => {
		filterGenre();
	}, [songsData]);

	// console.log(genres);

	return (
		<section className={style.songsContainer}>
			<FilteredCardGrid
				songsData={songsData}
				gridTitle="Songs"
				// handleShowBtn={setShowAllBtn}
				showBtn={showAllBtn}
				genreList={genres}
			/>
		</section>
	);
};

export default Songs;
