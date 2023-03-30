import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
        style = {{ backgroundImage: `url(${MultiplePizzas})` }}>

        </div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Quis consequat minim irure laborum irure minim nulla aute nisi qui anim. Do mollit officia do duis aliqua. Irure deserunt Lorem sint qui magna tempor incididunt labore elit. Reprehenderit aute deserunt proident minim excepteur amet sint eu sit sit minim reprehenderit velit. Esse occaecat voluptate nisi id ut aliqua officia nostrud labore do anim ipsum ut. Nisi et do eu tempor nulla anim. Amet cillum minim aute proident minim minim.</p>

        </div>
    </div>
  )
}

export default About