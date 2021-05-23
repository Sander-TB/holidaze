import Nav from "../Navigation/Nav";
import FeaturedHotels from "../Hotels/FeaturedHotels";

export default function Homepage() {
	return (
		<>
			<Nav />
			<section className='bg-lighter-water text-main-noir flex flex-col justify-center items-center'>
				<h1 className='text-6xl font-bold text-center font-heading mt-10 mb-5'>
					Welcome to Holidaze
				</h1>
				<p className='font-extralight font-heading text-xl tracking-wide mb-16'>
					Where booking a hotel is made easy
				</p>
			</section>
			<main className='bg-white flex flex-col mx-20'>
				<h2 className='text-2xl font-heading font-bold mt-10 text-lighter-noir md:mx-20'>
					Featured Destinations
				</h2>
				<div className='mb-5 md:mx-20'>
					<FeaturedHotels />
				</div>
			</main>
		</>
	);
}
