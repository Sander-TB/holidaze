import { useState } from "react";
import { BASE_URL, MESSAGES_ENDPOINT } from "../../constants/api";
import axios from "axios";
import Nav from "../Navigation/Nav";

const url = `${BASE_URL}${MESSAGES_ENDPOINT}`;

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		let sendMessage = { name, email, phone, subject, message };
		axios.post(url, sendMessage).then(() => {
			setSubmitting(false);
			setName("");
			setEmail("");
			setPhone("");
			setSubject("");
			setMessage("");
		});
	};

	return (
		<>
			<Nav />
			<section className='bg-white text-main-noir mt-10 flex flex-col items-center justify-center'>
				<div className=' break-normal'>
					<h1 className='font-heading font-bold text-4xl '>
						Have Any Questions?
					</h1>
					<p className='font-body text-2xl mb-10'>Send us a message</p>

					<p className='font-body md:text-xl text-lg font-light mb-5 md:w-full w-90'>
						Customer service will answer you in under 2 hours
					</p>
				</div>
			</section>
			<section className='bg-lightest-ice w-5/6 lg:w-1/2 mx-auto font-heading rounded-2xl mb-20 shadow'>
				<form
					className='flex flex-col w-full text-lg py-10 md:py-5'
					onSubmit={handleSubmit}>
					<div className='flex flex-col md:flex-row justify-center'>
						<div className='flex flex-col w-full md:w-1/2 justify-center items-center'>
							<input
								placeholder='Full Name'
								type='text'
								className='mb-7 py-3 px-4 w-75 rounded-lg'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								placeholder='Email'
								type='email'
								className='py-3 px-4 w-75 rounded-lg'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								placeholder='Phone number'
								type='tel'
								className='my-7 py-3 px-4 w-75 rounded-lg'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							<input
								placeholder='Subject'
								type='text'
								className='py-3 px-4 w-75 rounded-lg'
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div className=' flex justify-center items-center'>
							<textarea
								placeholder='Message'
								rows='10'
								cols='29'
								className='my-7 py-3 px-4 md:mr-10 rounded-lg'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
					</div>
					{submitting ? (
						<button
							type='submit'
							className='disabled py-3 px-4 w-3/4 md:w-2/3 mb-10 font-heading self-center rounded-lg bg-main-grass shadow md:mt-10'>
							Sending...
						</button>
					) : (
						<button
							type='submit'
							className='py-3 px-4 w-3/4 md:w-2/3 mb-10 font-heading self-center rounded-lg bg-main-grass shadow md:mt-10'>
							Send
						</button>
					)}
				</form>
			</section>
		</>
	);
}
