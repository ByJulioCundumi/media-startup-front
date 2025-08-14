import React from "react";
import "./AboutVision.scss";

const AboutVision: React.FC = () => {
  return (
    <section className="about-vision">
      <h2 className="about-vision__title">Nuestra Visión</h2>

      <p className="about-vision__intro">
        Aspiramos a ser la plataforma líder en Latinoamérica para la promoción de retos creativos patrocinados, afiliación transparente y monetización ética de contenido original.
      </p>

      <p>
        Nos proyectamos como un <strong>referente global</strong> de innovación en el modelo SaaS enfocado en economía colaborativa, donde usuarios de todas partes puedan expresar su autenticidad, impulsar movimientos sociales, artísticos, deportivos o personales a través de videos que inspiran, entretienen y generan ingresos sostenibles.
      </p>

      <div className="about-vision__callout">
        Visualizamos un entorno sin intermediarios abusivos, donde la tecnología sea una extensión de la libertad creativa y financiera de las personas.
      </div>

      <p>
        Creemos que el futuro de las plataformas digitales debe incluir: transparencia, descentralización de oportunidades, equidad en los ingresos y protección del usuario como eje central. Por ello, desarrollamos ChallengeMarket como una empresa legalmente constituida en Colombia, con fundamentos éticos que priorizan al creador sobre el algoritmo.
      </p>

      <p className="about-vision__closing">
        Queremos impactar millones de vidas a través de una comunidad basada en respeto, mérito, colaboración y creatividad. <em>Donde cada reto cumplido, sea una victoria compartida.</em>
      </p>
    </section>
  );
};

export default AboutVision;