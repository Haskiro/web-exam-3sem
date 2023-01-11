import React from "react";
import { store } from "@store/store";
import ReactDOM from "react-dom/client";
import "@styles/reset.scss";
import "@styles/global.scss";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
