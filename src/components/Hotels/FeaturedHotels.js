import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Star from "../../utils/Star";
import {
	WifiProp,
	BreakfastProp,
	FamilyProp,
} from "../../utils/HotelProperties";

export default function FeaturedHotels() {
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
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 items-center justify-center'>
			{hotels.map((hotel) => {
				function Rating() {
					if (hotel.rating === 1) {
						return (
							<div>
								<Star />
							</div>
						);
					} else if (hotel.rating === 2) {
						return (
							<div>
								<Star />
								<Star />
							</div>
						);
					} else if (hotel.rating === 3) {
						return (
							<div>
								<Star />
								<Star />
								<Star />
							</div>
						);
					} else if (hotel.rating === 4) {
						return (
							<div>
								<Star />
								<Star />
								<Star />
								<Star />
							</div>
						);
					} else if (hotel.rating === 5) {
						return (
							<div>
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</div>
						);
					}
					return Rating;
				}
				Rating();

				function Wifi() {
					if (hotel.wifi === true) {
						return <WifiProp />;
					} else {
						return "";
					}
				}

				function Breakfast() {
					if (hotel.breakfast === true) {
						return <BreakfastProp />;
					} else {
						return "";
					}
				}
				function Family() {
					if (hotel.child_friendly === true) {
						return <FamilyProp />;
					} else {
						return "";
					}
				}
				Wifi();
				Breakfast();
				Family();

				if (hotel.featured !== true) {
					return "";
				}
				return (
					<Link key={hotel.id} to={`/hotels/${hotel.id}`}>
						<div
							key={hotel.id}
							className=' w-full max-w-xs h-card rounded-xl my-10 shadow-lg bg-white'>
							<div className='h-2/5'>
								<img
									src={hotel.image1}
									alt={hotel.name}
									className='rounded-t-xl relative'
								/>
							</div>
							<div className='h-1/2 flex font-heading flex-col px-10 py-5'>
								<h3 className='text-xl self-center font-bold text-lighter-water mb-5'>
									{hotel.name}
								</h3>
								<div className='flex flex-col my-3'>
									<Wifi />
									<Breakfast />
									<Family />
								</div>
								<div className='flex items-end justify-between mt-5'>
									<div className='flex flex-col text-noir-t-40 text-sm'>
										<Rating />
										{hotel.rating} Stars
									</div>
									<p className='flex flex-col items-end text-sm'>
										From
										<span className='text-main-fire text-xs'>
											1800 <span className='text-xl pl-1'>{hotel.price}</span>
										</span>
										NOK
									</p>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
