import React, { Component } from "react";
import img from "../assets/images/educationPage.png";
import courseraImg from "../assets/images/coursera.png";
import "../components/components css/educationPage.css";

export default class Education extends Component {
	render() {
		return (
			<>
				<div className="container d-flex align-items-center row my-5">
					<div className="col-sm-12 col-lg-7 text-center">
						<img src={img} className="col-12"></img>
					</div>
					<div
						className={`d-flex flex-column align-items-center col-lg-5 col-sm-12 my-5 text-center justify-content-center text-${
							this.props.mode === "dark" ? "light" : "dark"
						}`}
					>
						<h1>Education</h1>
						<h3 style={{ color: "invert" }} className="mt-2">
							Basic Qualification and Certifcations
						</h3>
					</div>
				</div>

				<div className="container">
					<div className="accordion" id="accordionExample">
						<div
							className={`accordion-item bg-${
								this.props.mode === "dark" ? "dark" : "light"
							} text-light`}
						>
							<h2 className="accordion-header" id="headingOne">
								<button
									className={`accordion-button  bg-${
										this.props.mode === "dark"
											? "dark"
											: "light"
									} text-${
										this.props.mode === "dark"
											? "light"
											: "dark"
									}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<strong>B.Tech</strong>
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<div className="row  p-2">
										<div className="col-sm-10">
											<h5>
												Birla Institute of Technology
											</h5>
											<h6>
												B.Tech. in Computer Science
												Engineering
											</h6>
										</div>
										<div className="col-sm-2">
											<h5 className="">2019-23</h5>
											<h6 className="">CGPA 8.74/10.0</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`accordion-item bg-${
								this.props.mode === "dark" ? "dark" : "light"
							} text-light`}
						>
							<h2 className="accordion-header" id="headingTwo">
								<button
									className={`accordion-button  bg-${
										this.props.mode === "dark"
											? "dark"
											: "light"
									} text-${
										this.props.mode === "dark"
											? "light"
											: "dark"
									}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<strong>Higher Secondary (12th)</strong>
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<div className="row  p-2">
										<div className="col-sm-10">
											<h5>
												Vallabh Higher Secondary School
											</h5>
											<h6>
												Higher Secondary School (12th)
											</h6>
										</div>
										<div className="col-sm-2">
											<h5 className="">2017-18</h5>
											<h6 className="">Percentage 83%</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`accordion-item bg-${
								this.props.mode === "dark" ? "dark" : "light"
							} text-light`}
						>
							<h2 className="accordion-header" id="headingThree">
								<button
									className={`accordion-button  bg-${
										this.props.mode === "dark"
											? "dark"
											: "light"
									} text-${
										this.props.mode === "dark"
											? "light"
											: "dark"
									}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									<strong>Secondary (10th)</strong>
								</button>
							</h2>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<div className="row  p-2">
										<div className="col-sm-10">
											<h5>
												Shri Guru Nanak Higher Secondary
												School
											</h5>
											<h6>Secondary School (10th)</h6>
										</div>
										<div className="col-sm-2">
											<h5 className="">2015-16</h5>
											<h6 className="">CGPA 9.4/10.0</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2
					className={`text-center my-5 text-${
						this.props.mode === "dark" ? "light" : "dark"
					}`}
				>
					Certificates
				</h2>

				<div className="container row">
					<div className="card-container col-sm-4 my-3">
						<div className="card">
							<img
								src={courseraImg}
								className="card-img-top"
								alt="..."
							/>
							<div className={`card-body bg-${this.props.mode==='dark'?'dark':'light'} text-${this.props.mode==='dark'?'light':'dark'}`}>
								<h4 className="card-title">
									Python Data Structures
								</h4>
								<p className="card-text">Charles Severance</p>
                                <a className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'} btn-lg my-1`} href="https://www.coursera.org/account/accomplishments/certificate/BRYRF587LCX3">Certificate</a>
							</div>
						</div>
					</div>
					<div className="col-sm-4 my-3">
						<div className="card">
							<img
								src={courseraImg}
								className="card-img-top"
								alt="..."
							/>
							<div className={`card-body bg-${this.props.mode==='dark'?'dark':'light'} text-${this.props.mode==='dark'?'light':'dark'}`}>
								<h4 className="card-title">
									Programming for Everybody (Getting Started
									with Python)
								</h4>
								<p className="card-text">Charles Severance</p>

                                <a className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'} btn-lg my-1`} href="https://www.coursera.org/account/accomplishments/certificate/9MTL97RR4LFP">Certificate</a>
							</div>
						</div>
					</div>
					<div className="col-sm-4 my-3">
						<div className="card">
							<img
								src={courseraImg}
								className="card-img-top"
								alt="..."
							/>
							<div className={`card-body bg-${this.props.mode==='dark'?'dark':'light'} text-${this.props.mode==='dark'?'light':'dark'}`}>
								<h4 className="card-title">
									HTML, CSS, and Javascript for Web Developers
								</h4>
								<p className="card-text">Yaakov Chaikin</p>
                                <a className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'} btn-lg my-1`} href="https://www.coursera.org/account/accomplishments/certificate/GHPHX9XZT3DK">Certificate</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
