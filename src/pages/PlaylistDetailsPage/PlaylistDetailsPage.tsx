import { FC, useEffect, useState } from "react";
import TrackList from "@components/TrackList";
import { IComment } from "@interfaces/comment.interface";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
	addNewComment,
	fetchComments,
	fetchPlaylistById,
} from "@store/slices/playlistDetailsSlice";
import { Avatar, Button, Form, Input, List, Spin } from "antd";
import { useParams } from "react-router-dom";
import styles from "./PlaylistDetailsPage.module.scss";

const PlaylistDetailsPage: FC = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const playlist = useAppSelector((state) => state.playlistDetails.playlist);
	const status = useAppSelector((state) => state.playlistDetails.status);
	const comments = useAppSelector((state) => state.playlistDetails.comments);
	const [newComment, setNewComment] = useState<string>("");

	const [form] = Form.useForm();
	const buttonItemLayout = {
		wrapperCol: { span: 14, offset: 6 },
	};
	const formItemLayout = {
		labelCol: { span: 6 },
		wrapperCol: { span: 14 },
	};

	useEffect(() => {
		dispatch(fetchPlaylistById(id as string));
		dispatch(fetchComments());
	}, [id]);

	return (
		<div className={styles.container}>
			{status === "succeeded" ? (
				<>
					<div className={styles.header}>
						<img
							src={playlist?.cover}
							alt="Обложка Плейлиста"
							className={styles.image}
							height="250"
							width="250"
						/>
						<div className={styles.block}>
							<h1 className={styles.title}>{playlist?.title}</h1>
						</div>
					</div>
					<div className={styles.body}>
						<p className={styles.text}>{playlist?.description}</p>
					</div>
					<TrackList
						trackList={playlist?.tracks_data || null}
						status="succeeded"
					/>
					<div className={styles.comments}>
						<h2 className={styles.commentsHeading}>Комментарии</h2>
						<List
							itemLayout="horizontal"
							dataSource={comments as IComment[]}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										avatar={<Avatar src="" />}
										title={item.author}
										description={item.comment}
									/>
								</List.Item>
							)}
						/>
						<Form
							{...formItemLayout}
							layout="horizontal"
							form={form}
						>
							<Form.Item label="Оставить комментарий:">
								<Input
									placeholder="Текст комментария"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setNewComment(e.target.value)}
								/>
							</Form.Item>
							<Form.Item {...buttonItemLayout}>
								<Button
									type="primary"
									onClick={() =>
										dispatch(
											addNewComment({
												id: nanoid(),
												author: "Павел",
												comment: newComment,
											})
										)
									}
								>
									Отправить
								</Button>
							</Form.Item>
						</Form>
					</div>
				</>
			) : null}
			{status === "loading" ? (
				<Spin
					tip="Loading"
					size="large"
					style={{
						margin: "0px auto",
						display: "block",
						marginTop: "20px",
					}}
				/>
			) : null}
		</div>
	);
};

export default PlaylistDetailsPage;
