
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Capsule = {
  month_start: string;
  unlock_date: string;
  my_letter: string | null;
  partner_letter: string | null;
  is_unlocked: boolean;
};

export default function CapsulePortal() {
  const [token, setToken] = useState("");
  const [letter, setLetter] = useState("");
  const [capsules, setCapsules] = useState<Capsule[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadCapsules(accessToken: string) {
    const { data, error } = await supabase.rpc(
      "get_guest_capsules",
      { p_token: accessToken }
    );

    if (error) {
      setMessage("No pudimos abrir este espacio privado.");
      return;
    }

    const records = (data ?? []) as Capsule[];
    setCapsules(records);

    const currentMonth = new Date();
    const currentStart = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      11,
      12
    );

    const currentDate = [
      currentStart.getFullYear(),
      String(currentStart.getMonth() + 1).padStart(2, "0"),
      "11",
    ].join("-");

    const currentCapsule = records.find(
      (capsule) => capsule.month_start === currentDate
    );

    setLetter(currentCapsule?.my_letter ?? "");
  }

  useEffect(() => {
    const accessToken = new URLSearchParams(
      window.location.hash.replace(/^#/, "")
    ).get("token");

    if (!accessToken) {
      setMessage("Este enlace no contiene una llave de acceso.");
      setLoading(false);
      return;
    }

    setToken(accessToken);

    loadCapsules(accessToken).finally(() => {
      setLoading(false);
    });
  }, []);

  async function saveLetter() {
    if (!letter.trim() || !token) return;

    setSaving(true);
    setMessage("");

    const { error } = await supabase.rpc("save_guest_letter", {
      p_token: token,
      p_letter: letter,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Tu carta quedó guardada en nuestro universo. ♡");
      await loadCapsules(token);
    }

    setSaving(false);
  }

  if (loading) {
    return <main className="capsule-portal">Abriendo nuestro universo...</main>;
  }

  if (!token) {
    return (
      <main className="capsule-portal">
        <div className="capsule-panel">
          <h1>Un enlace especial ♡</h1>
          <p>{message}</p>
        </div>
      </main>
    );
  }

  const currentMonth = new Date();
  const currentDate = [
    currentMonth.getFullYear(),
    String(currentMonth.getMonth() + 1).padStart(2, "0"),
    "11",
  ].join("-");

  const currentCapsule = capsules.find(
    (capsule) => capsule.month_start === currentDate
  );

  return (
    <main className="capsule-portal">
      <div className="capsule-panel">
        <span className="capsule-symbol">✧</span>
        <p className="capsule-eyebrow">UN UNIVERSO PARA DOS</p>
        <h1>Nuestras cartas del tiempo</h1>
        <p className="capsule-intro">
          Hay palabras que merecen guardarse para volver a encontrarlas.
        </p>

        <section className="capsule-writing">
          <h2>Mi carta de este mes 💌</h2>
          <p>
            Escribe lo que sientes, lo que viviste y aquello que
            quieras recordar cuando volvamos a leer estas palabras.
          </p>

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

          {message && <p className="capsule-message">{message}</p>}
        </section>

        <section className="capsule-history">
          <h2>Nuestras cápsulas anteriores ✨</h2>

          {capsules.length === 0 ? (
            <p>
              Aquí aparecerán nuestras primeras cartas cuando guardemos
              la cápsula de este mes.
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
                  })}
                </h3>

                <p>
                  {capsule.is_unlocked
                    ? "♡ Esta cápsula está abierta"
                    : `Se abrirá el ${new Date(
                        `${capsule.unlock_date}T12:00:00`
                      ).toLocaleDateString("es-MX")}`}
                </p>

                <details>
                  <summary>Mi carta</summary>
                  <p>{capsule.my_letter || "Todavía no hay una carta."}</p>
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

        <p className="capsule-footer">
          Algunas palabras están hechas para esperar el momento correcto. ♡
        </p>
      </div>
    </main>
  );
}
