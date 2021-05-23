import { useState } from "react";
import { BASE_URL, HOTELS_ENDPOINT } from "../../../constants/api";
import axios from "axios";
import { useHistory } from "react-router";
import { IoArrowUndo } from "react-icons/io5";

export default function HotelsCrud() {
	const [name, setName] = useState("");
	const [image1, setImage1] = useState("");
	const [image2, setImage2] = useState("");
	const [image3, setImage3] = useState("");
	const [image4, setImage4] = useState("");
	const [description, setDescription] = useState("");
	const [description2, setDescription2] = useState("");
	const [rating, setRating] = useState("");
	const [location, setLocation] = useState("");
	const [price, setPrice] = useState("");

	const [submitting, setSubmitting] = useState(false);

	const url = `${BASE_URL}${HOTELS_ENDPOINT}`;
	const history = useHistory();

	function goBack() {
		history.push("/admin");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		let sendBooking = {
			name,
			image1,
			image2,
			image3,
			image4,
			description,
			description2,
			rating,
			location,
			price,
		};
		axios.post(url, sendBooking).then(() => {
			setSubmitting(false);
			setName("");
			setImage1("");
			setImage2("");
			setImage3("");
			setImage4("");
			setDescription("");
			setDescription2("");
			setRating("");
			setLocation("");
			setPrice("");
		});
	};
	return (
		<div className='flex flex-col bg-lightest-ice w-full rounded-2xl px-5 shadow-lg'>
			<button
				onClick={goBack}
				className=' self-start text-lg font-heading bg-lighter-water text-white py-3 px-5 rounded-lg mt-5'>
				<IoArrowUndo fill='white' className='inline mb-1' /> Go Back
			</button>
			<h2 className='font-heading text-center font-bold text-5xl my-10'>
				Add A New Hotel
			</h2>
			<form className='flex flex-col items-center mx-auto bg-main-ice rounded-xl mb-10 md:w-auto w-90'>
				<div className='flex flex-col p-5 w-full'>
					<p className='text-sm font-bold font-heading'>Hotel Name</p>
					<input
						placeholder='Name'
						className='py-3 px-4 rounded-lg'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='flex flex-col p-5 w-full'>
					<p className='text-sm font-bold font-heading'>Location</p>
					<input
						placeholder='Location'
						className='py-3 px-4 rounded-lg'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</div>
				<div className='flex flex-col md:flex-row w-full'>
					<div className='flex flex-col p-5 md:w-1/2 w-full'>
						<p className='text-sm font-bold font-heading'>Price</p>
						<input
							placeholder='Price'
							className='py-3 px-4 rounded-lg'
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					<div className='flex flex-col p-5 md:w-1/2 w-full'>
						<p className='text-sm font-bold font-heading'>
							Rating (Number from 1-5)
						</p>
						<input
							placeholder='1-5'
							className='py-3 px-4 rounded-lg'
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						/>
					</div>
				</div>

				<div className='flex flex-col md:flex-row w-full'>
					<div className='flex flex-col p-5 md:w-1/2 w-full'>
						<p className='text-sm font-bold font-heading'>Image 1</p>
						<input
							placeholder='Image 1'
							className='py-3 px-4 rounded-lg'
							value={image1}
							onChange={(e) => setImage1(e.target.value)}
						/>
					</div>
					<div className='flex flex-col p-5 md:w-1/2 w-full'>
						<p className='text-sm font-bold font-heading'>Image 2</p>
						<input
							placeholder='Image 2'
							className='py-3 px-4 rounded-lg'
							value={image2}
							onChange={(e) => setImage2(e.target.value)}
						/>
					</div>
				</div>

				<div className='flex flex-col md:flex-row w-full'>
					<div className='flex flex-col p-5 md:w-1/2 w-full'>
						<p className='text-sm font-bold font-heading'>Image 3</p>
						<input
							placeholder='Image 3'
							className='py-3 px-4 rounded-lg'
							value={image3}
							onChange={(e) => setImage3(e.target.value)}
						/>
					</div>
					<div className='flex flex-col p-5 md:w-1/2 w-full'>
						<p className='text-sm font-bold font-heading'>Image 4</p>
						<input
							placeholder='Image 4'
							className='py-3 px-4 rounded-lg'
							value={image4}
							onChange={(e) => setImage4(e.target.value)}
						/>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row full'>
					<div className='flex flex-col p-5'>
						<p className='text-sm font-bold font-heading'>
							Hotel Description 1
						</p>
						<textarea
							placeholder='Paragraph 1'
							className='py-2 px-1 rounded-lg'
							cols='35'
							rows='5'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className='flex flex-col p-5'>
						<p className='text-sm font-bold font-heading'>
							Hotel Description 2
						</p>
						<textarea
							placeholder='Paragraph 2'
							className='py-2 px-1 rounded-lg'
							cols='35'
							rows='5'
							value={description2}
							onChange={(e) => setDescription2(e.target.value)}
						/>
					</div>
				</div>
				{submitting ? (
					<>
						<button
							onClick={handleSubmit}
							className='text-xl font-heading bg-lighter-water text-white py-3 rounded-lg mt-5 mb-10 w-90'>
							Adding...
						</button>
					</>
				) : (
					<button
						onClick={handleSubmit}
						className='text-xl font-heading bg-lighter-water text-white py-3 rounded-lg mt-5 mb-10 w-90'>
						Add Hotel
					</button>
				)}
			</form>
		</div>
	);
}
