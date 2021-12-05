import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav
				className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<strong>{this.props.title}</strong>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/Contact-me"
								>
									Contact Me
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/education"
								>
									Education
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
