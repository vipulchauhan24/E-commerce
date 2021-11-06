import React from 'react'
import { Categories } from '../Categories/Categories';
import { Hero } from '../hero/hero';
import {Browse} from '../Browse/browse';

export class Home extends React.Component {
    render(){
        return (
            <div>
                <Hero/>
                <Categories categories={this.props.categories} changeCategory={this.props.changeCategory}/>
                <Browse changeProductId={this.props.changeProductId}/>
            </div>
        );
    }
}
