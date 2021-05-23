import { BASE_URL, MESSAGES_ENDPOINT } from "../../../constants/api";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoPersonCircleOutline } from "react-icons/io5";
import dateFormat from "dateformat";

export default function Bookings() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = `${BASE_URL}${MESSAGES_ENDPOINT}`;

	useEffect(
		() => {
			async function getAllMessages() {
				try {
					const response = await axios.get(url);
					setMessages(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getAllMessages();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>An error has occurred, please reload</div>;
	return (
		<>
			<section className='bg-white rounded-xl w-full justify-center py-5 px-3 mt-10 mb-32 hidden md:block'>
				<ul className='flex justify-around border py-2 border-main-ice font-bold mb-7'>
					<li className='text-noir-t-60 '>Name</li>
					<li className='text-noir-t-60 '>Email</li>
					<li className='text-noir-t-60 '>Phone</li>
					<li className='text-noir-t-60 '>Time</li>
				</ul>
				{messages.map((message) => {
					const Date = dateFormat(message.updated_at, "mmmm dS, yyyy");

					return (
						<>
							<ul key={message.id} className='flex flex-col items-stretch'>
								<li className='bg-main-ice mb-5 py-2 flex justify-evenly items-center'>
									<p>
										<IoPersonCircleOutline className='inline mr-3 text-4xl' />
										{message.name}
									</p>
									<p className='px-5'>{message.email}</p>
									<p className='px-5'>{message.phone}</p>
									<p className='px-5'>{Date}</p>
								</li>
							</ul>
						</>
					);
				})}
			</section>
			<section className='bg-white mt-10 mb-20 text-xl rounded-2xl w-full justify-center py-5 pt-16 md:hidden block'>
				{messages.map((message) => {
					const Date = dateFormat(message.updated_at, "mmmm dS, yyyy");
					return (
						<div
							className='flex flex-col nth w-full  py-10 mb-7'
							key={message.id}>
							<div className='flex flex-row justify-between'>
								<p className='text-main-noir pb-5 font-bold pl-10'>Name</p>
								<p className='pr-10'>{message.name}</p>
							</div>
							<div className='flex flex-row justify-between'>
								<p className='text-main-noir pb-5 font-bold pl-10'>Email</p>
								<p className='pr-10'>{message.email}</p>
							</div>
							<div className='flex flex-row justify-between'>
								<p className='text-main-noir pb-5 font-bold pl-10'>Phone</p>
								<p className='pr-10'>{message.phone}</p>
							</div>
							<div className='flex flex-row justify-between'>
								<p className='text-main-noir font-bold pl-10'>Time</p>
								<p className='pr-10'>{Date}</p>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
}
