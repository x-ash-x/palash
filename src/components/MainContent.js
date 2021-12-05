import React, { Component } from 'react'
import img from '../assets/images/img.png'
import './components css/image.css'

export default class MainContent extends Component {
    
    render() {
        return (
            <div className="container my-5 row">
                <div className={`col-sm-6 col-md-6 mt-2 d-flex flex-column justify-content-center text-${
						this.props.mode === "dark" ? "white" : "black"
					}`}>
                    <h1>
                        Hey, I am Palash.
                    </h1>
                    <h2>
                    (MERN Stack Developer)
                    </h2>
                    <h3>An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.</h3>
                </div>
                <img className="col-sm-6 col-md-6" src={img}></img>
                {/* <div className="bg-warning img-container">
                    <img src={img}></img>
                </div> */}
            </div>
        )
    }
}
