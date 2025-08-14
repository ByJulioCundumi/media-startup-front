import React from "react";
import "./AboutContact.scss";

const AboutContact: React.FC = () => {
  return (
    <section className="about-contact">
      <h2 className="about-contact__title">Contacto</h2>

      <p className="about-contact__intro">
        ¿Tienes preguntas, inquietudes legales, deseas colaborar o simplemente quieres hacernos llegar tus ideas?
        En <strong>ChallengeMarket</strong> valoramos la comunicación transparente, el acompañamiento oportuno
        y el crecimiento colectivo.
      </p>

      <p className="about-contact__details">
        Te invitamos a contactarnos a través de los siguientes canales especializados según el tipo de consulta:
      </p>

      <ul className="about-contact__list">
        <li>
          📜 <strong>Asuntos Legales:</strong>{" "}
          <a href="mailto:legal@challengemarket.com">legal@challengemarket.com</a><br />
          Para consultas jurídicas, términos de uso, privacidad, derechos de autor o cumplimiento normativo.
        </li>
        <li>
          🛠️ <strong>Soporte Técnico y Usuarios:</strong>{" "}
          <a href="mailto:soporte@challengemarket.com">soporte@challengemarket.com</a><br />
          Para reportes de errores, problemas con tu cuenta, pagos o funcionalidad de la plataforma.
        </li>
        <li>
          🤝 <strong>Colaboraciones y Alianzas:</strong>{" "}
          <a href="mailto:colabora@challengemarket.com">colabora@challengemarket.com</a><br />
          Si deseas aportar a nuestro crecimiento como partner, inversor, creador o aliado estratégico.
        </li>
      </ul>

      <p className="about-contact__closing">
        Nos comprometemos a responder en un plazo razonable y con la mayor disposición posible.
        Gracias por confiar en nosotros y por formar parte del cambio hacia una economía creativa, justa y descentralizada.
      </p>
    </section>
  );
};

export default AboutContact;