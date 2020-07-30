//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

export const Footer = props => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<footer className="page-footer font-small bg-dark pt-4">
			,
			<div className="footer-copyright text-center text-white py-3">
				{props.textFooter}
			</div>
			,
		</footer>
	);
};

Footer.propTypes = {
	//proptypes here
	textFooter: PropTypes.string
};
