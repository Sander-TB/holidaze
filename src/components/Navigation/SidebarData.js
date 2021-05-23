import { IoAnalytics, IoBusiness, IoCalendar, IoMail } from "react-icons/io5";

export const SidebarData = [
	{
		title: "Overview",
		path: "#overview",
		icon: <IoAnalytics className='inline mb-1 mr-2 text-xl font-bold' />,
		classname: "list-none mb-16 mt-7 text-xl font-bold",
	},
	{
		title: "Hotels",
		path: "#hotels",
		icon: <IoBusiness className='inline mb-1 mr-2 text-xl font-bold' />,
		classname: "list-none mb-16 text-xl font-bold",
	},
	{
		title: "Bookings",
		path: "#bookings",
		icon: <IoCalendar className='inline mb-1 mr-2 text-xl font-bold' />,
		classname: "list-none mb-16 text-xl font-bold",
	},
	{
		title: "Messages",
		path: "#messages",
		icon: <IoMail className='inline mb-1 mr-2 text-xl font-bold' />,
		classname: "list-none mb-16 text-xl font-bold",
	},
];
