import React from "react";
import "./AboutMission.scss";

const AboutMission: React.FC = () => {
  return (
    <section className="about-mission">
      <h2 className="about-mission__title">Nuestra Misión</h2>

      <p className="about-mission__intro">
        En <strong>ChallengeMarket</strong> creemos en el poder transformador de las ideas, en la libertad de crear, y en la posibilidad de convertir la pasión en un modelo de vida sostenible.
        Nuestra misión es construir una economía digital colaborativa, transparente y accesible, donde cada desafío se convierta en una oportunidad real.
      </p>

      <blockquote className="about-mission__quote">
        “Porque detrás de cada reto, hay una historia. Y detrás de cada historia, hay alguien dispuesto a cambiar su realidad.”
      </blockquote>

      <p>
        ChallengeMarket es una plataforma SaaS fundada y desarrollada en Colombia por un profesional en desarrollo de software, que ha consolidado esta solución digital con fundamentos éticos, legales y técnicos alineados con los estándares globales.
      </p>

      <div className="about-mission__callout about-mission__callout--blue">
        Facilitamos un entorno donde los usuarios pueden publicar propuestas de desafíos con valor económico, patrocinadas por otros usuarios interesados en verlas realizadas y publicadas en video.
      </div>

      <p>
        Cada propuesta puede incluir una <strong>comisión mínima del 5%</strong> para afiliados que promuevan la iniciativa, incentivando un ecosistema de colaboración e ingresos compartidos. Los flujos de pago se gestionan con <strong>PayPal</strong>, y los fondos se distribuyen automáticamente entre creador, afiliado y plataforma, sin que ChallengeMarket retenga valores.
      </p>

      <div className="about-mission__callout about-mission__callout--accent">
        La transparencia financiera es pilar de nuestro sistema: no administramos fondos de terceros y utilizamos pagos condicionados (<em>authorize/capture</em>) para proteger a patrocinadores y creadores.
      </div>

      <p>
        Promovemos también el desarrollo de contenido exclusivo bajo un sistema de suscripciones, con control sobre la privacidad del contenido por parte del autor, y un modelo de reseñas para evaluar tanto a patrocinadores como a realizadores, fomentando confianza y reputación.
      </p>

      <p>
        Nuestra política de afiliación utiliza cookies de 30 días conforme a regulaciones internacionales, asignando comisiones al último afiliado que refiera con éxito. Todo contenido está sujeto a políticas de uso, privacidad y mecanismos de reporte que garantizan una comunidad respetuosa, inclusiva y segura.
      </p>

      <p className="about-mission__closing">
        ChallengeMarket no es solo una plataforma: es un compromiso con la innovación, la libertad de expresión creativa, y la transformación económica de miles de personas. Aquí, <em>crear vale la pena</em>, compartir tiene valor y colaborar tiene recompensa.
      </p>
    </section>
  );
};

export default AboutMission;