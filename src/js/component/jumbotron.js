//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

export const Jumbotron = props => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron px-5 pt-1 pb-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.description,
	buttonURL: PropTypes.buttonURL,
	buttonLabel: PropTypes.buttonLabel
};
