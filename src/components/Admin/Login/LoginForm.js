import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../../constants/api";
import FormError from "../../common/FormError";

const url = `${BASE_URL}/auth/local`;

const schema = yup.object().shape({
	identifier: yup.string().required("Please enter admin email"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [, setAuth] = useContext(AuthContext);

	const history = useHistory();
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);
		try {
			const response = await axios.post(url, data);
			setAuth(response.data.jwt);
			history.push("/admin");
		} catch (e) {
			console.log(e);
			setLoginError(e.toString());
		}
	}

	return (
		<form
			className='text-lg bg-lightest-ice mt-10 mb-20 pt-10 px-5 rounded-xl lg:w-1/3 md:w-1/2 w-90'
			onSubmit={handleSubmit(onSubmit)}>
			{loginError && <FormError>{loginError}</FormError>}
			<fieldset className='flex flex-col'>
				<div className='flex flex-col items-center justify-center mb-10'>
					<input
						name='identifier'
						placeholder='username'
						type='text'
						ref={register}
						className='py-3 px-4 w-90 md:w-75 rounded-lg'
					/>
					{errors.identifier && (
						<FormError>{errors.identifier.message}</FormError>
					)}
				</div>
				<div className='flex flex-col items-center justify-center mb-10'>
					<input
						name='password'
						placeholder='password'
						type='password'
						ref={register}
						className='py-3 px-4 w-90 md:w-75 rounded-lg'
					/>
					{errors.password && <FormError>{errors.password.message}</FormError>}
				</div>
				<button className='py-3 px-4  md:w-2/3 w-90 mb-10 font-heading self-center rounded-lg bg-main-grass shadow md:mt-10'>
					{submitting ? "Logging in..." : "Log In"}
				</button>
			</fieldset>
		</form>
	);
}
