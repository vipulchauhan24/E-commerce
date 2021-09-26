import React from 'react';
import { ProductCard } from '../shared-components/product-card';
import { browseList } from '../Static Data/products-data';
export class Browse extends React.Component{
    render() {
        return(
            <div className="browse-container container">
                <h2>Browse</h2>
                <div className="product-cards d-flex align-items-center justify-content-between flex-wrap" style={{columnGap: "1em", rowGap: "1em"}}>
                    {
                        browseList.map(listItem => {
                            return <ProductCard changeProductId={this.props.changeProductId} key={listItem.id} details={listItem}/>
                        })
                    }
                </div>
                
            </div>
            
        );
    }
}