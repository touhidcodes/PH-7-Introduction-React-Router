import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
		],
	},
	// {
	// 	path: "/about",
	// 	element: <About></About>,
	// },
	// {
	// 	path: "/contact",
	// 	element: <Contact></Contact>
	// },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
