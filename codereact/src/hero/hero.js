import React from 'react';
export class Hero extends React.Component {
    render(){
        return(
            <div className="hero container">
                <img style={{maxWidth:"100%"}} src="/images/main-banner.jpg" alt="banner"></img>
            </div>
        );
    }
}