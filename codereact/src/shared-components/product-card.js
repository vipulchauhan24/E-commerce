import React from 'react';
import { Link } from 'react-router-dom';
export class ProductCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arrRating : []
        }
        this.addRating = this.addRating.bind(this);
    }
    
    addRating(){
        const len = parseInt(this.props.details.product_rating);
        const arrRating = []
        for(let i = 0; i < len;i++){
            arrRating.push(true);
        }
        for(let i = 0; i < 5 - len;i++){
            arrRating.push(false);
        }

        this.setState({
            arrRating : arrRating
        })
    }
    componentDidMount(){
        this.addRating();
    }
    render(){
        const {product_image, product_name, product_price, product_id} = this.props.details;
        return (
            <div className="product-card">
                <Link to={"/details/"+product_name}><div onClick={() => this.props.changeProductId(product_id)} className="img" style={{background: "url('"+product_image+"')"}}></div></Link>
                <div>
                    <Link style={{textDecoration:"none",color:"#227AFF"}} to={"/details/"+product_name}><h4 onClick={() => this.props.changeProductId(product_id)}>{product_name}</h4></Link>
                    {
                        this.state.arrRating.map((rate,i)=>{
                            if(rate){
                                return <span key={i}><img style={{width:"0.75em"}} src="/icons/star.png" alt=""/></span>
                            } else {
                                return <span key={i}><img style={{width:"0.75em"}} src="/icons/star-d.png" alt=""/></span>
                            }
                        })
                    }
                    <p style={{color:"#B12704"}}>₹{product_price}</p>
                    <span aria-label="FREE Delivery"><span>FREE Delivery</span></span>
                </div>
                {
                    this.props.remove?(
                    <div>
                        <img style={{maxWidth:'1em',cursor:'pointer',marginTop:'0.5rem'}} src="/icons/remove.png" alt=""/>
                    </div>
                    ):(<span></span>)
                }
            </div>
        );
    }
}