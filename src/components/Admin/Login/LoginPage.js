import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<section className='flex flex-col items-center h-screen'>
			<h1 className='font-heading font-bold text-5xl mt-16 mb-10'>
				Admin Login
			</h1>
			<LoginForm />
		</section>
	);
}
