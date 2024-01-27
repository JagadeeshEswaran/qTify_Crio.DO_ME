import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import {
	fetchGenreList,
	fetchNewAlbums,
	fetchSongsList,
	fetchTopAlbums,
} from "./api/api";
import CardGrid from "./components/cardGrid/CardGrid";
import Songs from "./components/Sections/Songs/Songs";

function App() {
	const [topAlbumsList, setTopAlbumsList] = useState([]);
	const [newAlbumsList, setNewAlbumsList] = useState([]);
	const [songsList, setSongsList] = useState([]);

	const [showAllBtn1, setShowAllBtn1] = useState(true);
	const [showAllBtn2, setShowAllBtn2] = useState(true);

	const generateTopAlbums = async () => {
		try {
			const topAlbumData = await fetchTopAlbums();
			setTopAlbumsList(topAlbumData);

			const newAlbumsData = await fetchNewAlbums();
			setNewAlbumsList(newAlbumsData);

			const songsList = await fetchSongsList();
			setSongsList(songsList);

			const genreList = await fetchGenreList();
			console.log("Genre List from API : ", genreList.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		generateTopAlbums();
	}, []);

	// console.log(songsList);

	return (
		<>
			<Navbar />
			<Hero />

			{/* ******  Top Albums Card Grid ******** */}
			<CardGrid
				albumData={topAlbumsList}
				gridTitle="Top Albums"
				showBtn={showAllBtn1}
				handleShowBtn={setShowAllBtn1}
			/>

			{/* ******  New Albums Card Grid ******** */}
			<CardGrid
				albumData={newAlbumsList}
				gridTitle="New Albums"
				showBtn={showAllBtn2}
				handleShowBtn={setShowAllBtn2}
			/>

			<div
				style={{
					// color: "lawngreen",
					background: "var(--color-primary)",
					height: "2px",
					marginTop: "2rem",
				}}></div>

			{/* ******  Songs Section ******** */}
			<Songs songsData={songsList} />
		</>
	);
}

export default App;
