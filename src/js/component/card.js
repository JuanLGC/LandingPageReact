import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

export const Card = () => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://images.pexels.com/photos/945966/pexels-photo-945966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="card image cap"
			/>
			<div className="card-body text-center">
				<h1 className="m-1 mb-3 ">Card title</h1>
				<p className="card-text">
					Lorem Ipsum dolor sit amet, consectetur adipisicing simply
					text of the and industry. Lorem Ipsum.
				</p>
			</div>
		</div>
	);
};
