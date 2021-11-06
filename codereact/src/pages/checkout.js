import React, { Component } from 'react'
import { REACT_APP_API_URL } from '../constant';
import { ProductCard } from '../shared-components/product-card';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class Checkout extends Component {

    loadCart(){
        fetch(REACT_APP_API_URL+'cart/load',{
            method : 'GET',
            headers:{
                'Authorization': sessionStorage.getItem('accessToken')
            }
        }).then(res => res.json()).then(data=>{
            this.setState({
                products : data.cart,
                showLoader : false
            });
        });
    }

    componentDidMount(){
        this.loadCart();
    }
    constructor(props){
        super(props);
        this.state = {
            showLoader : true,
            products : []
        };
        this.loadCart = this.loadCart.bind(this);
    }

    render() {
        return (
            <div className="checkout__page container d-flex flex-column">
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
                             changeProductId={this.props.changeProductId} 
                             key={listItem.cart_id} 
                             details={listItem} 
                             remove={true}
                             />)
                    })
                ):<h1>Opps! Cart Empty.</h1>}
            </div>
        )
    }
}
