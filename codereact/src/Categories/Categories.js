import React from "react";
import CategoryCard from "../shared-components/category-card";
;

export class Categories extends React.Component {
    
    render(){
        return(
            <div className="categories-wrapper container">
                <h2>
                    Categories
                </h2>
                <div className="categories">
                    {
                        this.props.categories.map(item => {
                            return (
                                <CategoryCard changeCategory={this.props.changeCategory} key={item.category_id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}