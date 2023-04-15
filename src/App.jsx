import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBAr from "./components/NavBar/NavBAr";
import { Outlet } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<h1>This is the main page</h1>
			<NavBAr />
			<Outlet></Outlet>
		</div>
	);
}

export default App;
