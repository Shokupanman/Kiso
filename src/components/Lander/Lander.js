import React from 'react'
import { MDBJumbotron, MDBCardTitle } from 'mdbreact'
import './Lander.scss'
import Logo from '../../Assets/Logo.png'
import LogoAlt from '../../Assets/LogoAlt.png'
import Jpn1 from '../../Assets/Jpn1.jpg'
import Login from '../Auth/Login'

function Lander() {
  return (
    <div>
      <MDBJumbotron className="jumbo">
        <p className="jumboP">Learn like a Native</p>
        <MDBCardTitle className="jumboT">Kiso</MDBCardTitle>
        <p className="jumboP">Speak like a Native</p>
      </MDBJumbotron>
      <section className="loginBit">
        <Login className="login" />
        <img src={Jpn1} alt="" className="pic" />
      </section>
    </div>
  )
}

export default Lander
