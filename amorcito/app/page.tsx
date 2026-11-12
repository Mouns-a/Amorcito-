
import StarBackground from "@/components/StarBackground";
import MusicSection from "@/components/MusicSection";
import MemoriesSection from "@/components/MemoriesSection";
import LoveLetter from "@/components/LoveLetter";
import LoveQuiz from "@/components/LoveQuiz";
import ReasonsSection from "@/components/ReasonsSection";
import FutureCapsule from "@/components/FutureCapsule";

export default function Home() {
  return (
    <main className="universe">
      <StarBackground />

      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />

      <nav className="top-nav">
        <span className="brand">♡ nuestro universo</span>
        <span className="month">01 · OUR FIRST MONTH</span>
      </nav>

      <section className="hero">
        <div className="moon-container">
          <div className="moon">
            <div className="moon-shadow" />
          </div>
          <div className="moon-glow" />
          <span className="orbit-star">✦</span>
        </div>

        <p className="eyebrow">
          ✧ UN PEQUEÑO LUGAR PARA TI ✧
        </p>

        <h1>
          Mi cielo,
          <br />
          <span>mi universo.</span>
        </h1>

        <div className="separator">
          <span />
          ♡
          <span />
        </div>

        <p className="dedication">
          Entre tantas estrellas, qué bonito que la vida
          me haya permitido coincidir contigo.
        </p>

        <p className="sub-dedication">
          Hice este pequeño universo para ti,
          porque de alguna manera te has convertido
          en una parte muy bonita del mío.
        </p>

        <a href="#playlist" className="enter-button">
          Descubre nuestro universo
          <span>↗</span>
        </a>

        <p className="bottom-note">
          HECHO CON MUCHO AMOR, SOLAMENTE PARA TI ♡
        </p>
      </section>

      <MusicSection />
      <MemoriesSection />
      <LoveLetter />
      <LoveQuiz />
      <ReasonsSection />
      <FutureCapsule />
    </main>
  );
}
