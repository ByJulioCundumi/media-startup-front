import "./cta.scss"
import { MdOutlineWorkHistory } from "react-icons/md"
import { FaBolt } from "react-icons/fa6"
import TypingText from "../typing-text/TypingText"
import bgImg from "../../assets/img/bg-img.gif"
import { SiYoutubekids } from "react-icons/si"
import { RiLoginBoxLine } from "react-icons/ri"

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
            <img className="cta__bg-img" src={bgImg} alt="" />
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small">©2025 | ChallengeClips</p>
                <p className="cta__text--headline">Publica el Próximo  <br />Gran Desafio</p>
                <p className="cta__text--description">Plantea el Concepto y lo haremos realidad. Tus ideas más locas, transformadas en videos reales 😮</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Solicitar un desafio</p>
                  <p className="cta__btn--secondary"><MdOutlineWorkHistory />Unirse a los Promotores</p>
                </div>
                <div className="cta__text--dynamic"><TypingText texts={motivationalPhrases} /></div>
              </div>
            }
          </div>
        </div>

        <div className="cta__sidebar">
  <SiYoutubekids className="cta__sidebar--icon" />

  <h3 className="cta__sidebar--title">
    ¿Qué puedes hacer?
  </h3>

  <ul className="cta__sidebar--list">
    <li>Solicita y Patrocina desafíos de tu interés.</li>
    <li>Completa desafios patrocinados y obten sus recompensas.</li>
    <li>Únete a los promotores y recibe ingresos por compartir.</li>
  </ul>

  <button className="cta__sidebar--btn" onClick={() => {/* acción para empezar */}}>
    <RiLoginBoxLine /> ¡Empieza ahora!
  </button>
</div>



      </div>
    </section>
  )
}

export default Cta
