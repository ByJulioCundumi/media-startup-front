import "./cta.scss"
import { MdOutlineWorkHistory } from "react-icons/md"
import { FaBolt } from "react-icons/fa6"
import TypingText from "../typing-text/TypingText"
import { RiBriefcaseLine, RiLoginBoxLine, RiUserAddLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import type { IState } from "../../interfaces/IState"
import bgImg from "../../assets/img/bg-img.gif"
import { setSidebar } from "../../reducers/sidebarSlice"
import { GoLightBulb } from "react-icons/go"

function Cta() {
  const dispatch = useDispatch()
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
            <img className="cta__bg-img" src={bgImg}/>
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small"><span>©2025 | Terms & Conditions</span></p>
                <p className="cta__text--headline">Solicita el Próximo  <br />Gran Desafio</p>
                <p className="cta__text--description">Plantea el Concepto y lo haremos realidad. Tus ideas más locas, transformadas en videos reales</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Solicitar desafio</p>
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
            <img className="cta__bg-img" src={bgImg}/>
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small"><span>©2025 | Terms & Conditions</span></p>
                <p className="cta__text--headline">Completa Trabajos  <br /> Habilitados</p>
                <p className="cta__text--description">Produce y Entrega videos de desafíos solicitados y compite por obtener sus recompensas.</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Solicitar desafio</p>
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
            <img className="cta__bg-img" src={bgImg}/>
          </div>
          <div className="cta__overlay">
            {
              true && <div className="cta__text-group">
                <p className="cta__text--small"><span>©2025 | Terms & Conditions</span></p>
                <p className="cta__text--headline">Impulsa la Creacion <br />De Contenido</p>
                <p className="cta__text--description">Da visibilidad a desafíos sin patrocinador, impulsa la produccion de sus videos y promociona membresias</p>
                <div className="cta__actions">
                  <p className="cta__btn--primary"> <FaBolt/> Comparte Y Gana</p>
                  <p className="cta__btn--secondary"><MdOutlineWorkHistory />Unirse a los Promotores</p>
                </div>
                <div className="cta__text--dynamic"><TypingText texts={motivationalPhrases} /></div>
              </div>
            }
          </div>
        </div>
        }

        <div className="cta__sidebar">
          <h3 className="cta__sidebar--title">
            ¿Qué puedes hacer?
          </h3>

          <div className="cta__sidebar--cards">
            <div 
              className={`cta__sidebar--card ${sidebarOption === "challenges" ? "selected" : ""}`}
              onClick={() => dispatch(setSidebar("challenges"))}
            >
              <div className="card__icon"><GoLightBulb /></div>
              <div className="card__content">
                <h4>Solicitar o financiar</h4>
                <p>Impulsa desafios divertidos o plantea nuevos por hacer.</p>
              </div>
            </div>

            <div 
              className={`cta__sidebar--card ${sidebarOption === "jobs" ? "selected" : ""}`}
              onClick={() => dispatch(setSidebar("jobs"))}
            >
              <div className="card__icon"><RiBriefcaseLine /></div>
              <div className="card__content">
                <h4>Completar trabajos</h4>
                <p>Realiza trabajos habilitadas y recibe recompensas.</p>
              </div>
            </div>

            <div 
              className={`cta__sidebar--card ${sidebarOption === "promoters" ? "selected" : ""}`}
              onClick={() => dispatch(setSidebar("promoters"))}
            >
              <div className="card__icon"><RiUserAddLine /></div>
              <div className="card__content">
                <h4>Unirte a los promotores</h4>
                <p>Apoya retos sin patrocinio, difunde contenido y gana recompensas.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Cta
