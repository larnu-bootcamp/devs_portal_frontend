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
import "./card.css"

const Card = () => {
  return (
    <div className='container-cards'>
      <div className='container-card__student'>
      <div className='container-card__student-perfil'>
        <img className='container-card__student--img' src="https://i.pravatar.cc/300" alt="foto perfil" />
        <div className='container-card__student-container-text'>
        <h3>Camila Isadora Valenzuela Fierro</h3>
        <p>FullStack Developer</p>
        <small><SVGlocation width={14} height={20}/> Santigo, Chile</small>
      </div>
        </div>
      <div className='container-card__student-links'>
        <ul>
          <li><button className='container-card__student-links--btn-contactar'><SVGMessage width={16} height={16}/>Contactar</button></li>
          <li>
            <a href="#">
              <SVGLinkendin width={24} height={24}/>
              <p className='link-perfil'>LinkendIn</p></a></li>
          <li>
            <a href="#">
              <SVGGithub width={24} height={24}/>
              <p className='link-perfil'>GitHub</p></a></li>
          <li>
            <a href="#">
              <SVGPortafolio width={24} height={24}/>
              <p className='link-perfil'>Portafolio</p></a></li>
        </ul>
      </div>
      <div className='container-card__student-bio'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
      </div>
      <div className='container-card__student-skill'>
        <div className='container-card__student-skill--title'>
        <SVGSkill/>
        <h3>
          Skills
        </h3>
        </div>
        <div className='container-card__student-skill--list'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>PostgreSQL</p>
            <p>Docker</p>
            <p>Agile</p>
            <p>CI/CD</p>
        </div>
      </div>
      </div>
      <div className='container-card__student'>
      <div className='container-card__student-perfil'>
        <img className='container-card__student--img' src="https://i.pravatar.cc/300" alt="foto perfil" />
        <div className='container-card__student-container-text'>
        <h3>César Rivera</h3>
        <p>FullStack Developer</p>
        <small><SVGlocation width={14} height={20}/> Santigo, Chile</small>
      </div>
        </div>
      <div className='container-card__student-links'>
      <ul>
          <li><button className='container-card__student-links--btn-contactar'><SVGMessage width={16} height={16}/>Contactar</button></li>
          <li>
            <a href="#">
              <SVGLinkendin width={24} height={24}/>
              <p className='link-perfil'>LinkendIn</p></a></li>
          <li>
            <a href="#">
              <SVGGithub width={24} height={24}/>
              <p className='link-perfil'>GitHub</p></a></li>
          <li>
            <a href="#">
              <SVGPortafolio width={24} height={24}/>
              <p className='link-perfil'>Portafolio</p></a></li>
        </ul>
      </div>
      <div className='container-card__student-bio'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
      </div>
      <div className='container-card__student-skill'>
        <div className='container-card__student-skill--title'>
        <SVGSkill/>
        <h3>
          Skills
        </h3>
        </div>
        <div className='container-card__student-skill--list'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>PostgreSQL</p>
            <p>Docker</p>
            <p>Agile</p>
            <p>CI/CD</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card