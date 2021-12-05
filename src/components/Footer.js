import React, { Component } from "react";
import "./components css/toggleBtn.css";

export default class Footer extends Component {
	render() {
		return (
			<footer
				className={`d-flex align-items-center mt-4 bg-${
					this.props.mode === "dark" ? "dark" : "light"
				} flex-column`}
			>
				<div className="d-flex justify-content-center align-items-end">
					<div className={`text-${
						this.props.mode === "dark" ? "white" : "black"
					}`}><strong>Light Mode</strong></div>
					<div className="form-check form-switch mt-3 mx-3 ">
						<input
							className="form-check-input switch"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault"
							onClick={this.props.toggleMode}
						/>
					</div>
					<div className={`text-${
						this.props.mode === "dark" ? "white" : "black"
					}`}><strong>Dark Mode</strong></div>
				</div>
				<div
					className={`my-3 text-${
						this.props.mode === "dark" ? "white" : "black"
					}`}
				>
					©️ Palash Asati 2021
				</div>
			</footer>
		);
	}
}
