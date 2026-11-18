// Single source of truth for the site. Edit this file when new elements arrive.
// Empty strings ("") show a "Bientôt disponible" placeholder on the page.

const PODCAST = {
  name: "IA à découvert",
  promise: "Comprendre l'IA au travail, sans la vanter ni la craindre.",
  about: "IA à découvert aide les propriétaires de PME et les professionnels des communications du Québec à faire des choix éclairés face à l'intelligence artificielle. Deux épisodes d'une vingtaine de minutes, nuancés et ancrés dans des exemples concrets.",
  cover: "assets/logo-ia-a-decouvert.jpg",
  teaser: "assets/teaser.mp4",
  teaserPoster: "assets/teaser-poster.jpg",
  team: ["André", "Sophie", "Félix", "Islem", "To Nhu", "Aimée"],
  platforms: [                        // fictional: links stay "#"
    { name: "Apple Podcasts", url: "#" },
    { name: "Spotify", url: "#" },
    { name: "Ohdio", url: "#" },
  ],
  voiceNote: "Voix du générique : voix synthétique générée par IA.",
  // Provisional: replace with the final transparency label (Rédaction)
  transparency: "Ce balado est produit par des humains avec l'aide d'outils d'IA générative pour la recherche, la structuration des épisodes, la transcription et certains éléments visuels et sonores. Chaque contenu a été vérifié, modifié et validé par l'équipe. Les voix entendues sont des voix humaines, sauf mention contraire.",
};

const EPISODES = [
  {
    id: 1,
    number: "Épisode 1",
    date: "Novembre 2026",
    duration: "20 min",
    title: "Faut-il dire à ses clients qu'on utilise l'IA ?",
    // Provisional description (50 à 150 caractères), to replace with the final one
    description: "Critères pour décider, regards croisés du client et du commerçant, et une grille en trois questions.",
    image: "assets/Equipe5-Miniature-Ep1.jpg",
    audio: "Equipe5-Episode1.mp3",
    article: "",                      // HTML string of the blog article (600 à 900 mots)
    transcript: "",                   // plain text, paragraphs separated by blank lines
    people: [
      { name: "Sophie", role: "Animatrice" },
      { name: "Aimée", role: "Perspective des commerçants et des PME" },
      { name: "To Nhu", role: "Perspective des consommateurs, confiance et transparence" },
    ],
    sources: [
      "Blais-Poulin, C.-É. (2026, 21 septembre). <em>Quand le consommateur est un robot</em>. La Presse. <a href=\"https://www.lapresse.ca/affaires/techno/les-impostures-de-l-ia/une-armee-d-avatars-pour-vous-faire-acheter/2026-09-21/quand-le-consommateur-est-un-robot.php\" target=\"_blank\" rel=\"noopener\">lapresse.ca</a>",
      "Conseil québécois du commerce de détail. (2026). <em>L’IA gagne du terrain dans le parcours d’achat, Temu et Shein toujours plus présents</em>. <a href=\"https://www.cqcd.org/blogue/lia-gagne-du-terrain-dans-le-parcours-dachat/\" target=\"_blank\" rel=\"noopener\">cqcd.org</a>",
      "Innovation, Sciences et Développement économique Canada. (2026, 23 juillet). <em>Soutenir la confiance envers l’intelligence artificielle grâce à une transparence accrue</em>. <a href=\"https://ised-isde.canada.ca/site/isde/fr/exprimez-votre-opinion-transparence-matiere-dia-canada/soutenir-confiance-envers-lintelligence-artificielle-grace-transparence-accrue\" target=\"_blank\" rel=\"noopener\">ised-isde.canada.ca</a>",
      "Office de la protection du consommateur. (2026, 12 juin). <em>Publicité : ce qui est interdit par la loi</em>. <a href=\"https://www.opc.gouv.qc.ca/consommateur/sujet/publicite-illegale/interdiction/pratiques/\" target=\"_blank\" rel=\"noopener\">opc.gouv.qc.ca</a>",
    ],                      // ["Auteur (2026). Titre. URL", ...]
  },
  {
    id: 2,
    number: "Épisode 2",
    date: "Novembre 2026",
    duration: "23 min",
    title: "Idées d'abord, IA ensuite : la créativité d'équipe",
    description: "Comment garder le ton et le style de son entreprise quand l'IA entre dans le processus créatif ?",
    image: "assets/Equipe5-Miniature-Ep2.jpg",
    audio: "Equipe5-Episode2.mp3",
    article: "",
    transcript: "",
    people: [
      { name: "Sophie", role: "Animatrice" },
      { name: "Félix", role: "Créativité humaine et identité de marque" },
      { name: "Islem", role: "L'IA comme partenaire créatif" },
      { name: "André", role: "Regard critique et diversité des idées" },
    ],
    sources: [
      "Terwiesch, C., Meincke, L., Girotra, K., Mollick, E., Nave, G. et Ulrich, K. (2026). Artificial intelligence and its impact on creativity and diversity: An empirical study of large language model-generated product ideas. <em>Production and Operations Management</em>. <a href=\"https://doi.org/10.1177/10591478261474243\" target=\"_blank\" rel=\"noopener\">https://doi.org/10.1177/10591478261474243</a>",
      "<em>Who performs better? Exploring the role of generative AI in creativity and brainstorming</em>. (2026). ScienceDirect. Consulté en novembre 2026. <a href=\"https://www.sciencedirect.com/science/article/pii/S2949882126000538\" target=\"_blank\" rel=\"noopener\">sciencedirect.com</a>",
      "Jetté, F. (2025). <em>Pensez-vous que toutes ces marques ont eu…</em> [Publication LinkedIn sur les tyroliennes du 1er avril]. <a href=\"https://www.linkedin.com/posts/francisjette_pensez-vous-que-toutes-ces-marques-ont-eu-ugcPost-7313243163001827328-1_Xq/\" target=\"_blank\" rel=\"noopener\">linkedin.com</a>",
    ],
  },
];
