import { useState } from "react";

import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<div className="form">
			<div className='p-8 w-100'>
				<h2 className='mb-4 text-center'>
					Welcome Back
				</h2>

				<form className="w-100" onSubmit={handleLogin}>
					<Input
				
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input

						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <p className='text-danger'>{error}</p>}
					<button className="btn btn-primary w-100 mb-3" type='submit' disabled={isLoading}>
						{isLoading ? "loading..": "Login"}
					</button>
				</form>
				<Link to='/forgot-password' className='text-center mb-4'>
					Forgot password?
				</Link>
				<p className='text-sm text-gray-400'>
					Don't have an account?{" "}
					<Link to='/signup' className=''>
						Sign up
					</Link>
				</p>
			</div>



		</div>
	);
};
export default LoginPage;
