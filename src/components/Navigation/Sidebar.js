import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { SidebarData } from "./SidebarData";

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);

	let burgerBg;
	let burgerMenu;

	if (showMenu) {
		burgerMenu = (
			<div className='fixed top-0 left-0 bg-main-ice w-4/5 md:w-1/2 h-full z-50 shadow animate-slide'>
				<div className='flex justify-center pt-10 font-bold text-3xl uppercase text-lighter-water'>
					Welcome Admin
				</div>
				<div className='flex flex-col items-center mt-16 py-5 w-2/3 mx-auto h-auto rounded-lg'>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.classname}>
								<a href={item.path}>
									{item.icon}
									<span onClick={() => setShowMenu(false)}>{item.title}</span>
								</a>
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
		<nav className='bg-main-ice pb-5 lg:1/3 xl:w-1/5 lg:h-screen lg:fixed lg:top-0 z-50'>
			<div className='flex justify-between items-center px-10 pt-5'>
				<div className='font-bold text-4xl uppercase text-center my-3'>
					<Link to='/' className='font-heading'>
						Holidaze
					</Link>
					<h1 className='font-heading text-2xl mt-5 text-lighter-water text-center lg:block hidden'>
						Welcome Admin
					</h1>
				</div>
				<div>
					<button
						className='text-right text-3xl lg:hidden mb-6'
						onClick={() => setShowMenu(!showMenu)}>
						<IoMenuOutline />
					</button>
				</div>
			</div>
			<div className='hidden lg:flex flex-col items-center lg:h-full px-10 py-5 mt-10'>
				{SidebarData.map((item, index) => {
					return (
						<li
							key={index}
							className='list-none mb-16 text-xl font-bold hover:underline'>
							<a href={item.path}>
								{item.icon}
								<span>{item.title}</span>
							</a>
						</li>
					);
				})}
			</div>
			{burgerBg}
			{burgerMenu}
		</nav>
	);
}
