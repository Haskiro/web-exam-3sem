import AuthPage from "@pages/AuthPage";
import LoginForm from "@pages/AuthPage/components/LoginForm";
import RegisterForm from "@pages/AuthPage/components/RegisterForm/RegisterForm";
import ContentPageLayout from "@pages/ContentPageLayout";
import PlaylistDetailsPage from "@pages/PlaylistDetailsPage";
import PlaylistsPage from "@pages/PlaylistsPage";
import UserProfile from "@pages/UserProfile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ContentPageLayout />}>
						<Route index element={<UserProfile />} />
						<Route path="playlists" element={<PlaylistsPage />} />
						<Route
							path="playlists/:id"
							element={<PlaylistDetailsPage />}
						/>
					</Route>
					<Route path="/auth" element={<AuthPage />}>
						<Route index element={<LoginForm />} />
						<Route path="reg" element={<RegisterForm />} />
					</Route>
					<Route
						path="*"
						element={
							<h1
								style={{
									fontSize: "30px",
									textAlign: "center",
									marginTop: "20px",
								}}
							>
								404 Page Not Found
							</h1>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
