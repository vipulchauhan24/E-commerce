import React, { Component } from 'react'
import { browseList } from '../Static Data/products-data';

export class Details extends Component {
    render() {
        const {name, price, description, image_url} = browseList[this.props.productId - 1];
        return (
            <div className="container">
                <div className="product-description" style={{gap:'3rem'}}>
                    <div className="product-main-image d-flex align-items-center justify-content-center">
                        <img src={image_url} alt={name}/>
                    </div>
                    <div className="d-flex flex-column product-info">
                        <h2>{name}</h2>
                        <p className="price">{price}</p>
                        <p className="desc">
                            {description}{this.props.productId}
                        </p>
                        <div className="d-flex align-items-center" style={{columnGap:'1rem', marginBottom:'2rem'}}>
                            <button className="btn btn-count">1 pcs</button>
                        </div>
                        <div className="d-flex align-items-center" style={{columnGap:'1rem'}}>
                            <button className="btn btn-primary">Add to cart</button>
                            <button className="btn btn-transparent">Add to whishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
