import React, { Component } from 'react'
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron';
import Details from './details/Details';
import Footer from '../footer/Footer';

export default class Nosotros extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <main role="main" className="flex-shrink-0 mt-5">
				<Jumbotron />
				<Details /> 
        </main>
        <Footer />
      </div>
    )
  }
}
