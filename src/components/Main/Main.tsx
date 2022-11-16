import React from 'react'
import "./main.css"
import Ticket from '../../assets/ticket.gif'
import Card from '../StudentCard/Card'

const Main = () => {
  return (
    <div className='main'>
      <div className='main-text'>
      <img className='main-text__img' src={Ticket} alt="img git ticket" />
      <h1 className='main-text__h1'>Encuentra el match perfecto de programadores para tu empresa</h1>
      <p className='main-text__p'>Talento de Latinoamérica al mundo</p>
      </div>
      <Card />
    </div>
  )
}

export default Main