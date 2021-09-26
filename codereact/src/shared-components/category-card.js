import React, { Component } from 'react'

export default class CategoryCard extends Component {
    render() {
        const {name,image} = this.props.item;
        return (
            <div className="category-card">
                <div className="shadow"></div>
                <img src={image} alt={name}/>
                <h3>{name}</h3>
            </div>
        )
    }
}
