import React from "react";
import { Link } from "react-router-dom";

const NavBAr = () => {
	return (
		<div>
			<Link to={"/contact"}>Contact</Link>
			<Link to={"about"}>About</Link>
		</div>
	);
};

export default NavBAr;
