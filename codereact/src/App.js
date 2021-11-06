import React from 'react';
import './App.css';
import Header from './header/header';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import Details from './pages/details';
import { Checkout } from './pages/checkout';
import { Route, Switch } from 'react-router';
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
      categoryName : '',
      user: 'Login',
      loggedIn : false
    }
    this.changeProductId = this.changeProductId.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.loadUserName = this.loadUserName.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    if(sessionStorage.getItem('accessToken')){
      this.loadUserName(sessionStorage.getItem('email').split('@')[0]);
    }
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

  loadUserName(name){
    this.setState({
      user : 'Hi '+ name,
      loggedIn : true
    })
  }

  logout(){
    localStorage.clear('key');
    sessionStorage.clear('accessToken');
    sessionStorage.clear('email');
    this.setState({
      loggedIn : false
    });
    
  }

  render(){
    return (
      <div>
        <BrowserRouter>   
        <Switch>
          <Route path='/' exact>
            <div className="container-fluid">
              <Header
               categories={this.state.categories} 
               changeCategory={this.changeCategory} 
               logout={this.logout} 
               username={this.state.user} 
               loggedIn={this.state.loggedIn}
               />
            </div>
            <Home categories={this.state.categories} changeProductId={this.changeProductId} changeCategory={this.changeCategory}/>
          </Route>
          <Route path='/category/:name' exact>
            <div className="container-fluid">
            <Header
               categories={this.state.categories} 
               changeCategory={this.changeCategory} 
               logout={this.logout} 
               username={this.state.user} 
               loggedIn={this.state.loggedIn}
               />
            </div>
            <Products categoryName={this.state.categoryName} changeProductId={this.changeProductId}/>
          </Route>
          <Route path='/details/:name' exact>
            <div className="container-fluid">
              <Header
               categories={this.state.categories} 
               changeCategory={this.changeCategory} 
               logout={this.logout} 
               username={this.state.user} 
               loggedIn={this.state.loggedIn}
               />
            </div>
            <Details productId={this.state.productId}/>
          </Route>
          <Route path='/checkout' exact>
            <div className="container-fluid">
              <Header
               categories={this.state.categories} 
               changeCategory={this.changeCategory} 
               logout={this.logout} 
               username={this.state.user} 
               loggedIn={this.state.loggedIn}
               />
            </div>
            <Checkout changeProductId={this.changeProductId}/>
          </Route>
          <Route path='/login' exact>
            <Login loadUserName={this.loadUserName}/>
          </Route>
          <Route path='/signup' exact>
            <Signup loadUserName={this.loadUserName}/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
