import React, { Component } from 'react'
import errorImg from '../assets/images/error.png'
import '../components/components css/errorPage.css'

export default class Error extends Component {
    render() {
        return (
            <div className="container text-center">
                <img src={errorImg}></img>
            </div>
        )
    }
}
