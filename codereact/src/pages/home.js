import React from 'react'
import { Categories } from '../Categories/Categories';
import { Hero } from '../hero/hero';
import {Browse} from '../Browse/browse';

export class Home extends React.Component {
    render(){
        return (
            <>
                <Hero/>
                <Categories/>
                <Browse changeProductId={this.props.changeProductId}/>
            </>
        );
    }
}
