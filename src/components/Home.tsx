import React, { Component } from 'react';
import Header from './Header';
import '../assets/css/styles.css';
import Hero from './Hero';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />

                <section className="our-work">
                    <h3 className="title">Some of our work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                    <hr />
                    <ul className="grid">
                    <li className="small" style={{backgroundImage: '../assets/img/coast.jpg'}} />
                    <li className="large" style={{backgroundImage: '../assets/img/island.jpg'}} />
                    <li className="large" style={{backgroundImage: '../assets/img/balloon.jpg'}} />
                    <li className="small" style={{backgroundImage: '../assets/img/mountain.jpg'}} />
                    </ul>
                </section>
                

                <section className="features">
                    <h3 className="title">Features and services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
                    <hr />
                    <ul className="grid">
                    <li>
                        <i className="fa fa-camera-retro" />
                        <h4>Photography</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                    </li>
                    <li>
                        <i className="fa fa-cubes" />
                        <h4>Web Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                    </li>
                    <li>
                        <i className="fa fa-newspaper-o" />
                        <h4>Content Editing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
                    </li>
                    </ul>
                </section>

                <section className="reviews">
                    <h3 className="title">Credits:</h3>
                    <p className="quote">Area code geolookup database</p>
                    <p className="author">https://github.com/ravisorg/Area-Code-Geolocation-Database</p>
                    <p className="quote">Theme source</p>
                    <p className="author">https://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox</p>
                    <p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.</p>
                    <p className="author">— Kevin Blake</p>
                </section>
            </div>
        )
    }
}

export default Home;