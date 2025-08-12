import "./cta.scss"
import { MdOutlineWorkHistory } from "react-icons/md"
import { FaBolt } from "react-icons/fa6"
import TypingText from "../typing-text/TypingText"
import bgImg from "../../assets/img/bg-img.gif"
import { SiYoutubekids, SiYoutubeshorts } from "react-icons/si"
import { RiLoginBoxLine } from "react-icons/ri"
import { GiLaurelCrown } from "react-icons/gi"
import { useSelector } from "react-redux"
import type { IState } from "../../interfaces/IState"
import personaVid from "../../assets/vid/vid-7.mp4"
import cashVid from "../../assets/vid/vid-2.mp4"
import editVid from "../../assets/vid/vid-10.mp4"

function Cta() {
  const {sidebarOption} = useSelector((state:IState)=>state.sidebar)

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

        {
          sidebarOption === "challenges" && <div className="cta__video-section">
          <div className="cta__video-wrapper">
            <video className="cta__bg-vid" src={editVid} autoPlay loop/>
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small">©2025 | <span>Terms & Conditions</span></p>
                <p className="cta__text--headline">Publica el Próximo  <br />Gran Desafio</p>
                <p className="cta__text--description">Plantea el Concepto y lo haremos realidad. Tus ideas más locas, transformadas en videos reales 😮</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Solicita un desafio</p>
                  <p className="cta__btn--secondary"><MdOutlineWorkHistory />Unete a los Promotores</p>
                </div>
                <div className="cta__text--dynamic"><TypingText texts={motivationalPhrases} /></div>
              </div>
            }
          </div>
        </div>
        }

        {
          sidebarOption === "jobs" && <div className="cta__video-section">
          <div className="cta__video-wrapper">
            <video className="cta__bg-vid" src={cashVid} autoPlay loop/>
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small">©2025 | <span>Terms & Conditions</span></p>
                <p className="cta__text--headline">Completa Trabajos  <br /> Patrocinados</p>
                <p className="cta__text--description">Produce los videos de desafíos solicitados y compite por obtener sus recompensas.</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Patrocina un desafio</p>
                  <p className="cta__btn--secondary"><MdOutlineWorkHistory />Unirse a los Promotores</p>
                </div>
                <div className="cta__text--dynamic"><TypingText texts={motivationalPhrases} /></div>
              </div>
            }
          </div>
        </div>
        }

        {
          sidebarOption === "promoters" && <div className="cta__video-section">
          <div className="cta__video-wrapper">
            <video className="cta__bg-vid" src={personaVid} autoPlay loop/>
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small">©2025 | <span>Terms & Conditions</span></p>
                <p className="cta__text--headline">Impulsa la Creacion <br />De Contenido</p>
                <p className="cta__text--description">Da visibilidad a desafíos sin patrocinador, impulsa la produccion de videos y promociona suscripciones</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Promociona Y Gana</p>
                  <p className="cta__btn--secondary"><MdOutlineWorkHistory />Unirse a los Promotores</p>
                </div>
                <div className="cta__text--dynamic"><TypingText texts={motivationalPhrases} /></div>
              </div>
            }
          </div>
        </div>
        }

        <div className="cta__sidebar">
          <SiYoutubeshorts className="cta__sidebar--icon" />
          <h3 className="cta__sidebar--title">
            ¿Qué puedes hacer?
          </h3>
          <ul className="cta__sidebar--list">
            <li> <p className={sidebarOption === "challenges" ? "cta__sidebar--selected" : "cta__sidebar--unselected"}><span>Solicitar o Financiar</span> desafíos interesantes.</p> </li>
            <li><p className={sidebarOption === "jobs" ? "cta__sidebar--selected" : "cta__sidebar--unselected"}><span>Completar</span> los <span>trabajos</span> habilitados y obtener recompensas.</p></li>
            <li><p className={sidebarOption === "promoters" ? "cta__sidebar--selected" : "cta__sidebar--unselected"}><span>Unirte</span> a los promotores.</p></li>
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
