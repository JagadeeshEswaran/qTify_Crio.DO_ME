/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ item, cardType }) => {
	return (
		<Tooltip title={`${item.songs.length} Songs`} placement="top" arrow>
			<section className={style.card_container}>
				<article className={style.card_image_container}>
					<img src={item.image} alt={item.title} width={160} height={205} />

					<article className={style.chip_container}>
						<Chip
							label={`${item.follows} Follows`}
							size="small"
							style={{
								background: "var(--color-black)",
								color: "var(--color-white)",
							}}
						/>
					</article>
				</article>

				<article className={style.title_wrapper}>{item.title}</article>
			</section>
		</Tooltip>
	);
};

export default Card;
