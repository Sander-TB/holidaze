import { IoHome, IoBusiness, IoCall } from "react-icons/io5";

export const MenuData = [
	{
		title: "Home",
		path: "/",
		icon: <IoHome className='inline mb-1 mr-2' />,
		classname: "list-none h-16 mt-7",
	},
	{
		title: "Hotels",
		path: "/hotels",
		icon: <IoBusiness className='inline mb-1 mr-2' />,
		classname: "list-none h-16",
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <IoCall className='inline mb-1 mr-2' />,
		classname: "list-none h-16",
	},
];
