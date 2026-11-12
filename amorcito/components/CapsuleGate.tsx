
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CapsuleGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function unlock(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.trim().toLowerCase() === "pescado") {
      sessionStorage.setItem("capsule-access", "true");
      router.push("/capsula");
    } else {
      setError("Esa no es nuestra palabra secreta. ♡");
    }
  }

  return (
    <form className="capsule-gate" onSubmit={unlock}>
      <div className="capsule-illustration">
        <span className="capsule-icon">✉</span>
      </div>

      <span className="capsule-status">✧ ACCESO ESPECIAL ✧</span>
      <h3>¿Tienes la llave?</h3>

      <p>
        Hay una palabra que solamente nosotros conocemos.
        ¿Recuerdas cuál es?
      </p>

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Nuestra contraseña secreta..."
        autoComplete="off"
        required
      />

      {error && <p className="capsule-error">{error}</p>}

      <button type="submit" className="capsule-button">
        Abrir nuestra cápsula ♡
      </button>
    </form>
  );
}
