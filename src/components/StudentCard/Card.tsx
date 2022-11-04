// @ts-ignore
import SVGlocation from './asset/SvgComponent.jsx'
// @ts-ignore
import SVGLinkendin from './asset/SvgLinkendin.jsx'
// @ts-ignore
import SVGGithub from './asset/SvgGithub.jsx'
// @ts-ignore
import SVGPortafolio from './asset/SvgPortafolio.jsx'
// @ts-ignore
import SVGSkill from './asset/SvgSkill.jsx'
// @ts-ignore
import SVGMessage from './asset/SvgMessage.jsx'
import { useState, useEffect } from 'react'
import "./card.css"
import { getUsersApi } from './api/featch.js'

const Card = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await getUsersApi();
      setData(response);
      console.log(response);
    }
    getUsers();
  }, [])

  // typeScript data type
  type Student = {
    name: string,
    profession: string,
    email: string,
    city: string,
    country: string,
    linkedin: string,
    github: string,
    portafolio: string,
    photo: string,
    description: string,
    skills: string[],
  }

  return (
    <div className='container-cards'>
      {data.map((item: Student, index) => {
        return (
          <div className='container-card__student' key={index}>
            <div className='container-card__student-perfil'>
              <img className='container-card__student--img' src={item.photo} alt="foto perfil" />
              <div className='container-card__student-container-text'>
                <h3>{item.name}</h3>
                <p>{item.profession}</p>
                <small><SVGlocation width={14} height={20} /> {item.city}, {item.country}</small>
              </div>
            </div>
            <div className='container-card__student-links'>
              <ul>
                <li><button className='container-card__student-links--btn-contactar'><SVGMessage width={16} height={16} />Contactar</button></li>
                <li>
                  <a href={item.linkedin} target="_blank">
                    <SVGLinkendin width={24} height={24} />
                    <p className='link-perfil'>LinkendIn</p></a></li>
                <li>
                  <a href={item.github} target="_blank">
                    <SVGGithub width={24} height={24} />
                    <p className='link-perfil'>GitHub</p></a></li>
                <li>
                  <a href={item.portafolio} target="_blank">
                    <SVGPortafolio width={24} height={24} />
                    <p className='link-perfil'>Portafolio</p></a></li>
              </ul>
            </div>
            <div className='container-card__student-bio'>
              <p>{item.description}</p>
            </div>
            <div className='container-card__student-skill'>
              <div className='container-card__student-skill--title'>
                <SVGSkill />
                <h3>
                  Skills
                </h3>
              </div>
              <div className='container-card__student-skill--list'>
                {item.skills.map((skill, index) => {
                  return (
                    <p key={index}>{skill}</p>
                  )
                }
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card