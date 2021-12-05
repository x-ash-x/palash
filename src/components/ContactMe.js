import React, { Component } from "react";
import img from "../assets/images/myPhoto.png";
import img2 from "../assets/images/contactMePage.png";

export default class About extends Component {
	render() {
		return (
			<>
				<div className="container d-flex align-items-center row my-5">
					<div className="col-sm-5 text-center">
						<img
							src={img}
							style={{
								width: "35vh",
								border: "5px solid white",
								borderRadius: "10000px",
							}}
						></img>
					</div>
					<div
						className={`d-flex flex-column align-items-center col-sm-7 my-5 text-center justify-content-center text-${
							this.props.mode === "dark" ? "light" : "dark"
						}`}
					>
						<h1>Contact Me</h1>
						<h3 style={{ color: "invert" }} className="mt-2">
							I am available on almost every social media. You can
							message me, I will reply within 24 hours. I can help
							you with Basic Programming,Full Stack Development
							(MERN).
						</h3>
						<button
							type="button"
							style={{ width: "35%" }}
							className={`btn btn-outline-${
								this.props.mode === "dark" ? "light" : "dark"
							} btn btn-lg mt-4`}
						>
							Resume
						</button>
					</div>
				</div>
				<div className={`container d-flex align-items-center my-5 justify-content-center row text-${this.props.mode === "dark" ? "light" : "dark"}`}>
					<img src={img2} className="col-lg-7"></img>
					<div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
						<h3>Address</h3>
						<h4>Damoh</h4>
						<h3>E-mail</h3>
						<h4>palashasati1@gmail.com</h4>
					</div>
				</div>
			</>
		);
	}
}
