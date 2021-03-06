import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {withRouter} from 'react-router-dom';
import { REACT_APP_API_URL } from "../constant";

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            error: ""
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
    validateEmail(email){
        const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
    }
    validateData(callback){
        if(this.state.email.length < 1 || this.state.password.length < 1){
            this.setState({
                error: 'Empty fields not allowed!'
            })
            return callback(false);
        }
        if(!this.validateEmail(this.state.email)){
            this.setState({
                error: 'Email not valid'
            })
            return callback(false);
        }
        return callback(true);
    }

    redirectToHome(){
        this.props.history.push('/');
    }

    handleLogin(){
        this.validateData((status)=>{
            if(status){
                this.setState({
                    error: ''
                });
                fetch(REACT_APP_API_URL + "user/login",{
                    method: "post",
                    headers:{
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email : this.state.email,
                        password : this.state.password
                    })
                }).then(res => res.json()).then(data => {
                    if(data.success === 0){
                        toast.error(data.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        sessionStorage.setItem('accessToken', data.token);
                        sessionStorage.setItem('email', data.email);
                        toast.success(data.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        this.props.loadUserName(data.email.split('@')[0]);
                        this.redirectToHome();
                    }
                });
            }
        });
        
    }
    render() {
        return (
            <div className="container-fluid login-page d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <Link to="/"><img style={{width: "107px", marginBottom:"1rem"}} src="/icons/store.png" alt="e-comm"/></Link>
                    <h1 style={{marginBottom:"2rem"}}>Login to your Account</h1>
                    <input style={{marginBottom:"0.5rem"}} className="form-input" placeholder="Enter email" type="email"  onChange={(e)=>{this.setName(e)}}/>
                    <input style={{marginBottom:"0.5rem"}} className="form-input" placeholder="Enter password" type="password" onChange={(e)=>{this.setPassword(e)}}/>
                    <small style={{color:"red"}}>{this.state.error}</small>
                    <button style={{width:"100%"}} onClick={()=> this.handleLogin()} className="btn btn-primary">Login</button>
                    <p>or</p>
                    <Link style={{width:"100%"}} to="/signup"><button style={{width:"100%"}} className="btn btn-primary">Signup</button></Link>
                </div>
                <ToastContainer />
            </div>
        )
    }
}

export default withRouter(Login);