
"use client";

import { useState } from "react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="letter-section" id="carta">
      <div className="letter-heading">
        <span className="section-label">UN PEDACITO DE MI CORAZÓN</span>
        <h2>Hay algo que quiero decirte...</h2>
        <p>
          Algunas cosas son demasiado bonitas para quedarse solamente en
          mis pensamientos.
        </p>
      </div>

      <div className={`envelope-container ${isOpen ? "opened" : ""}`}>
        <div className="envelope">
          <div className="envelope-back" />
          <div className="letter-paper">
            <div className="letter-content">
              <span className="letter-date">11 · 11 · 2026</span>

              <h3>Para mi amorcito, mi cielo, mi mundo:</h3>

              <p>
                No sé exactamente por dónde empezar, porque cuando se trata
                de ti siento que tengo tantas cosas que decir que ninguna
                palabra parece suficiente. Pero hoy quiero intentarlo,
                porque eres alguien muy importante para mí y quiero que
                conozcas un poquito más de todo lo que llevo dentro.
              </p>

              <p>
                A veces recuerdo cómo comenzó todo y me da mucha ternura
                pensar que nuestra historia empezó de una manera tan
                inesperada. Recuerdo que saliendo de aquella exposición con
                Chapa te acercaste a hablarme. Me sacaste un poquito de onda,
                jajaja, pero desde ese momento pensé que eras una muy buena
                persona. Tú diste el primer paso y, aunque en ese momento
                ninguno de los dos sabía lo que podía llegar a pasar, hoy
                agradezco muchísimo que te hayas acercado a mí.
              </p>

              <p>
                También recuerdo nuestro primer beso. Después de ir a comer,
                me acompañaste hasta mi casa y pasó aquello que no estaba
                planeado. Fue accidental, sí, pero terminó siendo uno de
                esos recuerdos que guardo con muchísimo cariño. Me gusta
                pensar en todos esos pequeños momentos que, sin darnos
                cuenta, nos fueron acercando.
              </p>

              <p>
                Y cómo olvidar el día en Naucalli. Pasamos tiempo juntos,
                hablamos de tantas cosas y después, por la noche, llegó esa
                llamada que siempre voy a recordar. Me dijiste que me
                querías y me preguntaste si quería ser tu novia. Y claro
                que quería. Mi respuesta fue un por supuesto que sí,
                porque para ese momento ya había algo en ti que me hacía
                querer descubrir qué podíamos construir juntos.
              </p>

              <p>
                Quiero que sepas que me encantas. Me gusta tu forma de ser,
                tus ocurrencias, tu sentido del humor, la manera en que me
                haces reír y hasta esas pequeñas cosas que quizá tú no
                notas, pero que yo voy descubriendo y guardando con mucho
                cariño. Me gusta escucharte, pasar tiempo contigo,
                conocerte y descubrir cada día algo nuevo de ti.
              </p>

              <p>
                Me encanta cuando me dices «mi vida», «mi cielo», «mi amor»
                o «muñeca». Tal vez para ti sean palabras que dices con
                naturalidad, pero no sabes lo bonito que se siente
                escucharlas de ti. Me haces sentir querida y me sacas
                sonrisas incluso cuando no te das cuenta.
              </p>

              <p>
                También quiero que sepas que no doy por sentado tenerte en
                mi vida. Sé que apenas estamos comenzando, que todavía nos
                quedan muchísimas cosas por conocer y vivir, pero eso es
                precisamente lo que me emociona. Quiero seguir descubriendo
                quién eres, escuchar tus historias, acompañarte en tus
                días buenos y en los no tan buenos, celebrar tus logros y
                construir recuerdos que algún día podamos mirar hacia
                atrás y recordar con una sonrisa.
              </p>

              <p>
                No espero que todo sea perfecto, porque sé que ninguna
                historia lo es. Lo que sí quiero es que podamos hablarnos
                con sinceridad, cuidarnos, respetarnos, elegirnos y seguir
                construyendo algo bonito, sin dejar de ser nosotros mismos.
              </p>

              <p>
                Gracias por acercarte a mí aquel día. Gracias por ese primer
                beso, por aquella llamada, por preguntarme si quería ser tu
                novia y por cada detalle que desde entonces me ha hecho
                sonreír. Si pudiera volver a ese primer momento en el que
                me hablaste, volvería a darte la oportunidad de acercarte
                a mí, sin pensarlo dos veces.
              </p>

              <p>
                Este es apenas nuestro primer mes, pero quería que tuvieras
                algo que te recordara lo especial que eres para mí. No sé
                cuántas páginas necesitaría para escribir todo lo que
                siento, pero sí sé que quiero seguir encontrando motivos
                para escribirte muchas más.
              </p>

              <p className="letter-final">
                Te amo muchísimo, mi preciosote. Gracias por ser tú y por
                formar parte de mi vida. Qué bonito es coincidir contigo.
              </p>

              <div className="letter-signature">
                Con todo mi cariño,
                <strong>Tu niña ♡</strong>
              </div>
            </div>
          </div>
          <div className="envelope-front" />
          <div className="envelope-flap" />
          <div className="envelope-heart">♡</div>
        </div>

        <button
          className="letter-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Cerrar mi carta ♡" : "Abrir mi carta ♡"}
        </button>
      </div>

      <p className="letter-footer">
        Escrita con amor, para alguien que se ha vuelto mi lugar bonito.
      </p>
    </section>
  );
}
