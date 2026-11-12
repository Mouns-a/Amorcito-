
"use client";

import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "Papasito",
    artist: "KAROL G",
    emoji: "♡",
    spotifyId: "64zQbQTwu4ppBEfWyhst9t",
    searchUrl: "https://open.spotify.com/search/Papasito%20KAROL%20G",
    dedication:
      "Porque también hay canciones que me hacen pensar en lo mucho que me encantas y en lo bonito que es tenerte cerquita.",
    note: "Una canción para recordarte lo mucho que me encantas. ♡",
  },
  {
    id: 2,
    title: "Amor",
    artist: "Emanuel Cortés",
    emoji: "♡",
    spotifyId: null,
    searchUrl: "https://open.spotify.com/search/Amor%20Emanuel%20Cortes",
    dedication:
      "Porque si tuviera que ponerle una melodía a lo que siento cuando estoy contigo, elegiría una como esta.",
    note: "Hay canciones que dicen cosas que a veces no sé cómo explicar.",
  },
  {
    id: 3,
    title: "Eres",
    artist: "Café Tacvba",
    emoji: "♡",
    spotifyId: "2CADdzDSYPfxrtMmtohCWn",
    searchUrl: "https://open.spotify.com/search/Eres%20Cafe%20Tacvba",
    dedication:
      "Porque entre tantas personas, llegaste tú y te convertiste en alguien que hace mis días mucho más bonitos.",
    note: "De todas las coincidencias bonitas, tú eres mi favorita.",
  },
  {
    id: 4,
    title: "Almas Gemelas",
    artist: "El Trono de México",
    emoji: "♡",
    spotifyId: null,
    searchUrl:
      "https://open.spotify.com/search/Almas%20Gemelas%20El%20Trono%20de%20Mexico",
    dedication:
      "Porque hay algo muy bonito en pensar que, entre tantas personas en el mundo, nuestras vidas llegaron a encontrarse.",
    note: "Mi persona favorita, mi coincidencia más bonita. ♡",
  },
];

export default function MusicSection() {
  const [selectedSong, setSelectedSong] = useState(1);

  const currentSong = songs.find(
    (song) => song.id === selectedSong
  )!;

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
          Cuatro canciones, cuatro pequeñas formas de decirte
          lo mucho que significas para mí.
        </p>
      </div>

      <div className="music-layout music-layout-new">
        <div className="song-list">
          <span className="playlist-caption">
            NUESTRA PLAYLIST
          </span>

          {songs.map((song) => (
            <button
              key={song.id}
              className={`song-card ${
                selectedSong === song.id ? "active" : ""
              }`}
              onClick={() => setSelectedSong(song.id)}
              type="button"
            >
              <div className="song-cover song-cover-new">
                <span>{song.emoji}</span>
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

          <div className="spotify-container">
            {currentSong.spotifyId ? (
              <iframe
                key={currentSong.spotifyId}
                src={`https://open.spotify.com/embed/track/${currentSong.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Reproductor de ${currentSong.title}`}
              />
            ) : (
              <div className="spotify-missing">
                <span className="spotify-symbol">♫</span>
                <h4>Esta canción también tiene un lugar aquí.</h4>
                <p>
                  Abre Spotify para escucharla.
                </p>
                <a
                  href={currentSong.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotify-button"
                >
                  Buscar en Spotify ↗
                </a>
              </div>
            )}
          </div>

          <a
            className="spotify-text-link"
            href={currentSong.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir en Spotify ↗
          </a>
        </div>
      </div>

      <p className="music-footer">
        Cada canción guarda un pedacito de lo que siento por ti ♡
      </p>
    </section>
  );
}
