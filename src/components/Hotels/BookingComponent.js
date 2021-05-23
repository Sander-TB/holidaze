import { useState } from "react";
import { BASE_URL, BOOKINGS_ENDPOINT } from "../../constants/api";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingComponent() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [customer_name, setCustomerName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const [submitting, setSubmitting] = useState(false);

	const url = `${BASE_URL}${BOOKINGS_ENDPOINT}`;

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		let sendBooking = {
			customer_name,
			email,
			phone,
			startDate,
			endDate,
		};
		axios.post(url, sendBooking).then(() => {
			setSubmitting(false);
			setCustomerName("");
			setEmail("");
			setPhone("");
			setStartDate("");
			setEndDate("");
			alert("Booking is Complete!");
		});
	};
	return (
		<div className='flex flex-col bg-lightest-ice w-full rounded-2xl px-5 shadow-lg'>
			<h3 className='font-heading text-center font-bold text-xl my-5'>
				When are you travelling?
			</h3>
			<form className='flex flex-col'>
				<div className='flex flex-row border bg-white border-main-noir border-b-0 rounded-t-lg'>
					<div className='flex flex-col p-5 border-r'>
						<p className='text-sm font-bold font-heading'>Check in Date</p>
						<DatePicker
							className='cursor-pointer text-noir-t-60 w-full text-lg border-dashed border font-body'
							selected={startDate}
							onChange={(startDate) => setStartDate(startDate)}
							selectsStart
							startDate={startDate}
							endDate={endDate}
						/>
					</div>
					<div className='flex flex-col p-5'>
						<p className='text-sm font-bold font-heading'>Check Out Date</p>
						<DatePicker
							className='cursor-pointer text-noir-t-60 w-full text-lg border-dashed border font-body'
							selected={endDate}
							onChange={(endDate) => setEndDate(endDate)}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
						/>
					</div>
				</div>
				<div className='flex flex-col p-5 bg-white border border-main-noir'>
					<p className='text-sm font-bold font-heading'>Your Full Name</p>
					<input
						placeholder='Name'
						className='py-2 px-1 border border-dashed'
						value={customer_name}
						onChange={(e) => setCustomerName(e.target.value)}
					/>
				</div>
				<div className='flex flex-col p-5 bg-white border border-t-0 border-main-noir'>
					<p className='text-sm font-bold font-heading'>Your Email</p>
					<input
						placeholder='Email'
						className='py-2 px-1 border border-dashed'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='flex flex-col p-5 bg-white border border-t-0 border-main-noir'>
					<p className='text-sm font-bold font-heading'>Your Phone Number</p>
					<input
						placeholder='Phone'
						className='py-2 px-1 border border-dashed'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>

				{submitting ? (
					<>
						<button
							onClick={handleSubmit}
							className='text-xl font-heading bg-lighter-water text-white py-3 rounded-lg mt-5 mb-10'>
							Booking...
						</button>
					</>
				) : (
					<button
						onClick={handleSubmit}
						className='text-xl font-heading bg-lighter-water text-white py-3 rounded-lg mt-5 mb-10'>
						Book This Room
					</button>
				)}
			</form>
		</div>
	);
}
