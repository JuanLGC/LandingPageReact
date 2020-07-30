import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark  d-flex justify-content-between">
			<a className="navbar-brand" href="#">
				{props.title}
			</a>

			<div className="navbar" id="navbarText">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string
};
