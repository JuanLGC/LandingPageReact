import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-5 d-flex justify-content-between">
			<a className="navbar-brand pl-5" href="#">
				{props.title}
			</a>

			<div className="navbar pr-5" id="navbarText">
				<ul className="navbar-nav pr-3">
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
