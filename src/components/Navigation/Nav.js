import { useState } from "react";
// import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { MenuData } from "./MenuData";

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	let burgerBg;
	let burgerMenu;

	if (showMenu) {
		burgerMenu = (
			<div className='fixed top-0 left-0 bg-main-ice w-4/5 h-full z-50 shadow animate-slide'>
				<div className='flex justify-center pt-5 font-bold text-3xl uppercase z-50'>
					Holidaze
				</div>
				<div className='flex flex-col bg-white items-center mt-16 py-5 w-2/3 mx-auto h-auto rounded-lg z-50'>
					{MenuData.map((item, index) => {
						return (
							<li key={index} className={item.classname}>
								<Link to={item.path}>
									{item.icon}
									<span onClick={() => setShowMenu(false)}>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</div>
			</div>
		);
		burgerBg = (
			<div
				className='fixed top-0 left-0 bg-noir-t-90 w-full h-full z-50 cursor-pointer'
				onClick={() => setShowMenu(false)}></div>
		);
	}

	return (
		<nav className='bg-main-ice pb-5'>
			<div className='flex justify-between items-center px-10 pt-5 md:px-40'>
				<div className='font-bold text-3xl uppercase'>
					<Link to='/'>Holidaze</Link>
				</div>
				<div>
					<button
						className='text-right text-3xl md:hidden'
						onClick={() => setShowMenu(!showMenu)}>
						<IoMenuOutline />
					</button>
				</div>
				<div className='hidden md:flex'>
					{MenuData.map((item, index) => {
						return (
							<li key={index} className='list-none pl-16'>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</div>
			</div>
			{burgerBg}
			{burgerMenu}
		</nav>
	);
}
