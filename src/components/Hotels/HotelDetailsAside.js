import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HOTELS_ENDPOINT } from "../../constants/api";
import { useParams } from "react-router-dom";
import {
	WifiProp,
	BreakfastProp,
	FamilyProp,
	CoffeeProp,
	NonSmokingProp,
	FitnessProp,
	WheelchairProp,
	RestaurantProp,
	RoomServiceProp,
	BarProp,
} from "../../utils/HotelProperties";

export default function HotelDetailsAside() {
	const [HotelProperties, setHotelProperties] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();
	const url = `${BASE_URL}${HOTELS_ENDPOINT}/${id}`;

	useEffect(
		() => {
			async function getHotelProperties() {
				try {
					const response = await axios.get(url);
					setHotelProperties(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getHotelProperties();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>An error has occurred, please reload the page</div>;

	function Wifi() {
		if (HotelProperties.wifi === true) {
			return <WifiProp />;
		} else {
			return null;
		}
	}

	function Breakfast() {
		if (HotelProperties.breakfast === true) {
			return <BreakfastProp />;
		} else {
			return null;
		}
	}

	function Family() {
		if (HotelProperties.child_friendly === true) {
			return <FamilyProp />;
		} else {
			return null;
		}
	}

	function Coffee() {
		if (HotelProperties.tea_coffee === true) {
			return <CoffeeProp />;
		} else {
			return null;
		}
	}

	function NonSmoking() {
		if (HotelProperties.nonsmoking === true) {
			return <NonSmokingProp />;
		} else {
			return null;
		}
	}

	function Fitness() {
		if (HotelProperties.fitness_center === true) {
			return <FitnessProp />;
		} else {
			return null;
		}
	}

	function Wheelchair() {
		if (HotelProperties.accessible === true) {
			return <WheelchairProp />;
		} else {
			return null;
		}
	}

	function Restaurant() {
		if (HotelProperties.restaurant === true) {
			return <RestaurantProp />;
		} else {
			return null;
		}
	}

	function RoomService() {
		if (HotelProperties.room_service === true) {
			return <RoomServiceProp />;
		} else {
			return null;
		}
	}

	function Bar() {
		if (HotelProperties.bar === true) {
			return <BarProp />;
		} else {
			return null;
		}
	}
	Wifi();
	Breakfast();
	Coffee();
	Family();
	NonSmoking();
	Fitness();
	Wheelchair();
	Restaurant();
	RoomService();
	Bar();

	return (
		<div className='flex flex-col bg-lightest-ice mb-16 w-full items-center rounded-2xl shadow-lg md:mr-10 lg:mr-0'>
			<h2 className=' text-main-noir md:w-75 w-full text-center text-3xl font-bold underline font-heading my-5 py-1 rounded-lg'>
				We Offer:
			</h2>
			<div className='flex flex-col text-main-noir mb-10 px-2'>
				<Wifi />
				<Breakfast />
				<Coffee />
				<Family />
				<NonSmoking />
				<Fitness />
				<Wheelchair />
				<Restaurant />
				<RoomService />
				<Bar />
			</div>
		</div>
	);
}
