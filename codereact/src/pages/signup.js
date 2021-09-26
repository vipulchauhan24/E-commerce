import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
            <div className="container-fluid login-page d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <Link to="/"><img style={{width: "107px", marginBottom:"1rem"}} src="./images/E-comm.png" alt="e-comm"/></Link>
                    <h1 style={{marginBottom:"2rem"}}>Signup an Account</h1>
                    <input style={{marginBottom:"0.5rem"}} className="form-input" placeholder="Enter email"/>
                    <input style={{marginBottom:"0.5rem"}} className="form-input" placeholder="Enter password"/>
                    <button style={{width:"100%"}} className="btn btn-primary">Signup</button>
                    <p>or</p>
                    <Link style={{width:"100%"}} to="/login"><button style={{width:"100%"}} className="btn btn-primary">Login</button></Link>
                </div>
            </div>
        )
    }
}
