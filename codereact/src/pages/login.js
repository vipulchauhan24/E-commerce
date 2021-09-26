import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            email : "",
            password : ""
        }
    }

    setName(ev){
        this.setState({
            email: ev.target.value
        })
    }
    setPassword(ev){
        this.setState({
            password: ev.target.value
        })
    }
    handleLogin(){
        fetch("http://localhost:3001/login",{
            method: "post",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email : this.state.email,
                password : this.state.password
            })
        }).then(res => res.json)
        .then(data => {
            console.log(data)
        })
    }
    render() {
        return (
            <div className="container-fluid login-page d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <Link to="/"><img style={{width: "107px", marginBottom:"1rem"}} src="./images/E-comm.png" alt="e-comm"/></Link>
                    <h1 style={{marginBottom:"2rem"}}>Login to your Account</h1>
                    <input style={{marginBottom:"0.5rem"}} className="form-input" placeholder="Enter email" type="email"  onChange={(e)=>{this.setName(e)}}/>
                    <input style={{marginBottom:"0.5rem"}} className="form-input" placeholder="Enter password" type="password" onChange={(e)=>{this.setPassword(e)}}/>
                    <button style={{width:"100%"}} onClick={()=> this.handleLogin()} className="btn btn-primary">Login</button>
                    <p>or</p>
                    <Link style={{width:"100%"}} to="/signup"><button style={{width:"100%"}} className="btn btn-primary">Signup</button></Link>
                </div>
            </div>
        )
    }
}
