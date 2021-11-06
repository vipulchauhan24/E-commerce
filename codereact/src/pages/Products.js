import React, { Component } from 'react';
import { REACT_APP_API_URL } from '../constant';
import { ProductCard } from '../shared-components/product-card';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
                    products : data.products,
                    showLoader : false
                })
            }
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            showLoader : true
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
            <div className="product__categories container">
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    visible={this.state.showLoader}
                    className="loader"
                />
                {this.state.products?(
                    this.state.products.map(listItem => {
                        return (<ProductCard
                         remove={false} 
                         changeProductId={this.props.changeProductId} 
                         key={listItem.product_id} 
                         details={listItem}
                         />)
                    })
                ):<h1>Nothing found</h1>}
                
            </div>
        )
    }
}
