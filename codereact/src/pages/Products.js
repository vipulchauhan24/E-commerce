import React, { Component } from 'react';
import { REACT_APP_API_URL } from '../constant';
import { ProductCard } from '../shared-components/product-card';
export class Products extends Component {
    loadProducts(){
        const data = {"category_name":localStorage.getItem('category')}
        fetch(REACT_APP_API_URL + "product/category",{
            method: "post",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if(data.success === 1){
                this.setState({
                    products: data.products
                })
            }
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
        this.loadProducts = this.loadProducts.bind(this);
    }
    componentDidMount(){
        this.loadProducts();
    }
    componentDidUpdate(prevProps){
        if(this.props.categoryName !== prevProps.categoryName ){
            this.loadProducts();
        }
    }
    render() {
        return (
            <div className="product__categories">
                {this.state.products?(
                    this.state.products.map(listItem => {
                        return <ProductCard changeProductId={this.props.changeProductId} key={listItem.product_id} details={listItem}/>
                    })
                ):<h1>Nothing found</h1>}
                
            </div>
        )
    }
}
