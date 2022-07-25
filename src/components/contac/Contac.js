import React, { Component } from "react";
import Menu from "../menu/Menu";
import Form from './form/Form';
import Map from './map/Map';
import Footer from "../footer/Footer";

export default class Contac extends Component {
  render() {
    return (
      <div>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <h1 className="mb-5">Contacto</h1>
            <div className="row">
              <div className="col-md-6">
                <Form />{" "}
              </div>
              <div className="col-md-6">
                <Map />{" "}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
