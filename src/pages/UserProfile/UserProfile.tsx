import { FC } from "react";
import UserPhotoPlug from "@assets/images/user-photo-plug.jpeg";

import { IUser } from "@interfaces/user.interface";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { editUserData } from "@store/slices/userSlice";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./UserProfile.module.scss";

const UserProfile: FC = () => {
	const dispatch = useAppDispatch();
	const [form] = Form.useForm();
	const user = useAppSelector((state) => state.user.user);

	const onFill = () => {
		form.setFieldsValue({
			name: "",
			surname: "",
			bio: "",
		});
	};

	const onFinish = (user: IUser) => {
		dispatch(editUserData(user));
	};
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
					<p className={styles.text}>
						{user.name} {user.surname}
					</p>
				</div>
			</div>
			<div className={styles.body}>
				<p className={styles.text}>{user.bio}</p>
			</div>
			<h2 className={styles.formHeading}>Редактировать Профиль</h2>
			<Form
				name="control-ref"
				labelCol={{ span: 3 }}
				wrapperCol={{ span: 16 }}
				style={{ marginTop: "20px" }}
				form={form}
				onFinish={onFinish}
			>
				<Form.Item name="name" label="Имя">
					<Input />
				</Form.Item>
				<Form.Item name="surname" label="Фамилия">
					<Input />
				</Form.Item>
				<Form.Item name="bio" label="Биография">
					<TextArea rows={4} />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 3, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Отправить
					</Button>
					<Button type="link" htmlType="button" onClick={onFill}>
						Очистить форму
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default UserProfile;
