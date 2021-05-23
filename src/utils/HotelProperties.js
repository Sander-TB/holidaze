import {
	IoWifi,
	IoRestaurant,
	IoHappy,
	IoCafe,
	IoBarbell,
	IoLogoNoSmoking,
	IoAccessibility,
	IoFastFood,
	IoThumbsUp,
	IoBeer,
} from "react-icons/io5";

export function WifiProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoWifi className='inline mb-1' /> Free WiFi Included
		</div>
	);
}

export function BreakfastProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoRestaurant className='inline' /> Included Breakfast
		</div>
	);
}

export function FamilyProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoHappy className='inline' /> Well Suited for Children
		</div>
	);
}

export function CoffeeProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoCafe className='inline' /> Tea/Coffeemaker in every room
		</div>
	);
}

export function NonSmokingProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoLogoNoSmoking className='inline' /> Non-Smoking Rooms
		</div>
	);
}

export function FitnessProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoBarbell className='inline' /> Fitness Center
		</div>
	);
}

export function WheelchairProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoAccessibility className='inline' /> Wheelchair Accessible
		</div>
	);
}

export function RestaurantProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoFastFood className='inline' /> Restaurant
		</div>
	);
}

export function RoomServiceProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoThumbsUp className='inline' /> Room Service
		</div>
	);
}

export function BarProp() {
	return (
		<div className='text-main-noir py-1'>
			<IoBeer className='inline mb-1' /> Bar
		</div>
	);
}
