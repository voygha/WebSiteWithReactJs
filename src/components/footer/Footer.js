import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
    )
  }
}
export default Footer;
