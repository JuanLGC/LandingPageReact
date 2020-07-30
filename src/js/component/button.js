import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

export const Button = () => {
	return (
		<div className="card-footer caja1 text-center">
			<a href="#" className="btn btn-primary">
				Find Out More!{" "}
			</a>
		</div>
	);
};
