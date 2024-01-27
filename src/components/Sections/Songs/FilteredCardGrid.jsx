/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CardGrid from "../../cardGrid/CardGrid";

const FilteredCardGrid = ({ songsData, gridTitle, showBtn, genreList }) => {
	const [selectedGenre, setSelectedGenre] = useState("All");
	const [filteredSongsData, setFilteredSongsData] = useState([]);

	console.log(
		"Genre : " +
			selectedGenre +
			"  ||  Then, Filtered Songs : " +
			filteredSongsData.length
	);

	useEffect(() => {
		// if (!selectedGenre) {
		// 	setSelectedGenre("All");
		// 	setFilteredSongsData(songsData);
		// }

		if (selectedGenre === "All") {
			setFilteredSongsData(songsData);
		}

		if (selectedGenre !== "All") {
			setFilteredSongsData(
				songsData.filter((item) => item.genre.label === selectedGenre)
			);
		}
	}, [selectedGenre]);

	// console.log(songsData);

	return (
		<CardGrid
			albumData={filteredSongsData}
			gridTitle={gridTitle}
			showBtn={showBtn}
			genreList={genreList}
			setGenre={setSelectedGenre}
		/>
	);
};

export default FilteredCardGrid;
