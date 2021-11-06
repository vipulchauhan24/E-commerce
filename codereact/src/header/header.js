import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { Menu } from '../menu/menu';
class Header extends Component {

    render(){
        return (
            <nav className="d-flex align-items-center justify-content-between top-nav container">
                <div>
                    <Link to="/"><img style={{width: "2.5em"}} src="/icons/store.png" alt="e-comm"/></Link>
                </div>
                <div className="d-flex align-items-center justify-content-between" style={{columnGap: "1em"}}>
                    <Menu categories={this.props.categories} changeCategory={this.props.changeCategory} />
                    <div className="d-flex align-items-center justify-content-between" style={{columnGap: "16px"}}>
                        {
                            !this.props.loggedIn?(
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login">
                                    <button className="btn-primary btn">
                                        Login
                                    </button>
                                </Link>
                                <img
                                onClick={()=>{this.props.history.push('/login');}} 
                                style={{width: "1.5em",'marginLeft':'1rem','cursor':'pointer'}} 
                                src="/icons/cart.png" alt="cart"
                                />
                            </div>
                            ):(
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>{this.props.username} </span>
                                    <button
                                    onClick={()=>{this.props.logout();this.props.history.push('/');}} 
                                    style={{'marginLeft':'1rem'}} 
                                    className="btn-primary btn"
                                    >
                                        Logout
                                    </button>
                                    <Link to="/checkout" style={{'marginLeft':'1rem'}}>
                                        <img style={{width: "1.5em"}} src="/icons/cart.png" alt="cart"/>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);