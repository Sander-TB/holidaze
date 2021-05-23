import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import Nav from "../Navigation/Nav";
import { StarLarge as Star } from "../../utils/Star";
import { IoArrowUndo } from "react-icons/io5";
import HotelDetailsAside from "./HotelDetailsAside";
import BookingComponent from "./BookingComponent";

export default function HotelDetails() {
	const [hotelDetails, setHotelDetails] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const { id } = useParams();
	const url = `${BASE_URL}${HOTELS_ENDPOINT}/${id}`;
	const history = useHistory();

	useEffect(
		() => {
			async function getOneHotel() {
				try {
					const response = await axios.get(url);
					setHotelDetails(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getOneHotel();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const name = hotelDetails.name;
	const paragraph = hotelDetails.description;
	const paragraph2 = hotelDetails.description2;
	const image1 = hotelDetails.image1;
	const image2 = hotelDetails.image2;
	const image3 = hotelDetails.image3;
	const image4 = hotelDetails.image4;

	function goBack() {
		history.push("/hotels");
	}

	function Rating() {
		if (hotelDetails.rating === 1) {
			return (
				<div className='mt-18 ml-5'>
					<Star />
				</div>
			);
		} else if (hotelDetails.rating === 2) {
			return (
				<div className='mt-18 ml-5'>
					<Star />
					<Star />
				</div>
			);
		} else if (hotelDetails.rating === 3) {
			return (
				<div className='mt-18 ml-5'>
					<Star />
					<Star />
					<Star />
				</div>
			);
		} else if (hotelDetails.rating === 4) {
			return (
				<div className='mt-18 ml-5'>
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
			);
		} else if (hotelDetails.rating === 5) {
			return (
				<div className='mt-18 ml-5'>
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

	return (
		<>
			<Nav />
			{loading ? (
				"Loading.."
			) : (
				<main key={id} className='flex flex-col lg:mx-40 md:mx-20 mb-20 mx-10'>
					<div className='flex mb-10'>
						<h1 className='font-heading font-bold lg:text-5xl md:text-4xl text-3xl mt-16'>
							{name}
						</h1>
						<Rating />
					</div>
					<div className='flex flex-col lg:flex-row'>
						<section className='lg:w-3/4 w-full mb-20 md:mb-0'>
							<div className='grid grid-cols-2 gap-1 mb-10'>
								<img src={image1} alt={name} className='w-full' />
								<img src={image2} alt={name} className='w-full' />
								<img src={image3} alt={name} className='w-full' />
								<img src={image4} alt={name} className='w-full' />
							</div>
							<p className='leading-loose mb-5 font-body'>{paragraph}</p>
							<p className='leading-loose font-body'>{paragraph2}</p>
							<button
								onClick={goBack}
								className='hidden lg:block self-start bg-lighter-water rounded-md px-2 py-1 mt-10 text-white'>
								<IoArrowUndo className='inline mb-1' fill='#fff' /> Go Back
							</button>
						</section>

						<aside className='flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-center ml-0 lg:ml-16 w-full md:mx-auto lg:w-1/3 md:mt-20 lg:mt-0 mb-20'>
							<HotelDetailsAside />
							<BookingComponent />
						</aside>
						<button
							onClick={goBack}
							className='lg:hidden block w-1/3 md:w-1/4 mx-auto text-lg bg-lighter-water rounded-md px-2 py-1 text-white'>
							<IoArrowUndo className='inline mb-1' fill='#fff' /> Go Back
						</button>
					</div>
				</main>
			)}
		</>
	);
}
