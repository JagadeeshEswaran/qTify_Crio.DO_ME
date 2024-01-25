import styles from "./Hero.module.css";
import hero_img from "../../assets/hero_img.svg";

const Hero = () => {
	return (
		<>
			<section className={styles.hero_container}>
				<article className={styles.hero_h1}>
					<h1>100 Thousand Songs, ad-free</h1>
					<h1>Over thousands podcast episodes</h1>
				</article>

				<article className={styles.hero_img_container}>
					<img src={hero_img} alt="Hero Image with Headphone" />
				</article>
			</section>
		</>
	);
};

export default Hero;
