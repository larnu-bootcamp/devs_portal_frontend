import { render, screen, cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import {afterEach, describe, it} from 'vitest'
import Navbar from '../src/components/Navbar/Navbar'

// @vitest-environment happy-dom

const TestComponent = () => {

  return (
    <>
    <Navbar/>
    </>
  )

}




describe('Navbar', () => {
  
  afterEach(cleanup)

  it('Deberia renderizar el componente navbar', ():void => {
    render(<Navbar/>)
  })

  it('Deberia existir un logo', ():void => {
    render(<Navbar/>)
    screen.getAllByRole('img')
    screen.findAllByText('Logo LarnU')
  })
  
  it('Deberia existir los enlaces Bootcamp, Blog, Egresados, Mision', ():void => {
    render(<Navbar/>)
    const enlaces:string[] = ['Bootcamp','Blog','Egresados','Mision']
    enlaces.forEach(enlace => {
      screen.findAllByText(enlace)
    })
  })

  it('Deberia existir un boton de Registrate', ():void => {
    render(<Navbar/>)
    screen.getAllByRole('button')
    screen.findAllByText('Registrate')
    fireEvent.click(screen.getByText(/Registrate/))
  })
  
})