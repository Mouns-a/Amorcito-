
export default function CapsuleInvitation() {
  return (
    <section className="capsule-section" id="capsula">
      <div className="capsule-heading">
        <span className="section-label">
          UN MENSAJE PARA NUESTRO FUTURO
        </span>

        <div className="capsule-symbol">✧</div>

        <h2>Nuestra cápsula del tiempo</h2>

        <p>
          Dos corazones, dos mensajes y una promesa:
          volver aquí dentro de un mes para descubrir
          lo que hoy queremos decirnos.
        </p>
      </div>

      <div className="capsule-date">
        <span>FECHA PARA ABRIR</span>
        <strong>12 · 12 · 2026</strong>
        <small>Nuestro segundo mes juntos ♡</small>
      </div>

      <div className="capsule-card">
        <div className="capsule-illustration">
          <span className="capsule-orbit orbit-one" />
          <span className="capsule-orbit orbit-two" />
          <span className="capsule-icon">✉</span>
          <span className="capsule-small-star star-one">✦</span>
          <span className="capsule-small-star star-two">✧</span>
          <span className="capsule-small-star star-three">·</span>
        </div>

        <span className="capsule-status">
          ✦ UNA PROMESA PARA DESPUÉS ✦
        </span>

        <h3>Querido yo del futuro...</h3>

        <p>
          Quiero que cada uno escriba lo que siente hoy,
          lo que desea recordar y todo aquello que espera
          vivir junto al otro.
        </p>

        <p>
          Nuestras cartas permanecerán guardadas hasta
          el 12 de diciembre. Ese día podremos descubrir
          lo que nuestro corazón quiso decir hace un mes.
        </p>

        <div className="capsule-seal">
          DOS CARTAS · UN RECUERDO · NOSOTROS ♡
        </div>

        <p className="capsule-closing">
          No importa cuánto cambien las cosas,
          siempre será bonito recordar cómo empezó todo.
        </p>

        <a href="/capsula" className="capsule-button">
          Abrir nuestra cápsula ♡
        </a>
      </div>

      <p className="capsule-footer">
        “Ojalá que cuando volvamos a leer esto,
        tengamos muchas historias nuevas que contar”.
      </p>
    </section>
  );
}
