import { FC, FormEvent, useState } from "react";
import Spinner from "@components/Spinner";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.scss";

const LoginForm: FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = async (e: FormEvent) => {
		navigate("/");
		e.preventDefault();
	};

	return (
		<div className={styles.block}>
			<h1 className={styles.heading}>Регистрация</h1>
			<form method="POST">
				<label htmlFor="first_name" style={{ display: "none" }}>
					Имя
				</label>
				<input
					type="text"
					className={styles.input}
					id="first_name"
					name="first_name"
					aria-label="Имя"
					placeholder="Имя"
					value={firstName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setFirstName(event.target.value)
					}
				/>
				<label htmlFor="last_name" style={{ display: "none" }}>
					Фамилия
				</label>
				<input
					type="text"
					className={styles.input}
					id="last_name"
					name="last_name"
					aria-label="Фамилия"
					placeholder="Фамилия"
					value={lastName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setLastName(event.target.value)
					}
				/>
				<label htmlFor="email" style={{ display: "none" }}>
					Почта
				</label>
				<input
					type="email"
					className={styles.input}
					id="email"
					name="email"
					aria-label="Почта"
					placeholder="Почта"
					value={email}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setEmail(event.target.value)
					}
				/>
				<label htmlFor="password" style={{ display: "none" }}>
					Пароль
				</label>
				<input
					type="password"
					className={styles.input}
					id="password"
					name="password"
					aria-label="Пароль"
					placeholder="Пароль"
					value={password}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setPassword(event.target.value)
					}
				/>
				<button
					className={styles.button}
					type="submit"
					onClick={handleSubmit}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
