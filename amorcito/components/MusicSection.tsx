
"use client";

import { useEffect, useRef, useState } from "react";

const songs = [
  {
    id: 1,
    title: "Papasito",
    artist: "KAROL G",
    audio: "/music/papasito.mp4",
    cover: "/covers/papasito.jpeg",
    note: "Una canción para recordarte lo mucho que me encantas. ♡",
    dedication:
      "Porque también hay canciones que me hacen pensar en lo mucho que me encantas y en lo bonito que es tenerte cerquita.",
lyrics: [
  { start: 0, end: 8, text: "Y yo que solo quería conocerte y ahora no puedo dejarte ir… ♡" },
  { start: 8, end: 16, text: "¿Ya te dije lo guapo,precioso, hermoso que te ves?" },
  { start: 16, end: 24, text: "Mi debilidad tiene tu nombre completo." },
],
  },
  {
    id: 2,
    title: "Amor",
    artist: "Emanuel Cortés",
    audio: "/music/amor.mp4",
    cover: "/covers/amor.jpeg",
    note: "Hay canciones que dicen cosas que a veces no sé cómo explicar.",
    dedication:
      "Si tuviera que ponerle una melodía a lo que siento cuando estoy contigo, elegiría una como esta.",
lyrics: [
  { start: 0, end: 8, text: "Qué bonito coincidir contigo. ♡" },
  { start: 8, end: 16, text: "Me gusta la vida cuando estás en ella." },
  { start: 16, end: 24, text: "Eres mi imprevisto favorita." },
],
  },
  {
    id: 3,
    title: "Eres",
    artist: "Café Tacvba",
    audio: "/music/eres.mp4",
    cover: "/covers/eres.jpeg",
    note: "De todas las coincidencias bonitas, tú eres mi favorita.",
    dedication:
      "Entre tantas personas, llegaste tú y te convertiste en alguien que hace mis días mucho más bonitos.",
lyrics: [
  { start: 0, end: 8, text: "Eres esa persona que no sabía que necesitaba." },
  { start: 8, end: 16, text: "Contigo todo tiene otro sentido." },
  { start: 16, end: 24, text: "Qué bonito es quererte. ♡" },
],
  },
  {
    id: 4,
    title: "Almas Gemelas",
    artist: "El Trono de México",
    audio: "/music/almas-gemelas.mp4",
    cover: "/covers/almas-gemelas.jpeg",
    note: "Mi persona favorita, mi coincidencia más bonita. ♡",
    dedication:
      "Entre tantas personas en el mundo, nuestras vidas llegaron a encontrarse.",
lyrics: [
  { start: 0, end: 8, text: "Hay encuentros que parecen destino." },
  { start: 8, end: 16, text: "Como si mi corazón ya te conociera." },
  { start: 16, end: 24, text: "Qué suerte encontrarte. ♡" },
],
  },
  {
    id: 5,
    title: "Lose My Breath",
    artist: "Stray Kids",
    audio: "/music/lose-my-breath.mp4",
    cover: "/covers/lose-my-breath.jpeg",
    note: "Porque hasta mis canciones favoritas tienen un poquito de ti.",
    dedication:
      "Una canción diferente, pero que también tiene un lugar especial en nuestra historia.",
lyrics: [
  { start: 0, end: 8, text: "Todavía consigues ponerme nerviosa." },
  { start: 8, end: 16, text: "Me aceleras el corazón." },
  { start: 16, end: 24, text: "Y sí, sigues teniendo ese efecto en mí." },
],
  },
];

export default function MusicSection() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [selectedSong, setSelectedSong] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [audioError, setAudioError] = useState("");
const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const currentSong = songs.find(
    (song) => song.id === selectedSong
  )!;

  const activeLyric = currentSong.lyrics.find(
    (line) => currentTime >= line.start && currentTime < line.end
  );

useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;

  setCurrentTime(0);
  setDuration(0);
  setIsPlaying(false);
  setAudioError("");

  if (shouldAutoplay) {
    audio.play().catch(() => {
      setAudioError(
        "Presiona reproducir para comenzar la canción."
      );
    });
  }
}, [selectedSong, shouldAutoplay]);

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = volume;
  }
}, [volume]);

function selectSong(id: number) {
  if (id === selectedSong) {
    togglePlay();
    return;
  }

  setShouldAutoplay(true);
  setSelectedSong(id);
}

