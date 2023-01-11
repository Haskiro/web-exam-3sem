import { FC } from "react";
import UserPhotoPlug from "@assets/images/user-photo-plug.png";
import Spinner from "@components/Spinner";

import styles from "./UserProfile.module.scss";

const UserProfile: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img
					src={UserPhotoPlug}
					alt="Фотография"
					className={styles.photo}
					height="250"
					width="250"
				/>
				<div className={styles.block}>
					<h1 className={styles.title}>Профиль</h1>
					<p className={styles.text}>Павел Кондратьев</p>
				</div>
			</div>
			<div className={styles.body}>
				<p className={styles.text}>Создатель этого приложения</p>
			</div>
		</div>
	);
};

export default UserProfile;
