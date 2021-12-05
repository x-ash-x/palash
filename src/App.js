import React, { Component } from "react";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ErrorPage from "./components/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			mode: "light",
		};
	}

	//method to toggle mode.
	toggleMode = () => {
		this.setState({ mode: this.state.mode === "dark" ? "light" : "dark" });
	};

	render() {
		document.body.style.backgroundColor =
			this.state.mode === "dark" ? "black" : "#e3f8ff";

		return (
			<BrowserRouter>
				<Navbar title="Pa." mode={this.state.mode} />
				<Routes>
					<Route
						exact
						path="/"
						element={<MainContent mode={this.state.mode} />}
					/>
          <Route
						exact
						path="/palash"
						element={<MainContent mode={this.state.mode} />}
					/>
					<Route
						exact
						path="/contact-me"
						element={<ContactMe mode={this.state.mode} />}
					/>
					<Route
						exact
						path="/projects"
						element={<Projects mode={this.state.mode} />}
					/>

					<Route
						exact
						path="/education"
						element={<Education mode={this.state.mode} />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<Footer mode={this.state.mode} toggleMode={this.toggleMode} />
			</BrowserRouter>
		);
	}
}

export default App;
