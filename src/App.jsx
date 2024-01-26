import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
import CardGrid from "./components/cardGrid/CardGrid";

function App() {
	const [topAlbumsList, setTopAlbumsList] = useState([]);
	const [newAlbumsList, setNewAlbumsList] = useState([]);
	const [showAllBtn1, setShowAllBtn1] = useState(true);
	const [showAllBtn2, setShowAllBtn2] = useState(true);

	const generateTopAlbums = async () => {
		try {
			const topAlbumData = await fetchTopAlbums();
			setTopAlbumsList(topAlbumData);

			const newAlbumsData = await fetchNewAlbums();
			setNewAlbumsList(newAlbumsData);
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
			<CardGrid
				albumData={topAlbumsList}
				gridTitle="Top Albums"
				showBtn={showAllBtn1}
				handleShowBtn={setShowAllBtn1}
			/>

			<div>
				<hr style={{ margin: "1rem 0", background: "var(--color-primary)" }} />
			</div>

			{/* ******  New Albums Card Grid ******** */}
			<CardGrid
				albumData={newAlbumsList}
				gridTitle="Top Albums"
				showBtn={showAllBtn2}
				handleShowBtn={setShowAllBtn2}
			/>
		</>
	);
}

export default App;
