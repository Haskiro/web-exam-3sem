import { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderAuth from "./components/HeaderAuth";

const AuthPage: FC = () => {
	return (
		<>
			<HeaderAuth />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default AuthPage;
