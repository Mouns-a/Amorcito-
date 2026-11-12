
"use client";

import { useState } from "react";


const memories = [
  {
    id: 1,
    number: "01",
    title: "Donde comenzó todo",
    subtitle: "Una conversación inesperada",
    icon: "✉",
    date: "Nuestra primera conversación",
    description:
      "Recuerdo que saliendo de una exposición con Chapa me hablaste por primera vez. Me sacaste un poquito de onda, jajaja, pero pensé que eras una muy buena persona.",
    detail:
      "No sabía que aquella conversación sería el comienzo de algo tan bonito.",
  },
  {
    id: 2,
    number: "02",
    title: "Tú diste el primer paso",
    subtitle: "Te atreviste a hablarme",
    icon: "✧",
    date: "El inicio de nosotros",
    description:
      "Fuiste tú quien se animó a hablarme primero. Quizás para ti solamente fue iniciar una conversación, pero para mí terminó siendo el inicio de una historia muy especial.",
    detail:
      "Y qué bonito que hayas decidido acercarte a mí.",
  },
  {
    id: 3,
    number: "03",
    title: "Nuestro primer beso",
    subtitle: "Un accidente muy bonito",
    icon: "♡",
    date: "Después de ir a comer",
    description:
      "Me acompañaste hasta mi casa después de haber ido a comer y pasó algo que no estaba planeado: nuestro primer beso.",
    detail:
      "Fue accidental, jajaja, pero terminó convirtiéndose en uno de esos momentos que siempre voy a recordar con una sonrisa.",
  },
  {
    id: 4,
    number: "04",
    title: "El día que dijimos que sí",
    subtitle: "11 de octubre ♡",
    icon: "☾",
    date: "Domingo 11 de octubre",
    description:
      "Fuimos al parque Naucalli y hablamos de tantas cosas. Después, por la noche, hablamos por teléfono. Me dijiste que me querías y me preguntaste si quería ser tu novia.",
    detail:
      "Y mi respuesta fue: por supuesto que sí. No sabes lo bonito que fue comenzar oficialmente esta historia contigo.",
  },
  {
    id: 5,
    number: "05",
    title: "Palabras que guardo",
    subtitle: "Tus palabras favoritas",
    icon: "💌",
    date: "Cosas que me hacen sonreír",
    description:
      "Hay palabras tuyas que ya tienen un lugar especial en mí: «Te amo mucho, mi vida, mi cielo, mi amor, muñeca».",
    detail:
      "Quizás no imaginas lo mucho que me gusta escucharlas y saber que vienen de ti.",
  },
  {
    id: 6,
    number: "06",
    title: "Pequeños detalles",
    subtitle: "Lo bonito de conocerte",
    icon: "⭐",
    date: "Cada día contigo",
    description:
      "Me gustan tus ocurrencias, tu forma de hacerme reír, tus palabras bonitas y la manera en que haces especiales hasta los momentos más sencillos.",
    detail:
      "Me gusta conocerte cada día un poquito más y descubrir todas esas pequeñas cosas que te hacen ser tú.",
  },
];


export default function MemoriesSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const currentMemory = memories.find(
    (memory) => memory.id === selected
  );

  return (
    <section id="recuerdos" className="memories-section">

      <div className="memories-heading">
        <span className="section-label">
          ✧ NUESTRA PEQUEÑA HISTORIA ✧
        </span>

        <h2>
          Un universo de <span>recuerdos</span>
        </h2>

        <p>
          Si nuestra historia fuera una constelación,
          cada pequeño momento sería una estrella.
          Estas son algunas de mis favoritas.
        </p>
      </div>

      <div className="memory-grid">
        {memories.map((memory) => (
          <button
            key={memory.id}
            className={`memory-card ${
              selected === memory.id ? "selected" : ""
            }`}
            onClick={() => setSelected(memory.id)}
          >
            <span className="memory-number">
              {memory.number}
            </span>

            <span className="memory-icon">
              {memory.icon}
            </span>

            <h3>{memory.title}</h3>

            <p>{memory.subtitle}</p>

            <span className="memory-link">
              Descubrir recuerdo ✧
            </span>
          </button>
        ))}
      </div>

      {currentMemory && (
        <div
          className="memory-overlay"
          onClick={() => setSelected(null)}
        >
          <article
            className="memory-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-memory"
              onClick={() => setSelected(null)}
              aria-label="Cerrar recuerdo"
            >
              ×
            </button>

            <span className="modal-star">
              {currentMemory.icon}
            </span>

            <span className="section-label">
              RECUERDO {currentMemory.number}
            </span>

            <h3>{currentMemory.title}</h3>

            <p className="memory-date">
              {currentMemory.date}
            </p>

            <div className="modal-divider">✧ ♡ ✧</div>

            <p className="modal-description">
              {currentMemory.description}
            </p>

            <p className="modal-detail">
              {currentMemory.detail}
            </p>

            <button
              className="close-button"
              onClick={() => setSelected(null)}
            >
              Guardar en mi corazón ♡
            </button>
          </article>
        </div>
      )}

      <p className="memories-footer">
        Nuestra historia apenas comienza... ✨
      </p>

    </section>
  );
}
