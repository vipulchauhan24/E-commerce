import React from 'react';
export class Hero extends React.Component {
    render(){
        return(
            <div className="hero container d-flex align-items-center justify-content-between">
                <h1>Online Shopping</h1>
                <img style={{maxWidth:"40em"}} src="/images/5865.jpg" alt="banner"></img>
            </div>
        );
    }
}