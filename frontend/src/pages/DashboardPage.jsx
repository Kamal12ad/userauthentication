import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";	

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
	return (
		<div className='home '>
		<div className="card text-center w-100">
			<div className="card-header bg-dark text-white">
				welcome
			</div>
			<div className="card-body bg-success text-white">
				<h5 className="card-title">Profile Info</h5>
				<p className="card-text">Username:{user.name}</p>
				<p className="card-text">Email:{user.email}</p>
				<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
			</div>
			<div className="card-footer text-body-secondary">
				<p>Account activity</p>
				<span>joind : {new Date(user.createdAt).toLocaleDateString("en-US",{
					year:"numeric",
					month:"long",
					day:"numeric"
				})}</span><br></br>
				{user.lastLogin ? formatDate(user.lastLogin) : "You just logged in"}
			</div>
		</div>
	</div>
	);
};
export default DashboardPage;
