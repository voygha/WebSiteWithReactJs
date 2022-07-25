import React, { Component } from "react";
import Table from "react-bootstrap/Table";

import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

export default class Post extends Component {
  state = {
    post: [],
  };
  //Consumo de API Publica
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    //cambio del state de los post para llenar con datos de la API
    this.setState({ post: data });
  }
  render() {
    return (
      <div>
        <Menu/>
        <br/>
        <h1 className="text-center">Post</h1>
        <div className="container">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="text-center" WIDTH="80px">Post Id</th>
                <th className="col-sm-2 text-center">Post Title</th>
                <th className="col-sm-8 text-center">Post Body</th>
              </tr>
            </thead>
          </Table>
          {this.state.post.map((post) => {
            return (
              <div key={post.id}>
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <td className="text-center" WIDTH="80px">{post.id}</td>
                      <td className="col-sm-2 ">{post.title}</td>
                      <td className="col-sm-8">{post.body}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}
        </div>
        <Footer/>
      </div>
    );
  }
}
