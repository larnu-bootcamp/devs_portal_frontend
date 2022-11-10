import { render, screen, cleanup, fireEvent, renderHook, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { afterEach, describe, it, expect } from 'vitest'
// @ts-ignore
import Card from '../Card'
// @ts-ignore
import { getUsersApi } from '../api/featch.tsx'
// @vitest-environment happy-dom


const userMock = [
  {
    name: "Camila Isadora Valenzuela Fierro",
    profession: "FullStack Developer",
    email: "cami.valenzuela@uc.cl",
    city: "Santiago",
    country: "Chile",
    linkedin: "https://www.linkedin.com/in/camila-isadora-valenzuela-fierro/",
    github: "https://github.com/isavalenzuela",
    portafolio: "https://react-final-pi.vercel.app/",
    photo: "https://avatars.githubusercontent.com/u/73500613?v=4",
    description: "Soy una estudiante de LarnU, me gusta el diseño y la programación, me gusta aprender cosas nuevas y me gusta mucho el café",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub"
    ]
  }, {
    name: "César Rivera",
    profession: "FullStack Developer",
    email: "riveramirandac@gmail.com",
    city: "Muisne",
    country: "Ecuador",
    linkedin: "https://www.linkedin.com/in/c%C3%A9sar-rivera316/",
    github: "",
    portafolio: "https://react-final-pi.vercel.app/",
    photo: "https://avatars.githubusercontent.com/u/77915616?v=4",
    description: "Soy una estudiante de LarnU, me gusta el diseño y la programación, me gusta aprender cosas nuevas y me gusta mucho el café",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub"
    ]
  }
]

describe('Test componente card', () => {

  it('Verificando si se esta renderizando la informacion traida por el api', async () => {
    const { findByText } = render(<Card />);
    expect(await findByText('Camila Isadora Valenzuela Fierro')).toBeTruthy();
    expect(await findByText('César Rivera')).toBeTruthy();
  })
  it('verificando si la data traida por el api es la correcta', async () => {
    const { result } = renderHook(() => getUsersApi());
    expect(result.current).resolves.toStrictEqual(userMock)
  })
  it('verifica que si el api esta trayendo la informacion de 2 usuarios', async () => {
    const { result } = renderHook(() => getUsersApi());
    expect(result.current).resolves.toHaveLength(2)
  })
})