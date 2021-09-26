import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render(){
        return (
            <nav className="d-flex align-items-center justify-content-between top-nav container">
                <div>
                    <Link to="/"><img style={{width: "107px"}} src="./images/E-comm.png" alt="e-comm"/></Link>
                </div>
                <div className="input-wrapper" style={{flexBasis: "50%"}}>
                    <input placeholder="Search for ..." className="form-input" />
                    <img className="search-icon" src="./icons/ic-actions-search.svg" alt="search"/>
                </div>
                <div className="d-flex align-items-center justify-content-between" style={{columnGap: "16px"}}>
                    <Link to="/login"><img style={{width: "45px"}} src="./icons/Button - Fourth - Icon.svg" alt="user"/></Link>
                    <div>
                        <button className="btn-primary btn d-flex align-items-center" style={{columnGap:'5px'}}>
                            <img src="./icons/ic-ecommerce-basket.svg" alt="cart"/>
                            117 USD
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}