import "./cta.scss"
import { MdOutlineWorkHistory } from "react-icons/md"
import { FaBolt } from "react-icons/fa6"
import { SiYoutubekids } from "react-icons/si"
import TypingText from "../typing-text/TypingText"

function Cta() {

  const motivationalPhrases = [
    'Ofrece al público lo que quiere ver!',
    'Convierte tus idea en desafio!',
    'Haz que valga la pena!',
    'Crea algo memorable!',
    'Monetiza tus ideas!'
  ];

  return (
    <section className="cta">

      <div className="cta__header">
        <div className="cta__video-section">
          <div className="cta__video-wrapper">
            <img className="cta__bg-img" src="https://i.pinimg.com/originals/ff/83/b9/ff83b9c6abe5366bf7d8cc309b53e88d.gif" alt="" />
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small">©2025 | VipChallengers</p>
                <p className="cta__text--headline">Patrocina Grandes <br /> Desafios</p>
                <p className="cta__text--description">Haz que alguien publique un video divertido de algo que quieras ver 😮 Libera tu imaginacion!</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary">Solicitar un desafio</p>
                  <p className="cta__btn--secondary"><MdOutlineWorkHistory />Promotores</p>
                </div>
                <div className="cta__text--dynamic"><TypingText texts={motivationalPhrases} /></div>
              </div>
            }
          </div>
        </div>

        <aside className="cta__sidebar" aria-label="Invitación a monetizar">
  <section className="cta__monetize-message">
    <div className="cta__monetize-icon" aria-hidden="true">
      <SiYoutubekids />
    </div>
    <p className="cta__monetize-text">
      ¿Tienes <strong>ideas únicas</strong> o <strong>talentos</strong> que podrías mostrar en video a cambio de un patrocinio?
    </p>
    <footer className="cta__monetize-footer">
      <FaBolt className="cta__monetize-footer-icon" aria-hidden="true" />
      <span className="cta__monetize-footer-text">Da el primer paso | Inicia Sesión</span>
    </footer>
  </section>
</aside>

      </div>
      
    </section>
  )
}

export default Cta
