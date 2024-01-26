import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
	try {
		/**
		 * With axios
		 */
		let response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);

		/**
		 * With Fetch
		 */
		// let response = await fetch(`${BACKEND_ENDPOINT}/albums/top`);
		// let resData = await response.json();

		// console.log(resData);

		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchNewAlbums = async () => {
	try {
		/**
		 * With axios
		 */
		let response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);

		/**
		 * With Fetch
		 */
		// let response = await fetch(`${BACKEND_ENDPOINT}/albums/top`);
		// let resData = await response.json();

		// console.log(resData);

		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};
