
"use client";

import { useEffect, useState, type FormEvent } from "react";

const STORAGE_KEY = "our-universe-future-capsule";
const unlockDate = new Date(2027, 10, 11, 0, 0, 0);

type CapsuleNotes = {
  her: string;
  him: string;
};

export default function FutureCapsule() {
  const [herNote, setHerNote] = useState("");
  const [hisNote, setHisNote] = useState("");
  const [herDraft, setHerDraft] = useState("");
  const [hisDraft, setHisDraft] = useState("");
  const [step, setStep] = useState(1);
  const [opened, setOpened] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        const notes: CapsuleNotes = JSON.parse(stored);
        setHerNote(notes.her || "");
        setHisNote(notes.him || "");

        if (notes.her && notes.him) {
          setStep(3);
        } else if (notes.her) {
          setStep(2);
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    setUnlocked(new Date() >= unlockDate);
    setHasLoaded(true);
  }, []);

  const saveHerNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!herDraft.trim()) return;

    const notes = { her: herDraft.trim(), him: "" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    setHerNote(notes.her);
    setStep(2);
  };

  const saveHisNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hisDraft.trim()) return;

    const notes = { her: herNote, him: hisDraft.trim() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    setHisNote(notes.him);
    setStep(3);
  };

  const openCapsule = () => {
    if (new Date() >= unlockDate && herNote && hisNote) {
      setUnlocked(true);
      setOpened(true);
    }
  };

  if (!hasLoaded) return null;

  return (
    <section className="capsule-section" id="capsula">
      <div className="capsule-heading">
        <span className="section-label">UN MENSAJE PARA EL FUTURO</span>
        <div className="capsule-symbol">✧</div>
        <h2>Nuestra cápsula del tiempo</h2>
        <p>
          Dos corazones, dos mensajes y un mismo deseo: volver aquí dentro de
          un año y recordar lo bonito que era comenzar esta historia.
        </p>
      </div>

      <div className="capsule-date">
        <span>FECHA PARA ABRIR</span>
        <strong>11 · 11 · 2027</strong>
        <small>Nuestro segundo aniversario de mes ♡</small>
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

        {opened ? (
          <>
            <span className="capsule-status">✦ RECUERDOS DEL PASADO ✦</span>
            <h3>Un año después...</h3>
            <div className="capsule-letter">
              <span>DE TI, PARA ÉL</span>
              <p>{herNote}</p>
            </div>
            <div className="capsule-letter">
              <span>DE ÉL, PARA TI</span>
              <p>{hisNote}</p>
            </div>
            <p className="capsule-closing">
              Qué bonito que, entre tantas posibilidades, sigan eligiéndose. ♡
            </p>
          </>
        ) : step === 1 ? (
          <>
            <span className="capsule-status">PRIMER TURNO · TÚ</span>
            <h3>Una carta para tu futuro</h3>
            <p>
              Escribe lo que te gustaría recordar, lo que sientes hoy y lo que
              sueñas vivir con él. Tu mensaje quedará oculto.
            </p>
            <form className="capsule-form" onSubmit={saveHerNote}>
              <label htmlFor="her-note">Tu mensaje secreto</label>
              <textarea
                id="her-note"
                value={herDraft}
                onChange={(event) => setHerDraft(event.target.value)}
                placeholder="Mi amor, si estamos leyendo esto un año después..."
                required
                rows={6}
              />
              <button type="submit" className="capsule-button">
                Guardar mi carta ♡
              </button>
            </form>
          </>
        ) : step === 2 ? (
          <>
            <span className="capsule-status">SEGUNDO TURNO · ÉL</span>
            <h3>Ahora es su turno</h3>
            <p>
              Pásale el dispositivo para que escriba su propio mensaje. Tu
              carta ya está guardada y no se mostrará.
            </p>
            <form className="capsule-form" onSubmit={saveHisNote}>
              <label htmlFor="his-note">Su mensaje secreto</label>
              <textarea
                id="his-note"
                value={hisDraft}
                onChange={(event) => setHisDraft(event.target.value)}
                placeholder="Hola, amor. Esto es lo que quiero recordar de nosotros..."
                required
                rows={6}
              />
              <button type="submit" className="capsule-button">
                Sellar su carta ♡
              </button>
            </form>
          </>
        ) : unlocked ? (
          <>
            <span className="capsule-status">✦ HA LLEGADO EL DÍA ✦</span>
            <h3>Sus palabras los esperan</h3>
            <p>
              Ha pasado un mes. ¿Listos para descubrir lo que se escribieron?
            </p>
            <button
              type="button"
              className="capsule-button"
              onClick={openCapsule}
            >
              Abrir nuestra cápsula ♡
            </button>
          </>
        ) : (
          <>
            <span className="capsule-status">✦ CÁPSULA SELLADA ✦</span>
            <h3>Sus palabras están a salvo</h3>
            <p>
              Los dos mensajes están guardados. Ahora toca vivir muchas
              historias más antes de volver a leerlos.
            </p>
            <div className="capsule-seal">SELLADO CON AMOR ♡</div>
          </>
        )}
      </div>

      <p className="capsule-footer">
        “Ojalá que cuando volvamos a leer esto, tengamos mil historias nuevas
        que contar”.
      </p>
    </section>
  );
}
