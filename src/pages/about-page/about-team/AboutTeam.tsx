import React from "react";
import "./AboutTeam.scss";

const AboutTeam: React.FC = () => {
  return (
    <section className="about-team">
      <h2 className="about-team__title">Conoce al Creador</h2>

      <p className="about-team__intro">
        ChallengeMarket nace de la visión de un desarrollador colombiano apasionado por la tecnología,
        la economía digital y el impacto social. Con formación como Tecnólogo en Desarrollo de Software
        y experiencia práctica en desarrollo web, diseño de interfaces modernas, arquitectura SaaS e
        integración de pasarelas de pago como PayPal, su objetivo ha sido construir algo más que una app: 
        una herramienta de cambio real.
      </p>

      <p>
        Este proyecto ha sido desarrollado de forma íntegra por una sola persona, fusionando talento técnico
        con un fuerte compromiso ético y social. Su convicción es que la tecnología debe ser un puente hacia
        oportunidades reales para todos, no un privilegio de unos pocos.
      </p>

      <div className="about-team__highlight">
        <strong>ChallengeMarket</strong> es, hoy, un esfuerzo unipersonal, pero su hoja de ruta contempla la 
        incorporación de un equipo multidisciplinario en áreas clave como:
        <ul className="about-team__list">
          <li>Atención y soporte al usuario</li>
          <li>Marketing digital y crecimiento estratégico</li>
          <li>Seguridad informática y protección de datos</li>
          <li>Asesoría legal y cumplimiento normativo</li>
        </ul>
      </div>

      <p className="about-team__vision">
        La meta es consolidar una organización ética, inclusiva y de alto rendimiento, con personas que compartan
        la misión de democratizar el acceso a ingresos digitales a través de desafíos creativos, colaborativos y
        transparentes.
      </p>
    </section>
  );
};

export default AboutTeam;