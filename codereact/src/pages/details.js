import React, { Component } from 'react'
import { REACT_APP_API_URL } from "../constant";


export class Details extends Component {

    loadProduct(){
        fetch(REACT_APP_API_URL+"product/id",{
            method: "get",
            headers:{
                "content-type": "application/json",
                "product_id": this.props.productId
            }
        }).then(res => res.json()).then(data => {
            if(data.success === 1){
                this.setState({
                    product: data.products[0]
                })
            }
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            product : []
        }
    }
    componentDidMount(){
        this.loadProduct();
    }

    render() {
        const {product_image, product_name, product_price, product_description} = this.state.product;
        return (
            <div className="container">
                <div className="product-description" style={{gap:'3rem'}}>
                    <div className="product-main-image d-flex align-items-center justify-content-center">
                        <img src={product_image} alt={product_name}/>
                    </div>
                    <div className="d-flex flex-column product-info">
                        <h2>{product_name}</h2>
                        <p className="price">₹{product_price}</p>
                        <p className="desc" dangerouslySetInnerHTML={{__html: product_description}}>
                            
                        </p>
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
