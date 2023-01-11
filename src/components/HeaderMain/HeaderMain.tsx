import { FC, useState } from "react";
import Burger from "@assets/icons/burger.svg";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import styles from "./HeaderMain.module.scss";
import { HeaderProps } from "./HeaderMain.props";

const HeaderMain: FC<HeaderProps> = () => {
	const [navIsActive, setNavIsActive] = useState<boolean>(false);

	return (
		<header className={styles.block}>
			<div className={cn(styles.body, "container")}>
				<div className={styles.user}>
					<Link to="/" className={styles.text}>
						Павел
					</Link>
					<button className={styles.button}>
						<Link to="/auth">Выйти</Link>
					</button>
				</div>
				<nav
					className={cn(styles.nav, {
						[styles.navActive]: navIsActive,
					})}
				>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NavLink
								to="/"
								end
								onClick={() => setNavIsActive(false)}
								className={({ isActive }) =>
									cn(styles.link, {
										[styles.linkActive]: isActive,
									})
								}
							>
								Профиль
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink
								to="/playlists"
								end
								onClick={() => setNavIsActive(false)}
								className={({ isActive }) =>
									cn(styles.link, {
										[styles.linkActive]: isActive,
									})
								}
							>
								Плейлисты
							</NavLink>
						</li>
					</ul>
				</nav>
				<button
					className={styles.burger}
					onClick={() => setNavIsActive((prevState) => !prevState)}
				>
					<img src={Burger} alt="Меню" />
				</button>
			</div>
		</header>
	);
};

export default HeaderMain;
