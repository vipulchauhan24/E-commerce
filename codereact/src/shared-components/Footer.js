import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                    <ul>
                        <li>Covid-19</li>
                        <li>Your Account</li>
                        <li>100% Purchase Protection</li>
                    </ul>
                </div>
                <div className="footer-end">
                    <Link to="/"><img style={{width: "2.5em"}} src="/icons/store.png" alt="e-comm"/></Link>
                    <span>
                        All rights reserved&copy;2021
                    </span>
                </div>
            </div>
        )
    }
}
