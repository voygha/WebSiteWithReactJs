import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';


export default class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="hola"
                src="https://img.blogs.es/anexom/wp-content/uploads/2018/07/23815272238_77f1b41a56_k.jpg"
                alt="First slide"
                height="400px"
                />
                <Carousel.Caption>
                    <br/><br/>
                    <a href='https://www.nobbot.com/general/animales-conversar/'>
                    <h3 className='header3'>Los animales son más educados</h3>
                    <br/>
                    <p className='carrous'>Gatitos Bonitos Aquí</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="hola"
                src="https://t1.ev.ltmcdn.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg"
                alt="Second slide"
                height="400px"
                />
                <Carousel.Caption>
                    <br/><br/>
                    <a href='https://www.ecologiaverde.com/animales-de-la-ciudad-3476.html'>
                    <h3 className='header3'>Animales de Ciudad</h3>
                    <br/>
                    <p className='carrous'>La vida secreta de las Ardillas</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="hola"
                src="https://educacion30.b-cdn.net/wp-content/uploads/2016/04/animales-destacada-978x652.jpg"
                alt="Third slide"
                height="400px"
                />
                <Carousel.Caption>
                    <br/><br/>
                    <a href='https://www.educaciontrespuntocero.com/recursos/recursos-aprender-animales/'>
                    <h3 className='header3'>Animales Silvestres</h3>
                    <br/>
                    <p className='carrous'>
                        El lobo Mexicano en Peligro de Extinción
                    </p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
