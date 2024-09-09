import Input from "../components/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		// <div className="">
			<div className='sign form'>
				<h2 className='text-black mb-4'>Create Account</h2>
				<form className="w-100 " onSubmit={handleSignUp}>
					<Input
					
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
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
					{error && <p className='text-danger text-center'>{error}</p>}
					{/* <PasswordStrengthMeter password={password} /> */}

					<button
						className="btn btn-primary w-100 mb-3"
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? "loading" : "Sign Up"}
					</button>
				</form>
				<div className=''>
					<p className=''>
						Already have an account?{" "}
						<Link to={"/login"} className=''>
							Login
						</Link>
					</p>
				</div>
			</div>

		// </div>
	);
};
export default SignUpPage;
