import React from "react";
import CategoryCard from "../shared-components/category-card";
import { categories } from "../Static Data/categories-data";
export class Categories extends React.Component {
    render(){
        return(
            <div className="categories-wrapper container">
                <h2>
                    Categories
                </h2>
                <div className="categories">
                    {
                        categories.map(item => {
                            return (
                                <CategoryCard key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}