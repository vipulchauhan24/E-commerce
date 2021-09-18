import React from 'react';
import { ProductCard } from '../shared-components/product-card';
import { browseList } from '../Static Data/products-data';
export class Browse extends React.Component{
    render() {
        return(
            <div>
                <h2>Browse</h2>
                <div className="d-flex align-items-center flex-wrap" style={{columnGap: "2em", rowGap: "2em"}}>
                    {
                        browseList.map(listItem => {
                            return <ProductCard key={listItem.id} details={listItem}/>
                        })
                    }
                </div>
                
            </div>
            
        );
    }
}