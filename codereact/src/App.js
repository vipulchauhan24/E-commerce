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
class App extends React.Component{
  constructor(){
    super()
    this.state = {
        productId : 1
    }
    this.changeProductId = this.changeProductId.bind(this);
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
        <Switch>
          <Route path='/' exact>
            <div className="container-fluid">
              <Header/>
              <Menu/>
            </div>
            <Home changeProductId={this.changeProductId}/>
          </Route>
          <Route path='/details' exact>
            <div className="container-fluid">
              <Header/>
              <Menu/>
            </div>
            <Details productId={this.state.productId}/>
          </Route>
          <Route path='/checkout' exact>
            <div className="container-fluid">
              <Header/>
              <Menu/>
            </div>
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
