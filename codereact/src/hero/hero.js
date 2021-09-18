import React from 'react';
import './hero.css';
export class Hero extends React.Component {
    render(){
        return(
            <div className="hero">
                <h1>
                    Welcome to E-comm world!
                </h1>
                <p style={{marginBottom : '1rem'}}>
                    Find the best deals for your next shopping spree.
                </p>
                <div>
                    <button className="btn btn-primary">Load items</button>
                    <button className="btn btn-transparent">Learn more</button>
                </div>
            </div>
        );
    }
}