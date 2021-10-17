import React from 'react';
import { Link } from 'react-router-dom';
export class ProductCard extends React.Component {
    render(){
        const {product_image, product_name, product_price, product_id, product_rating} = this.props.details;
        return (
            <div className="product-card">
                <Link to="details"><div onClick={() => this.props.changeProductId(product_id)} className="img" style={{background: "url('"+product_image+"')"}}></div></Link>
                <div>
                    <Link style={{textDecoration:"none",color:"#227AFF"}} to="details"><h4 onClick={() => this.props.changeProductId(product_id)}>{product_name}</h4></Link>
                    <span>{product_rating} out of 5</span>
                    <p style={{color:"#B12704"}}>₹{product_price}</p>
                    <span aria-label="FREE Delivery by Amazon"><span>FREE Delivery</span></span>
                </div>
            </div>
        );
    }
}