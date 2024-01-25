import { IoSearchOutline } from "react-icons/io5";
import styles from "./Navbar.module.css";
import navbar_logo from "../../assets/navbar_logo.svg";

function Navbar() {
	return (
		<nav className={styles.navbar_section}>
			<a href="#">
				<article className={styles.logo_container}>
					<img src={navbar_logo} alt="qTify Logo" />
				</article>
			</a>

			<article className={styles.searchbar_container}>
				<form action="#" className={styles.searchbar_form}>
					<input
						type="text"
						placeholder="Search a song of your choice"
						className={styles.search_input}
					/>
					<IoSearchOutline className={styles.search_icon} />
				</form>
			</article>

			<article className={styles.btn_container}>
				<button className={styles.navbar_btn}>Give Feedback</button>
			</article>
		</nav>
	);
}

export default Navbar;
