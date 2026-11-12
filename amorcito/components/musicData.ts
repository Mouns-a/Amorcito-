
export type LyricLine = {
  start: number;
  end: number;
  text: string;
};

export type Song = {
  id: number;
  title: string;
  artist: string;
  audio: string;
  cover: string;
  note: string;
  dedication: string;
  lyrics: LyricLine[];
};

export const songs: Song[] = [
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
      { start: 0, end: 10, text: "Nuestra primera frase aparecerá aquí ♡" },
      { start: 10, end: 20, text: "Un pedacito especial de esta canción." },
      { start: 20, end: 30, text: "Y otra pequeña razón para sonreír." },
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
      { start: 0, end: 10, text: "Una melodía que me recuerda a ti ♡" },
      { start: 10, end: 20, text: "Un sentimiento convertido en canción." },
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
      { start: 0, end: 10, text: "Tú eres una de mis coincidencias favoritas ♡" },
      { start: 10, end: 20, text: "Una canción para alguien extraordinario." },
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
      { start: 0, end: 10, text: "Qué bonita coincidencia encontrarte ♡" },
      { start: 10, end: 20, text: "Dos historias que ahora comparten camino." },
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
      "Una canción diferente, pero que también tiene un lugar en nuestra historia.",
    lyrics: [
      { start: 0, end: 10, text: "Y de pronto, todo suena diferente ♡" },
      { start: 10, end: 20, text: "Otra canción, otro recuerdo contigo." },
    ],
  },
];
