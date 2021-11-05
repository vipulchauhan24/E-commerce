import React from 'react';
import './App.css';
import { Header } from './header/header';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import {Details} from './pages/details';
import { Checkout } from './pages/checkout';
import { Route, Switch } from 'react-router';
import { Menu } from './menu/menu';
import Login from './pages/login';
import Signup from './pages/signup';
import Footer from './shared-components/Footer';
import { REACT_APP_API_URL } from './constant';
import {Products} from './pages/Products';
class App extends React.Component{

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

  constructor(){
    super()
    this.state = {
      productId : 1,
      categories : [],
      categoryName : ''
    }
    this.changeProductId = this.changeProductId.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  componentDidMount(){
    this.loadCategories();
  }

  changeCategory(name){
    localStorage.setItem('category', name)
    this.setState({
      categoryName : name
    });
  }

  changeProductId(id){
    this.setState({
      productId : id
    });
  }

  render(){
    return (
      <div>
        <BrowserRouter>    
          <div className="container-fluid">
            <Header/>
            <Menu categories={this.state.categories} changeCategory={this.changeCategory} />
          </div>    
        <Switch>
          <Route path='/' exact>
            <Home categories={this.state.categories} changeProductId={this.changeProductId}/>
          </Route>
          <Route path='/:name' exact>
            <Products categoryName={this.state.categoryName} changeProductId={this.changeProductId}/>
          </Route>
          <Route path='/details' exact>
            <Details productId={this.state.productId}/>
          </Route>
          <Route path='/checkout' exact>
            <Checkout/>
          </Route>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Route path='/signup' exact>
            <Signup/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
