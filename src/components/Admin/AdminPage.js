import Sidebar from "../Navigation/Sidebar";
import Graph1 from "../../assets/images/Graph1.png";
import Graph2 from "../../assets/images/Graph2.png";
import Graph3 from "../../assets/images/Graph3.png";
import AdminHotels from "./components/AdminHotels";
import AddNewHotel from "./components/AddNewHotel";
import Bookings from "./components/Bookings";
import Messages from "./components/Messages";

export default function AdminPage() {
	return (
		<main className='bg-lightest-ice'>
			<Sidebar />
			<section className='flex flex-col items-center px-10 lg:ml-80 lg:w-75'>
				<h1
					className='self-start text-3xl font-bold font-heading text-lighter-noir mt-10 mb-10'
					id='overview'>
					Overview
				</h1>
				<div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-12 items-center'>
					<div className=' flex flex-col items-center justify-center text-3xl  h-56 bg-main-grass rounded-xl shadow-lg'>
						<h2 className='text-white my-3'>Total Hotels</h2>
						<p className='text-5xl text-white font-extralight'>5</p>
					</div>
					<div className=' flex flex-col justify-center items-center text-3xl bg-lighter-water h-56 rounded-xl shadow-lg'>
						<h2 className='text-white my-3'>Number of Bookings</h2>
						<p className='text-5xl text-white font-extralight'>0</p>
					</div>
					<div className=' flex flex-col items-center justify-center text-3xl  bg-lighter-fire  h-56 rounded-xl shadow-lg'>
						<h2 className='text-white my-5'>Messages</h2>
						<ul className='text-sm'>
							<li>0 New</li>
							<li>15 Read</li>
						</ul>
					</div>
					<div className=' flex flex-col items-center justify-center text-2xl shadow-lg  h-56 rounded-xl bg-white'>
						<h2>Growth</h2>
						<img src={Graph1} alt='Growth Graph' className='w-3/4' />
					</div>
					<div className=' flex flex-col items-center justify-center text-2xl shadow-lg  h-56 rounded-xl bg-white'>
						<h2>Total Revenue</h2>
						<img src={Graph2} alt='Revenue Graph' className='w-3/4' />
					</div>
					<div className=' flex flex-col items-center justify-center text-2xl shadow-lg  h-56 rounded-xl bg-white'>
						<h2>Ratings Received</h2>
						<img src={Graph3} alt='Ratings Graph' className='w-1/2' />
					</div>
				</div>
			</section>
			<section
				id='hotels'
				className='flex flex-col items-center px-10 mt-32 lg:ml-80 lg:w-75'>
				<h1 className='self-start text-3xl font-bold font-heading text-lighter-noir'>
					Hotels
				</h1>
				<div className='grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-12 items-center justify-center'>
					<AddNewHotel />
					<AdminHotels />
				</div>
			</section>
			<section
				id='bookings'
				className='flex flex-col items-center px-10  mt-32  lg:ml-80 lg:w-75'>
				<h1 className='self-start text-3xl font-bold font-heading text-lighter-noir'>
					Bookings
				</h1>
				<Bookings />
			</section>
			<section
				id='messages'
				className='flex flex-col items-center px-10  mt-32  lg:ml-80 lg:w-75'>
				<h1 className='self-start text-3xl font-bold font-heading text-lighter-noir'>
					Messages
				</h1>
				<Messages />
			</section>
		</main>
	);
}
