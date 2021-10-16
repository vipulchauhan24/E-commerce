import React, { Component } from 'react'

export default class CategoryCard extends Component {
    render() {
        const {category_name,image} = this.props.item;
        return (
            <div className="category-card">
                <div className="shadow"></div>
                <img src={image} alt={category_name}/>
                <h3 style={{textTransform:"capitalize"}}>{category_name}</h3>
            </div>
        )
    }
}
