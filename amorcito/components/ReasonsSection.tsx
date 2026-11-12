
"use client";

import { useState } from "react";

const reasons = [
  "Porque tu forma de ser me encanta.",
  "Porque tienes una manera muy tuya de hacerme reír.",
  "Porque te atreviste a hablarme primero.",
  "Porque aquel día decidiste acercarte a mí.",
  "Porque contigo hasta una conversación sencilla se vuelve especial.",
  "Porque me gusta escuchar tus ocurrencias.",
  "Porque tienes un sentido del humor que me alegra los días.",
  "Porque me encanta descubrir cosas nuevas de ti.",
  "Porque me haces sonreír sin siquiera intentarlo.",
  "Porque tus palabras bonitas se quedan conmigo.",
  "Porque me encanta cuando me dices mi cielo.",
  "Porque también me gusta que me digas muñeca.",
  "Porque recuerdo nuestro primer beso con una sonrisa.",
  "Porque me acompañaste hasta mi casa.",
  "Porque nuestra historia comenzó de una forma inesperada.",
  "Porque aquella llamada siempre tendrá un lugar especial.",
  "Porque me preguntaste si quería ser tu novia.",
  "Porque contigo tengo recuerdos que quiero conservar.",
  "Porque me gusta pasar tiempo a tu lado.",
  "Porque me haces sentir querida.",
  "Porque me gusta cómo eres cuando simplemente eres tú.",
  "Porque quiero conocer cada parte de tu mundo.",
  "Porque me emociona pensar en todo lo que nos falta vivir.",
  "Porque quiero celebrar tus logros y verte cumplir tus sueños.",
  "Porque quiero acompañarte también en los días difíciles.",
  "Porque me gusta aprender de ti.",
  "Porque haces que los pequeños detalles tengan significado.",
  "Porque agradezco que nuestros caminos se hayan cruzado.",
  "Porque volvería a elegir aquella primera conversación.",
  "Y porque, entre tantas personas y tantas estrellas, me alegra que seas tú.",
];

export default function ReasonsSection() {
  const [revealed, setRevealed] = useState<number[]>([]);

  function revealReason(index: number) {
    setRevealed((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  }

  return (
    <section className="reasons-section" id="razones">
      <div className="reasons-heading">
        <span className="section-label">30 DÍAS · 30 RAZONES</span>
        <h2>Treinta razones para amarte</h2>
        <p>
          Aunque podría escribir muchísimas más, quise guardar treinta
          para celebrar nuestro primer mes. Toca cada estrellita para
          descubrir una.
        </p>
      </div>

      <div className="reasons-counter">
        <span>{revealed.length}</span> de 30 razones descubiertas ♡
      </div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => {
          const isRevealed = revealed.includes(index);

          return (
            <button
              key={index}
              className={`reason-card ${isRevealed ? "revealed" : ""}`}
              onClick={() => revealReason(index)}
              aria-expanded={isRevealed}
            >
              {isRevealed ? (
                <>
                  <span className="reason-number">
                    RAZÓN {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="reason-text">{reason}</span>
                  <span className="reason-heart">♡</span>
                </>
              ) : (
                <>
                  <span className="reason-star">✧</span>
                  <span className="reason-hidden-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="reason-tap">Tócame</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {revealed.length === 30 && (
        <div className="all-reasons-message">
          <span>✦</span>
          <h3>¡Descubriste las 30 razones!</h3>
          <p>
            Y todavía me faltan muchísimas más. Feliz primer mes,
            mi amor. ♡
          </p>
        </div>
      )}

      <p className="reasons-footer">
        No son solamente 30 razones. Son 30 maneras de recordarte cuánto te amo.
      </p>
    </section>
  );
}
