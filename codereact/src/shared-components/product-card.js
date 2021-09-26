import React from 'react';
import { Link } from 'react-router-dom';
export class ProductCard extends React.Component {
    render(){
        const {image_url, name, price, id} = this.props.details;
        return (
            <div className="product-card">
                <Link to="details"><div onClick={() => this.props.changeProductId(id)} className="img" style={{background: "url('"+image_url+"')"}}></div></Link>
                <div>
                    <Link style={{textDecoration:"none",color:"#227AFF"}} to="details"><h4 onClick={() => this.props.changeProductId(id)}>{name}</h4></Link>
                    <p>{price}</p>
                </div>
            </div>
        );
    }
}