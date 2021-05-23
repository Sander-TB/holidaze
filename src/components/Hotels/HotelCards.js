import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Star from "../../utils/Star";
import {
	WifiProp,
	BreakfastProp,
	FamilyProp,
	CoffeeProp,
} from "../../utils/HotelProperties";
import { IoSearch } from "react-icons/io5";

export default function HotelCards() {
	const [hotels, setHotels] = useState([]);
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState([]);
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

	const onSuggestHandler = (search) => {
		setSearch(search);
		setSuggestions([]);
	};

	const onChangeHandler = (search) => {
		let matches = [];
		if (search.length > 0) {
			matches = hotels.filter((hotel) => {
				const regex = new RegExp(`${search}`, "gi");
				return hotel.name.match(regex);
			});
		}
		setSuggestions(matches);
		setSearch(search);
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>An error has occurred, please reload the page</div>;

	return (
		<>
			<section className='bg-lighter-water text-main-noir flex flex-col justify-center items-center pb-20'>
				<h1 className='text-4xl font-bold font-heading mt-10 mb-5'>
					Available Hotels
				</h1>
				<div className='w-full flex mt-16 mb-1 items-center justify-center'>
					<input
						id='autoSearch'
						type='text'
						placeholder='Where do you want to go?'
						className='w-73 px-5 py-3 rounded-l-lg font-body'
						onChange={(e) => onChangeHandler(e.target.value)}
						value={search}
					/>
					<button className='bg-lighter-fire py-3 px-3 text-2xl rounded-r-lg md:mr-8'>
						<IoSearch />
					</button>
				</div>
				{suggestions &&
					suggestions.map((suggestion, i) => (
						<div
							key={i}
							onClick={() => onSuggestHandler(suggestion.name)}
							className='flex flex-col text-xl w-72 items-start justify-center mr-18 bg-white cursor-pointer hover:bg-main-ice'>
							{suggestion.name}
						</div>
					))}
			</section>
			<main className='bg-lightest-ice flex flex-col px-20 lg:px-40 pb-20'>
				<div className='grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-12 items-center justify-center'>
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
						function Coffee() {
							if (hotel.tea_coffee === true) {
								return <CoffeeProp />;
							} else {
								return "";
							}
						}
						Wifi();
						Breakfast();
						Family();
						Coffee();

						if (search.length < 10) {
							return (
								<Link key={hotel.id} to={`/hotels/${hotel.id}`}>
									<div
										key={hotel.id}
										className='w-full max-w-sm md:h-card sm:h-auto h-card flex flex-col rounded-xl mt-10 mb-3 shadow-lg bg-white'>
										<div className='h-2/5'>
											<img
												src={hotel.image1}
												alt={hotel.name}
												className='rounded-t-xl relative'
											/>
										</div>
										<div className='h-1/2 flex font-heading flex-col px-10 py-5'>
											<h3 className='text-3xl md:text-2xl font-bold text-main-noir mt-3'>
												{hotel.name}
											</h3>
											<div className='flex justify-center h-full flex-col'>
												<Wifi />
												<Breakfast />
												<Family />
												<Coffee />
											</div>
											<div className='flex  items-end justify-between mt-5 relative top-10 md:top-0 lg:top-10'>
												<div className='flex flex-col text-noir-t-40 text-sm'>
													<Rating />
													{hotel.rating} Stars
												</div>
												<p className='flex flex-col items-end text-sm'>
													From
													<span className='text-main-fire text-xs'>
														1800{" "}
														<span className='text-2xl pl-1'>{hotel.price}</span>
													</span>
													NOK
												</p>
											</div>
										</div>
									</div>
								</Link>
							);
						}

						if (search === hotel.name) {
							return (
								<Link key={hotel.id} to={`/hotels/${hotel.id}`}>
									<div
										key={hotel.id}
										className='w-full max-w-sm md:h-card sm:h-auto h-card flex flex-col rounded-xl mt-10 mb-3 shadow-lg bg-white'>
										<div className='h-2/5'>
											<img
												src={hotel.image1}
												alt={hotel.name}
												className='rounded-t-xl relative'
											/>
										</div>
										<div className='h-1/2 flex font-heading flex-col px-10 py-5'>
											<h3 className='text-3xl md:text-2xl font-bold text-main-noir mt-3'>
												{hotel.name}
											</h3>
											<div className='flex justify-center h-full flex-col'>
												<Wifi />
												<Breakfast />
												<Family />
												<Coffee />
											</div>
											<div className='flex  items-end justify-between mt-5 relative top-10 md:top-0 lg:top-10'>
												<div className='flex flex-col text-noir-t-40 text-sm'>
													<Rating />
													{hotel.rating} Stars
												</div>
												<p className='flex flex-col items-end text-sm'>
													From
													<span className='text-main-fire text-xs'>
														1800{" "}
														<span className='text-2xl pl-1'>{hotel.price}</span>
													</span>
													NOK
												</p>
											</div>
										</div>
									</div>
								</Link>
							);
						} else {
							return null;
						}
					})}
				</div>
			</main>
		</>
	);
}
