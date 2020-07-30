import React from "react";
import "bootstrap";
import "../../styles/index.scss";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.js";
import { Button } from "./button.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";
import { Jumbotron } from "./jumbotron.js";

//create your first component
export function Home() {
	return (
		<>
			<Navbar title="Start Bootstrap" />
			<div className="container px-4">
				<Jumbotron
					title="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					buttonURL="#"
					buttonLabel="Call to Action!"
				/>
				<div className="d-flex mb-0">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="d-flex mt-0">
					<Button />
					<Button />
					<Button />
					<Button />
				</div>
			</div>
			<Footer textFooter="Copyright © Your Website 2019" />
		</>
	);
}
