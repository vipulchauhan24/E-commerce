import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CategoryCard extends Component {

    render() {
        const {category_name,image} = this.props.item;
        return (
            <Link to={'/category/'+category_name} onClick={()=>{this.props.changeCategory(category_name)}} className="category-card">
                <div className="shadow"></div>
                <img src={image} alt={category_name}/>
                <h3 style={{textTransform:"capitalize"}}>{category_name}</h3>
            </Link>
        )
    }
}
