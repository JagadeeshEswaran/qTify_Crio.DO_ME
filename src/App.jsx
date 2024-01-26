import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { fetchTopAlbums } from "./api/api";
import CardGrid from "./components/cardGrid/CardGrid";

function App() {
	const [topAlbumsList, setTopAlbumsList] = useState([]);

	const generateTopAlbums = async () => {
		try {
			const newData = await fetchTopAlbums();
			setTopAlbumsList(newData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		generateTopAlbums();
	}, []);

	// console.log(topAlbumsList);

	return (
		<>
			<Navbar />
			<Hero />

			{/* ******  Top Albums Card Grid ******** */}
			<CardGrid albumData={topAlbumsList} gridTitle="Top Albums" />

			<hr style={{ margin: "1rem 0", background: "var(--color-primary)" }} />

			{/* ******  New Albums Card Grid ******** */}
		</>
	);
}

export default App;
