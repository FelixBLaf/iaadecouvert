// Single source of truth for the site. Edit this file when new elements arrive.
// Empty strings ("") show a "Bientôt disponible" placeholder on the page.

const PODCAST = {
  name: "IA à découvert",
  promise: "Comprendre l'IA au travail, sans la vanter ni la craindre.",
  about: "IA à découvert aide les propriétaires de PME et les professionnels des communications du Québec à faire des choix éclairés face à l'intelligence artificielle. Deux épisodes de 15 à 30 minutes, nuancés et ancrés dans des exemples concrets.",
  cover: "assets/logo-ia-a-decouvert.jpg",
  teaser: "assets/teaser.mp4",
  teaserPoster: "assets/teaser-poster.jpg",
  team: ["André", "Sophie", "Félix", "Islem", "To Nhu", "Aimée"],
  platforms: [                        // fictional: links stay "#"
    { name: "Apple Podcasts", url: "#" },
    { name: "Spotify", url: "#" },
    { name: "Ohdio", url: "#" },
  ],
  // Provisional: replace with the final transparency label (Rédaction)
  transparency: "Ce balado est produit par des humains avec l'aide d'outils d'IA générative pour la recherche, la structuration des épisodes, la transcription et certains éléments visuels et sonores. Chaque contenu a été vérifié, modifié et validé par l'équipe. Les voix entendues sont des voix humaines, sauf mention contraire.",
};

const EPISODES = [
  {
    id: 1,
    number: "Épisode 1",
    date: "Novembre 2026",
    duration: "",                     // e.g. "22 min"
    title: "Faut-il dire à ses clients qu'on utilise l'IA ?",
    // Provisional description (50 à 150 caractères), to replace with the final one
    description: "Critères pour décider, regards croisés du client et du commerçant, et une grille en trois questions.",
    image: "assets/Equipe5-Miniature-Ep1.jpg",
    audio: "",                        // e.g. "assets/Equipe5-Episode1.mp3"
    article: "",                      // HTML string of the blog article (600 à 900 mots)
    transcript: "",                   // plain text, paragraphs separated by blank lines
    sources: [],                      // ["Auteur (2026). Titre. URL", ...]
  },
  {
    id: 2,
    number: "Épisode 2",
    date: "Novembre 2026",
    duration: "",
    title: "Idées d'abord, IA ensuite : la créativité d'équipe",
    description: "Comment garder le ton et le style de son entreprise quand l'IA entre dans le processus créatif ?",
    image: "assets/Equipe5-Miniature-Ep2.jpg",
    audio: "",
    article: "",
    transcript: "",
    sources: [],
  },
];
