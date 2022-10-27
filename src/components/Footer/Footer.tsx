import React from 'react'
import './footer.css'
import Logo from '../../assets/larnu_logo.png'

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-footer_main">
        <div className="container-footer_main__block">
          <div className="container-footer_main__block-first">
            <img className="container-footer_logo " src={Logo} alt="Larnu Logo" />
            <p className="font-fibraRegular">
              All Rights Reserved © LARNU SPA 2021
            </p>
            <img
              className="container-footer_main__block-first__img"
              src="https://static.wixstatic.com/media/4023e9_f464cc95fcd34f3293726f0c5674f98d~mv2.png/v1/fill/w_360,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/appstoreee_edited.png"
              alt="Logo App Store"
            />
            <div className=" mb-10 sm:mb-0">
              <h3 className="mb-5">Oficinas:</h3>
              <p className="mb-2 text-sm">
                <small className="font-normal font-sans">CL </small>Chile
              </p>
              <p className="font-light font-sans text-sm text-gray-700">
                Avenida Apoquindo 6410 <br />
                Las Condes, Santiago <br /> +569 81801932
              </p>
            </div>
          </div>
          <div className="container-footer_main__block-second ">
            <ul className="font-fibraRegular">
              <li className="container-footer_main__block-second-title">Producto</li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
            </ul>
            <ul className="font-fibraRegular">
              <li className="container-footer_main__block-second-title">Equipo</li>
              <li>
                <a href="https://es.larnu.com/about-us" target="_blank">
                Sobre LarnU
                </a>
              </li>
              <li>
                <a href="https://es.larnu.com/founders" target="_blank">
                Fundadores
                </a>
              </li>
              <li>
                <a href="https://es.larnu.com/careers" target="_blank">
                Prensa
                </a>
              </li>
              <li>
                <a href="https://es.larnu.com/contact-us" target="_blank">
                Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-footer_main__block--second">
          <div className='footer-contact'>
            <h3 className="title">Contáctanos:</h3>
            <a
              className="title__correo"
              href="mailto:admin@larnu.com"
            >
              admin@larnu.com
            </a>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://www.linkedin.com/company/larnu"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-29px h-29px"
                  src="https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa0402eb9ba2430d9d0620b59556efca.png"
                  alt="logo linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Larnu-101336045198582"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-29px h-29px"
                  src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png"
                  alt="logo linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/larnu_official"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-29px h-29px"
                  src="https://static.wixstatic.com/media/870f97661ed14a5bb2d96ecbddec0aed.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/870f97661ed14a5bb2d96ecbddec0aed.png"
                  alt="logo linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/larnu.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-29px h-29px"
                  src="https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_44,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1aa082f7c0747168d9cf43e77046142.png"
                  alt="logo linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-document-link mt-10">
          <ul className="flex items-center gap-x-10 gap-y-4 sm:gap-y-0  flex-wrap">
            <li>
              <a
                className="font-light font-sans text-sm text-gray-700"
                href="https://es.larnu.com/security"
                target="_blank"
                rel="noreferrer"
              >
                Seguridad
              </a>
            </li>
            <li>
              <a
                className="font-light font-sans text-sm text-gray-700"
                href="https://es.larnu.com/gdpr"
                target="_blank"
                rel="noreferrer"
              >
                GDPR
              </a>
            </li>
            <li>
              <a
                className="font-light font-sans text-sm text-gray-700"
                href="https://es.larnu.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                Terminos de Servicio
              </a>
            </li>
            <li>
              <a
                className="font-light font-sans text-sm text-gray-700"
                href="https://es.larnu.com/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Politica de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
