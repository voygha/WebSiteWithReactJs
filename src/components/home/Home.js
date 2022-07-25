import React, { Component } from "react";

//import componnent
import Menu from "../menu/Menu";
import Slider from "../slider/Slider";
import Footer from "../footer/Footer";
import "./home.css";
import image from "../../assets/img/anastasya.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <div class="hero_container">
              <div class="hero_content">
                <h1 class="section-heading">Bienvenidos a My WebApp</h1>
                <p class="text-light2">
                  Desarrollada por LuisinPerrin
                </p>
                <p class="text-light1">
                  Aquí encontrarás algunas funciones muy
                  interesantes.
                </p>
                <br />
                <a href="/" class="cta_btn">
                  Hecha un vistazo
                </a>
              </div>
              <div class="hero_image">
                <img src={image} alt="some value" class="hero-img" />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container">
            <Slider />
            </div>
            
            <br />
            <br />
            <hr className="featurette-divider" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
