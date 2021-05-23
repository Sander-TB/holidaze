import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export default function AddNewHotel() {
	return (
		<Link to='/admin/crud'>
			<div className='w-full max-w-sm h-96  flex flex-col rounded-xl mt-10 mb-3 shadow-lg bg-main-grass items-center justify-center'>
				<div className='text-9xl'>
					<IoAddCircleOutline stroke='#fff' />
				</div>
				<h2 className='text-3xl md:text-2xl font-bold text-white mt-3'>
					Add new hotel
				</h2>
			</div>
		</Link>
	);
}
