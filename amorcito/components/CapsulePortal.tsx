
"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Capsule = {
  month_start: string;
  unlock_date: string;
  my_letter: string | null;
  partner_letter: string | null;
  is_unlocked: boolean;
};

type Author = "tu" | "el";

function getCurrentCapsuleDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;

  return `${year}-${month}-11`;
}

export default function CapsulePortal() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [author, setAuthor] = useState<Author | null>(null);
  const [letter, setLetter] = useState("");
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // VALIDAR CONTRASEÑA
  async function enterCapsule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.rpc(
      "verify_guest_password",
      { p_password: password }
    );

    if (error || data !== true) {
      setMessage("Esa no es nuestra palabra secreta. ♡");
      setLoading(false);
      return;
    }

    setAccessGranted(true);
    setAuthor(null);
    setLetter("");
    setCapsules([]);
    setMessage("");
    setLoading(false);
  }

  // ELEGIR QUIÉN ESCRIBE
  async function chooseAuthor(selected: Author) {
    setAuthor(selected);
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.rpc(
      "get_guest_capsules_by_password",
      {
        p_password: password,
        p_author: selected,
      }
    );

    if (error) {
      setMessage("No pudimos abrir tus cartas. Inténtalo nuevamente.");
      setAuthor(null);
      setLoading(false);
      return;
    }

    const records = (data ?? []) as Capsule[];
    setCapsules(records);

    const current = records.find(
      (capsule) => capsule.month_start === getCurrentCapsuleDate()
    );

    setLetter(current?.my_letter ?? "");
    setLoading(false);
  }

  // GUARDAR CARTA
  async function saveLetter() {
    if (!letter.trim() || !author) return;

    setSaving(true);
    setMessage("");

    const { error } = await supabase.rpc(
      "save_guest_letter_by_password",
      {
        p_password: password,
        p_author: author,
        p_letter: letter,
      }
    );

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Tu carta quedó guardada en nuestro universo. ♡");

      const { data, error: reloadError } = await supabase.rpc(
        "get_guest_capsules_by_password",
        {
          p_password: password,
          p_author: author,
        }
      );

      if (!reloadError) {
        setCapsules((data ?? []) as Capsule[]);
      }
    }

    setSaving(false);
  }

  // VOLVER A ELEGIR IDENTIDAD
  function changeAuthor() {
    setAuthor(null);
    setLetter("");
    setMessage("");
  }

  // CARGANDO
  if (loading) {
    return (
      <main className="capsule-portal">
        <div className="capsule-panel">
          <h1>Abriendo nuestro universo...</h1>
          <p>Un momento, mi cielo. ♡</p>
        </div>
      </main>
    );
  }

  // PANTALLA 1: CONTRASEÑA
  if (!accessGranted) {
    return (
      <main className="capsule-portal">
        <div className="capsule-panel">
          <span className="capsule-symbol">✧</span>

          <p className="capsule-eyebrow">
            ✧ ACCESO ESPECIAL ✧
          </p>

          <h1>¿Tienes la llave?</h1>

          <p className="capsule-intro">
            Hay una palabra que solamente nosotros conocemos.
            ¿Recuerdas cuál es?
          </p>

          <form onSubmit={enterCapsule} className="capsule-access">
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setMessage("");
              }}
              placeholder="Nuestra contraseña..."
              autoComplete="off"
              required
            />

            <button type="submit">
              Entrar a nuestro universo ♡
            </button>
          </form>

          {message && (
            <p className="capsule-message">{message}</p>
          )}
        </div>
      </main>
    );
  }

  // PANTALLA 2: IDENTIDAD
  if (!author) {
    return (
      <main className="capsule-portal">
        <div className="capsule-panel">
          <span className="capsule-symbol">♡</span>

          <p className="capsule-eyebrow">
            QUÉ BONITO TENERTE AQUÍ
          </p>

          <h1>¿Quién está escribiendo?</h1>

          <p className="capsule-intro">
            Elige tu espacio para guardar tus palabras.
          </p>

          <div className="capsule-identity-options">
            <button onClick={() => chooseAuthor("tu")}>
              Soy yo ♡
            </button>

            <button onClick={() => chooseAuthor("el")}>
              Soy él ♡
            </button>
          </div>

          <button
            className="capsule-back-button"
            onClick={() => {
              setPassword("");
              setAccessGranted(false);
              setMessage("");
            }}
          >
            Volver
          </button>
        </div>
      </main>
    );
  }

  // PANTALLA 3: ESCRIBIR CARTA
  const currentCapsule = capsules.find(
    (capsule) => capsule.month_start === getCurrentCapsuleDate()
  );

  return (
    <main className="capsule-portal">
      <div className="capsule-panel">
        <span className="capsule-symbol">✧</span>

        <p className="capsule-eyebrow">
          UN UNIVERSO PARA DOS
        </p>

        <h1>Una carta para el futuro ♡</h1>

        <p className="capsule-intro">
          Hay palabras que merecen guardarse para volver
          a encontrarlas.
        </p>

        <section className="capsule-writing">
          <h2>Mi carta de este mes 💌</h2>

          <p>
            Escribe lo que sientes, lo que viviste y aquello
            que quieras recordar cuando volvamos a leer estas palabras.
          </p>

          {currentCapsule?.is_unlocked ? (
            <p>
              Esta cápsula ya se abrió. Puedes leer tus recuerdos anteriores.
            </p>
          ) : (
            <>
              <textarea
                value={letter}
                onChange={(event) => setLetter(event.target.value)}
                placeholder="Hola, mi amor... ♡"
                maxLength={10000}
              />

              <span className="capsule-counter">
                {letter.length}/10000 caracteres
              </span>

              <button
                type="button"
                onClick={saveLetter}
                disabled={saving || !letter.trim()}
              >
                {saving ? "Guardando..." : "Guardar mi carta ♡"}
              </button>
            </>
          )}

          {message && (
            <p className="capsule-message">{message}</p>
          )}
        </section>

        <section className="capsule-history">
          <h2>Nuestras cápsulas anteriores ✨</h2>

          {capsules.length === 0 ? (
            <p>
              Aquí aparecerán nuestras primeras cartas
              cuando guardemos la cápsula de este mes.
            </p>
          ) : (
            capsules.map((capsule) => (
              <article
                className="capsule-history-card"
                key={capsule.month_start}
              >
                <h3>
                  Cápsula del{" "}
                  {new Date(
                    `${capsule.month_start}T12:00:00`
                  ).toLocaleDateString("es-MX", {
                    month: "long",
                    year: "numeric",
                    timeZone: "America/Mexico_City",
                  })}
                </h3>

                <p>
                  {capsule.is_unlocked
                    ? "♡ Esta cápsula está abierta"
                    : `Se abrirá el ${new Date(
                        `${capsule.unlock_date}T12:00:00`
                      ).toLocaleDateString("es-MX", {
                        timeZone: "America/Mexico_City",
                      })}`}
                </p>

                <details>
                  <summary>Mi carta</summary>
                  <p>
                    {capsule.my_letter || "Todavía no hay una carta."}
                  </p>
                </details>

                {capsule.is_unlocked && (
                  <details>
                    <summary>La carta de mi persona especial</summary>
                    <p>
                      {capsule.partner_letter ||
                        "La otra carta todavía no está escrita."}
                    </p>
                  </details>
                )}
              </article>
            ))
          )}
        </section>

        <button
          className="capsule-back-button"
          onClick={changeAuthor}
        >
          Cambiar de persona
        </button>

        <p className="capsule-footer">
          Algunas palabras están hechas para esperar el momento correcto. ♡
        </p>
      </div>
    </main>
  );
}
