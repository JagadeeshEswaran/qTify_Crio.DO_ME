/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./Card";
import style from "./Card.module.css";

const CardGrid = ({ albumData, gridTitle }) => {
	return (
		<div className={style.wrapper}>
			<section className={style.grid_container}>
				<article className={style.albumTitleWrapper}>
					<h1>{gridTitle}</h1>
					<h1 style={{ color: "var(--color-primary)", cursor: "pointer" }}>
						Collpase
					</h1>
				</article>
				<article className={style.cards_container}>
					{albumData.map((item) => (
						<Card key={item.id} item={item} cardType="album" />
					))}
				</article>
			</section>
		</div>
	);
};

export default CardGrid;
