import React from 'react';
import './product-card.css';
export class ProductCard extends React.Component {
    render(){
        return (
            <div className="product-card">
                <div className="product-image">

                </div>
                <div className="product-info">
                    <p>#product 1</p>
                    <strong>36.99 USD</strong>
                </div>
                <div className="product-review">
                    <div>

                    </div>
                    <strong>183 reviews</strong>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <button className="btn btn-count">1 pcs</button>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        );
    }
}