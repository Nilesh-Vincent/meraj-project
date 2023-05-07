import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	Routes,
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./global.css";

import AllowedAccess from "./components/AllowedAccess";
import RouterError from "./components/RouterError";
import SignIn from "./components/Forms/SignIn";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <SignIn />,
		errorElement: <RouterError />,
	},

	{
		path: "/home",
		element: <AllowedAccess />,
		errorElement: <RouterError />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
