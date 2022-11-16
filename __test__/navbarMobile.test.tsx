import { render, screen, cleanup, fireEvent} from '@testing-library/react'
import React from 'react'
import {afterEach, describe, it} from 'vitest'
import NavbarMobile from '../src/components/Navbar/NavbarMobile'
// @vitest-environment happy-dom

const TestComponent = () => {

  return (
    <>
    <NavbarMobile/>
    </>
  )

}


describe ('navbarMobile',() => {
  
  afterEach(cleanup)


  it('Deberia renderizar el componente navbar', ():void => {
    render(<NavbarMobile/>)
  })

  it('Deberia existir un logo en el menu mobile', ():void => {
    render(<NavbarMobile/>)
    screen.getAllByRole('img')
    screen.findAllByText('Logo LarnU')
  })

  it('Deberia existir un boton Mobile y deberian verse en ', ():void => {
    render(<NavbarMobile/>)
    screen.getAllByRole('button')
    fireEvent.click(screen.getByTestId('iconMobile'))
    const enlaces:string[] = ['Bootcamp','Blog','Egresados','Misión']
    enlaces.forEach(enlace => {
      screen.findAllByText(enlace)
    })
  })
})