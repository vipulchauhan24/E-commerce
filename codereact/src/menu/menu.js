import React from 'react';

import { categories } from '../Static Data/categories-data';

export class Menu extends React.Component {
    render(){
        return(
            <nav className="main-menu container d-flex justify-content-center">
                <ul>
                    {
                        categories.map(item =>{
                            return <li key={item.id}>{item.name}</li>;
                        })
                    }
                </ul>
            </nav>
        );
    }
}