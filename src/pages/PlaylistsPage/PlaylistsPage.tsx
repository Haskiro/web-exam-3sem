import { FC, useEffect } from "react";
import Spinner from "@components/Spinner";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchPlaylists } from "@store/slices/playlistsSlice";
import { Link } from "react-router-dom";
import styles from "./PlaylistsPage.module.scss";

const PlaylistsPage: FC = () => {
	const dispatch = useAppDispatch();
	const playlists = useAppSelector((state) => state.playlists.playlists);
	const status = useAppSelector((state) => state.playlists.status);

	useEffect(() => {
		dispatch(fetchPlaylists());
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Плейлисты</h1>
			{status === "succeeded" ? (
				<ul className={styles.list}>
					{playlists?.map((playlist) => (
						<li className={styles.item} key={playlist.id}>
							<div className={styles.card}>
								<img
									className={styles.image}
									src={playlist.cover}
									alt="Обложка Плейлиста"
									height="250"
								/>
								<p className={styles.text}>{playlist.title}</p>
								<Link
									className={styles.button}
									to={`/playlists/${playlist.id}`}
								>
									Открыть плейлист
								</Link>
							</div>
						</li>
					))}
				</ul>
			) : null}
			{status === "loading" ? <Spinner /> : null}
		</div>
	);
};

export default PlaylistsPage;
