import React from "react";
import CategoryCard from "../shared-components/category-card";
const {REACT_APP_API_URL} = process.env

export class Categories extends React.Component {
    loadCategories(){
        fetch(REACT_APP_API_URL+"categories/load",{
            method: "get",
            headers:{
                "content-type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            if(data.success === 1){
                this.setState({
                    categories: data.categories
                })
            }
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            categories : []
        }
    }
    componentDidMount(){
        this.loadCategories();
    }
    render(){
        return(
            <div className="categories-wrapper container">
                <h2>
                    Categories
                </h2>
                <div className="categories">
                    {
                        this.state.categories.map(item => {
                            return (
                                <CategoryCard key={item.category_id} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}