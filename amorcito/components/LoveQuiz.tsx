
"use client";

import { useState } from "react";

const questions = [
  {
    question: "¿Dónde comenzó nuestra historia?",
    options: [
      "En el parque Naucalli",
      "Saliendo de una exposición con Chapa",
      "En una llamada",
      "En una cafetería",
    ],
    answer: 1,
    explanation: "¡Ahí fue cuando te acercaste a hablarme por primera vez! ♡",
  },
  {
    question: "¿Quién dio el primer paso?",
    options: [
      "Yo",
      "Los dos al mismo tiempo",
      "Tú, mi amor",
      "El destino, jajaja",
    ],
    answer: 2,
    explanation: "Tú fuiste quien se animó a hablarme primero. Y qué bueno que lo hiciste.",
  },
  {
    question: "¿Cómo fue nuestro primer beso?",
    options: [
      "Planeado desde el principio",
      "Después de una llamada",
      "En el parque",
      "Accidental, cuando me acompañaste a casa",
    ],
    answer: 3,
    explanation: "Fue inesperado, pero se convirtió en uno de mis recuerdos favoritos.",
  },
  {
    question: "¿Dónde pasamos el día antes de ser novios?",
    options: [
      "En el parque Naucalli",
      "En el centro",
      "En el cine",
      "En mi casa",
    ],
    answer: 0,
    explanation: "Ese día hablamos muchísimo y por la noche llegó nuestra llamada especial.",
  },
  {
    question: "¿Qué me preguntaste aquella noche?",
    options: [
      "¿Quieres salir conmigo mañana?",
      "¿Quieres ser mi novia?",
      "¿Me extrañaste?",
      "¿Vamos por algo de comer?",
    ],
    answer: 1,
    explanation: "Y yo respondí: ¡por supuesto que sí! ♡",
  },
];

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function checkAnswer() {
    if (selected === null) return;

    if (selected === question.answer) {
      setScore((previous) => previous + 1);
    }

    if (current + 1 === questions.length) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-heading">
        <span className="section-label">UN PEQUEÑO RETO PARA TI</span>
        <h2>¿Cuánto recuerdas de nosotros?</h2>
        <p>
          A ver, mi amor... vamos a comprobar cuánto recuerdas de nuestra
          pequeña historia.
        </p>
      </div>

      <div className="quiz-card">
        {!finished ? (
          <>
            <div className="quiz-progress">
              <span>Pregunta {current + 1} de {questions.length}</span>
              <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
            </div>

            <div className="quiz-progress-track">
              <div
                className="quiz-progress-fill"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <span className="quiz-sparkle">✧</span>
            <h3>{question.question}</h3>

            <div className="quiz-options">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  className={`quiz-option ${
                    selected === index ? "selected" : ""
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option}
                </button>
              ))}
            </div>

            <button
              className="quiz-next-button"
              disabled={selected === null}
              onClick={checkAnswer}
            >
              {current === questions.length - 1
                ? "Ver resultado ♡"
                : "Siguiente pregunta →"}
            </button>
          </>
        ) : (
          <div className="quiz-result">
            <span className="result-star">✦</span>
            <span className="section-label">NUESTRA HISTORIA</span>
            <h3>¡Terminaste, mi amor!</h3>
            <div className="quiz-score">
              {score}<span> / {questions.length}</span>
            </div>
            <p>
              {score === 5
                ? "¡Te sabes nuestra historia perfectamente! Aunque espero que sigamos creando muchísimos recuerdos más."
                : score >= 3
                ? "¡Muy bien! Pero todavía nos quedan muchos momentos por vivir y recordar juntos."
                : "Jajaja, tendremos que volver a recordar nuestra historia. Lo importante es que sigamos escribiéndola juntos."}
            </p>
            <p className="result-love">
              Te amo, mi preciosote. Gracias por ser parte de mi historia. ♡
            </p>
            <button className="quiz-next-button" onClick={restartQuiz}>
              Volver a jugar ↻
            </button>
          </div>
        )}
      </div>

      <p className="quiz-footer">Cada recuerdo contigo tiene un lugar especial.</p>
    </section>
  );
}
