import { BASE_URL, HOTELS_ENDPOINT } from "../../../constants/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AdminHotels() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = `${BASE_URL}${HOTELS_ENDPOINT}`;

	useEffect(
		() => {
			async function getAllHotels() {
				try {
					const response = await axios.get(url);
					setHotels(response.data);
				} catch (e) {
					console.error(e);
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getAllHotels();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>An error has occurred, please reload the page</div>;

	return (
		<>
			{hotels.map((hotel) => {
				return (
					<Link key={hotel.id} to={`/hotels/${hotel.id}`}>
						<div
							key={hotel.id}
							className='w-full max-w-sm h-96 flex flex-col rounded-xl mt-10 mb-3 shadow-lg bg-white'>
							<img
								src={hotel.image1}
								alt={hotel.name}
								className='rounded-t-xl relative h-1/2'
							/>
							<h3 className='text-3xl md:text-2xl text-center font-bold text-main-noir mt-10'>
								{hotel.name}
							</h3>
						</div>
					</Link>
				);
			})}
		</>
	);
}
