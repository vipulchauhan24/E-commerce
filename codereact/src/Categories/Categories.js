import React from "react";
import { categories } from "../Static Data/categories-data";
import './Categories.css';
export class Categories extends React.Component {
    render(){
        return(
            <div className="categories-wrapper">
                <h2>
                    Categories
                </h2>
                <div>
                    <ul>
                        {categories.map(item => {
                            return(
                                <li key={item.id}>
                                    <div className="image-wrapper">
                                        
                                    </div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.items} items</p>
                                    </div>
                                </li>
                            ) 
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}