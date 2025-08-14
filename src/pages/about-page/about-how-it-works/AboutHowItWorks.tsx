import React from "react";
import "./AboutHowItWorks.scss";

const AboutHowItWorks: React.FC = () => {
  return (
    <section className="about-how-it-works">
      <h2 className="about-how-it-works__title">¿Cómo Funciona?</h2>

      <p className="about-how-it-works__intro">
        ChallengeMarket convierte tu voluntad de aceptar un desafío en una oportunidad real de ingresos. La plataforma ha sido diseñada para que cualquier persona, sin intermediarios ni complicaciones, pueda lanzar su propuesta, recibir patrocinios y generar impacto desde su autenticidad.
      </p>

      <ol className="about-how-it-works__steps">
        <li>
          <strong>1. Publicación del Desafío:</strong> 
          El usuario crea una propuesta indicando la actividad que está dispuesto a realizar, el monto económico requerido y si desea hacerla pública o solo accesible a sus suscriptores.
        </li>

        <li>
          <strong>2. Patrocinio Directo:</strong> 
          Cualquier usuario puede patrocinar un reto si le interesa la propuesta. El patrocinador asume el valor total, que incluye el monto solicitado, la comisión de PayPal y la comisión de ChallengeMarket.
        </li>

        <li>
          <strong>3. Afiliación con Comisión:</strong> 
          Los usuarios pueden afiliarse a una propuesta y promocionarla. Si logran conseguir un patrocinador, recibirán la comisión establecida por el autor (mínimo 5%), gracias a nuestro sistema de cookies de 30 días.
        </li>

        <li>
          <strong>4. Ejecución y Confirmación:</strong> 
          Una vez que el autor realiza el desafío y el patrocinador confirma su satisfacción, la transacción se finaliza. PayPal distribuye automáticamente los fondos entre autor, afiliado (si aplica) y la plataforma, sin que ChallengeMarket retenga los fondos directamente.
        </li>

        <li>
          <strong>5. Retos Abiertos o Dirigidos:</strong> 
          Además, los usuarios pueden lanzar desafíos colectivos abiertos (tipo “reto viral”) o enviar desafíos personalizados a personas específicas, incentivando una conexión directa entre creadores y patrocinadores.
        </li>
      </ol>

      <div className="about-how-it-works__summary">
        Cada paso ha sido cuidadosamente diseñado para garantizar transparencia, seguridad y una experiencia enriquecedora tanto para el creador como para el patrocinador.
      </div>
    </section>
  );
};

export default AboutHowItWorks;