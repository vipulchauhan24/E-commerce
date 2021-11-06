import React from 'react';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {

    render(){
        return(
            <nav className="main-menu container d-flex justify-content-center">
                <ul>
                    {
                        this.props.categories.map(item =>{
                            return (
                                <Link  to={item.category_name} key={item.category_id}> 
                                    <li onClick={()=>{this.props.changeCategory(item.category_name)}}>
                                        {item.category_name}
                                    </li>
                                </Link>
                            );
                        })
                    }
                </ul>
            </nav>
        );
    }
}