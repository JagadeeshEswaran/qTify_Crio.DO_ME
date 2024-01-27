/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./Songs.module.css";
import Card from "../../cardGrid/Card";
import Carousel from "../../cardCarousel/Carousel";
import CardGrid from "../../cardGrid/CardGrid";

const FilterButtons = ({ genreList, setGenre }) => {
	const [value, setValue] = useState(0);

	const handleChange = (e) => {
		setValue(e.target.id);
	};

	// console.log(genreList);
	return (
		<>
			<section className={style.filterBtnContainer}>
				<h3 onClick={() => setGenre("All")}>All</h3>
				{genreList?.map((item, idx) => (
					<h3 key={item} onClick={() => setGenre(item)}>
						{item}
					</h3>
				))}
			</section>
		</>
	);
};

export default FilterButtons;