async function togglePlay() {
  const audio = audioRef.current;
  if (!audio) return;

  if (audio.paused) {
    try {
      setAudioError("");
      await audio.play();
    } catch {
      setAudioError("No se pudo reproducir la canción.");
    }
  } else {
    audio.pause();
  }
}

  function changeSong(direction: number) {
    const currentIndex = songs.findIndex(
      (song) => song.id === selectedSong
    );

    const nextIndex =
      (currentIndex + direction + songs.length) % songs.length;

    setSelectedSong(songs[nextIndex].id);
  }

  function formatTime(seconds: number) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  return (
    <section id="playlist" className="music-section">
      <div className="music-heading">
        <span className="section-label">
          ✧ UNA MELODÍA PARA NOSOTROS ✧
        </span>

        <h2>
          Nuestra <span>banda sonora</span>
        </h2>

        <p>
          Cinco canciones, cinco pequeñas formas de decirte
          lo mucho que significas para mí.
        </p>
      </div>

      <div className="music-layout music-layout-new">
        <div className="song-list">
          <span className="playlist-caption">
            NUESTRA PLAYLIST · 05 CANCIONES
          </span>

          {songs.map((song) => (
            <button
              key={song.id}
              className={`song-card ${
                selectedSong === song.id ? "active" : ""
              }`}
              onClick={() => selectSong(song.id)}
              type="button"
            >
              <div className="song-cover song-cover-new">
                <img
                  src={song.cover}
                  alt={`Portada de ${song.title}`}
                />
              </div>

              <div className="song-info">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>

              <span className="song-number">
                0{song.id}
              </span>
            </button>
          ))}
        </div>

        <div className="song-dedication song-dedication-new">
          <div className="music-player-heading">
            <span className="dedication-label">
              REPRODUCIENDO NUESTRA HISTORIA
            </span>

            <span className="music-equalizer">
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="music-album-cover">
            <img
              src={currentSong.cover}
              alt={`Portada de ${currentSong.title}`}
            />
          </div>

          <h3 className="selected-song-title">
            {currentSong.title}
          </h3>

          <p className="current-artist">
            {currentSong.artist}
          </p>

          <div className="instagram-note instagram-note-new">
            <div className="note-top">
              <span className="note-dot" />
              <span className="note-label">
                UNA NOTITA PARA TI
              </span>
              <span className="note-heart">♡</span>
            </div>

            <p>{currentSong.note}</p>

            <span className="note-signature">
              Para mi preciosote.
            </span>
          </div>

          <p className="song-message">
            {currentSong.dedication}
          </p>

          <div className="lyrics-display" key={activeLyric?.start ?? "empty"}>
            {activeLyric ? (
              <p>{activeLyric.text}</p>
            ) : (
              <p>Una melodía, un recuerdo y nosotros. ♡</p>
            )}
          </div>

          <audio
            key={currentSong.id}
            ref={audioRef}
            src={currentSong.audio}
            preload="metadata"
            onTimeUpdate={(event) =>
              setCurrentTime(event.currentTarget.currentTime)
            }
            onLoadedMetadata={(event) =>
              setDuration(event.currentTarget.duration)
            }
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => changeSong(1)}
            onError={() =>
              setAudioError(
                "No se pudo cargar la canción. Revisa el formato y la ruta del archivo."
              )
            }
          />

          <div className="custom-player">
            <div className="audio-progress">
              <span>{formatTime(currentTime)}</span>

              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={Math.min(currentTime, duration || 0)}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  if (audioRef.current) {
                    audioRef.current.currentTime = value;
                    setCurrentTime(value);
                  }
                }}
              />

              <span>{formatTime(duration)}</span>
            </div>

            <div className="audio-controls">
              <button
                type="button"
                onClick={() => changeSong(-1)}
                aria-label="Canción anterior"
              >
                ⏮
              </button>

              <button
                type="button"
                className="play-button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? "Ⅱ" : "▶"}
              </button>

              <button
                type="button"
                onClick={() => changeSong(1)}
                aria-label="Siguiente canción"
              >
                ⏭
              </button>
            </div>

            <div className="volume-control">
              <span>♫</span>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(event) => {
                  const newVolume = Number(event.target.value);
                  setVolume(newVolume);

                  if (audioRef.current) {
                    audioRef.current.volume = newVolume;
                  }
                }}
                aria-label="Volumen"
              />
            </div>

            {audioError && (
              <p className="audio-error">{audioError}</p>
            )}
          </div>
        </div>
      </div>

      <p className="music-footer">
        Cada canción guarda un pedacito de lo que siento por ti ♡
      </p>
    </section>
  );
}
