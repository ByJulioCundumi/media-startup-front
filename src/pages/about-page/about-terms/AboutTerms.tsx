import React from "react";
import "./AboutTerms.scss";

const AboutTerms: React.FC = () => {
  return (
    <section className="about-terms">
      <h2 className="about-terms__title">Aspectos Legales</h2>

      <p className="about-terms__intro">
        ChallengeMarket opera bajo un modelo transparente, cumpliendo con los principios jurídicos y
        comerciales requeridos para garantizar una experiencia digital segura, ética y conforme a la
        legislación vigente.
      </p>

      <ul className="about-terms__list">
        <li>
          <strong>🔹 Nombre Comercial:</strong> ChallengeMarket
        </li>
        <li>
          <strong>🔹 Empresa:</strong> ChallengeMarket S.A.S (en proceso de formalización legal)
        </li>
        <li>
          <strong>🔹 Ubicación Legal:</strong> Colombia
        </li>
        <li>
          <strong>🔹 NIT Provisional:</strong> 123456789-0
        </li>
        <li>
          <strong>🔹 Modelo de Negocio:</strong> Plataforma SaaS basada en distribución automatizada
          de pagos mediante <strong>PayPal</strong>.
        </li>
        <li>
          <strong>🔹 Documentación Legal:</strong> Incluye Términos y Condiciones, Política de
          Privacidad y Política de Cookies, adaptadas a las normativas colombianas e internacionales
          como el <strong>GDPR</strong> y las políticas de uso de <strong>PayPal</strong>.
        </li>
        <li>
          <strong>🔹 Responsabilidad Legal:</strong> ChallengeMarket actúa como intermediario
          tecnológico. No valida ni avala los contenidos publicados por los usuarios, pero cuenta con
          mecanismos robustos de control, revisión y sanción ante comportamientos indebidos o
          fraudulentos.
        </li>
      </ul>

      <p className="about-terms__disclaimer">
        *Este proyecto se encuentra en fase preoperativa. Todos los elementos legales se consolidarán
        durante la formalización legal ante Cámara de Comercio y DIAN, cumpliendo con los requisitos
        para operar como empresa SaaS dentro y fuera del territorio colombiano.
      </p>
    </section>
  );
};

export default AboutTerms;