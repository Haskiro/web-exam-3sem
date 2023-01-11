import { FC } from "react";
import HeaderMain from "@components/HeaderMain";
import { Outlet } from "react-router-dom";
import styles from "./ContentPageLayout.module.scss";

const ContentPageLayout: FC = () => {
	return (
		<>
			<HeaderMain />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default ContentPageLayout;
