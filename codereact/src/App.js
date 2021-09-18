import React from 'react';
import './App.css';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Hero } from './hero/hero'
import { Categories } from './Categories/Categories';
import { Browse } from './Browse/browse';

class App extends React.Component{
  render(){
    return (
      <div className="container">
        <Header/>
        <Menu/>
        <Hero/>
        <Categories/>
        <Browse/>
      </div>

    );
  }
}

export default App;
