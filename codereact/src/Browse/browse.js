import React from 'react';
import { ProductCard } from '../shared-components/product-card';
import { REACT_APP_API_URL } from "../constant";
export class Browse extends React.Component{

    loadProducts(){
        fetch(REACT_APP_API_URL + "product/load",{
            method: "get",
            headers:{
                "content-type": "application/json"
            }
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
    }
    componentDidMount(){
        this.loadProducts();
    }
    render() {
        return(
            <div className="browse-container container">
                <h2>Browse</h2>
                <div className="product-cards" style={{columnGap: "1em", rowGap: "1em"}}>
                    {
                        this.state.products.map(listItem => {
                            return (<ProductCard
                                 remove={false} 
                                 changeProductId={this.props.changeProductId} 
                                 key={listItem.product_id} 
                                 details={listItem}
                                 />)
                        })
                    }
                </div>
            </div>
            
        );
    }
}