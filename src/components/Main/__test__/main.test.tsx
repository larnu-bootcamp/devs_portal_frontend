import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
// @ts-ignore
import Main from '../Main.tsx'
// @vitest-environment happy-dom

describe('Main', () => {

  afterEach(cleanup)

  it('verificando que se ve el h1', (): void => {
    render(<Main />)
    screen.getByText('Encuentra el match perfecto de programadores para tu empresa')
  })
  it('verificando parrafo', (): void => {
    render(<Main />)
    screen.getByText('Talento de Latinoamérica al mundo')
  })
  // test img
  it('verificando que se ve la imagen', (): void => {
    render(<Main />)
    screen.getByAltText('img git ticket')
  })
})