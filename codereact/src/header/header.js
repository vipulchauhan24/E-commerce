import React from 'react';
import './header.css';
export class Header extends React.Component {
    render(){
        return (
            <nav className="d-flex align-items-center justify-content-between top-nav">
                <div>
                    <img src="" alt="e-comm"/>
                </div>
                <div className="input-wrapper" style={{flexBasis: "50%"}}>
                    <input placeholder="Search for ..." className="form-input" />
                    <img className="search-icon" src="" alt="search"/>
                </div>
                <div className="d-flex align-items-center justify-content-between" style={{columnGap: "16px"}}>
                    <img src="" alt="user"/>
                    <div>
                        <button className="btn-primary btn">
                            <img src="" alt="cart"/>
                            117 USD
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}