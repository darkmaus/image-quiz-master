export interface QuizQuestion {
  id: number;
  question: string;
  image: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Quin joc té aquest token?",
    image: "https://i.ibb.co/fVQ954P4/imagen.png",
    options: ["Ark Nova", "Coffe Traders", "Coffe Rush", "Café para los más cafeteros"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "¿De quin joc estan fent cosplay?",
    image: "https://i.ibb.co/nqy8z4fT/pic1813493.webp",
    options: ["Obsession", "Love in the Court", "Love Letter", "Red Carpet"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "¿Quin d'aquests jocs es de Isra & Shei (Llamadice)?",
    image: "https://i.ibb.co/rR3Sd0PH/pic7952326.webp",
    options: ["Zumos", "Smoothies", "Virus", "Autumn"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "¿Quin d'aquests jocs wargame no está editat per DEVIR?",
    image: "https://i.ibb.co/4ZGQWXcM/imagen.png",
    options: ["España 1936", "Senderos de Gloria", "Pacífico", "2GM Pacific"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "¿Qui va guanyar el premi DAU 2025 a millor autoria del any?",
    image: "https://i.ibb.co/gb8sQNTB/imagen.png",
    options: ["Germán P. Millán", "Stefan Feld", "Tomáš Holek", "Elver Galarga"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "¿Com es diu el tipus de joc en el que el jugador va comprant cartes i millores per la seva baralla?",
    image: "https://i.ibb.co/bjJXKG7Q/imagen.png",
    options: ["Deck Creating", "Construcció de Baralles", "Eurogame", "Mejora de cartas"],
    correctAnswer: 1,
  },
  {
  id: 7,
  question: "Quin joc va guanyar el Spiel des Jahres 2025 (premi principal)?",
  image: "https://i.ibb.co/LXJcqNR5/imagen.png",
  options: [
    "SETI: Search for Extraterrestrial Intelligence",
    "Bomb Busters",
    "Arcs",
    "Endeavor – Deep Sea"
  ],
  correctAnswer: 1,
},
{
  id: 8,
  question: "Quin dissenyador apareix com a autor de SETI: Search for Extraterrestrial Intelligence, guanyador el 2025 en categories de premsa/comunitat?",
  image: "https://i.ibb.co/8LpPJ6wf/imagen.png",
  options: ["Cole Wehrle", "Tomáš Holek", "Hisashi Hayashi", "Yohan Goh"],
  correctAnswer: 1,
},
{
  id: 9,
  question: "L’As d’Or 2025 va ser atorgat a:",
  image: "https://i.ibb.co/tw3LnBt8/imagen.png",
  options: ["For a Crown", "Captain Flip", "Odin", "Flip 7"],
  correctAnswer: 2,
},
{
  id: 10,
  question: "Quina és una de les característiques principals de Bomb Busters?",
  image: "https://i.ibb.co/JRfztDhN/imagen.png",
  options: [
    "Complexa gestió de recursos i mapes modulars",
    "Comunicació i deducció cooperativa amb cartes ocultes",
    "Joc de col·locació de treballadors amb mercat dinàmic",
    "Sistema legacy amb sobres que s’obren"
  ],
  correctAnswer: 1,
},
{
  id: 11,
  question: "Quin joc espanyol de gestió de recursos i estratègia va ser destacat com a llançament esperat per a finals de 2025?",
  image: "https://i.ibb.co/5xBbRzBW/imagen.png",
  options: ["La Cort del Tsar", "Covenant", "Transgalactica", "Earthborne Rangers"],
  correctAnswer: 1,
},
{
  id: 12,
  question: "Star Wars: Battle of Hoth (2025) pertany a quin gènere principal?",
  image: "https://www.komar.de/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/import/api-v1.1-file-public-files-pim-assets-97-ad-84-62-6284ad972eff292d45ce1a2e-images-4c-73-f0-65-65f0734c8fcf857268b20a37-026-dvd4-star-wars-poster-classic-1-web.jpg",
  options: [
    "Eurogame econòmic",
    "Party game lleuger",
    "Wargame tàctic",
    "Aventures (Legacy)"
  ],
  correctAnswer: 2,
},
{
  id: 13,
  question: "Quin títol és un nou stand-alone de la sèrie Dorfromantik publicat en català per SD Games a finals de 2025?",
  image: "https://i.ibb.co/PsbW9rWx/imagen.png",
  options: [
    "Dorfromantik: Sakura",
    "Dorfromantik: Light Luggage",
    "Dorfromantik: Urbania",
    "Dorfromantik: Winter Fields"
  ],
  correctAnswer: 0,
},
{
  id: 14,
  question: "Quina es la mecànica principal del Gran joc en català de Devir per aquest 2026?",
  image: "https://i.ibb.co/gb8sQNTB/imagen.png",
  options: [
    "Control de àrees",
    "Construcció de Baralles",
    "Llençar daus per guanyar batalles",
    "Buscar faltes al reglament"
  ],
  correctAnswer: 1,
},
{
  id: 15,
  question: "Quina d’aquestes expansions de Smart 10 no existeix?",
  image: "https://i.ibb.co/nqQpGjJk/imagen.png",
  options: ["Smart 10: Entreteniment", "Smart 10: Viatges", "Smart 10: Espanya", "Smart 10: Esports"],
  correctAnswer: 3,
},
{
  id: 16,
  question: "Quina és la mecànica principal que utilitza Coming of Age per reflectir l’evolució del teu personatge des de la infància fins a l’edat adulta?",
  image: "https://i.ibb.co/b5gGrwp2/imagen.png",
  options: [
    "Col·locació de treballadors i comerç entre jugadors",
    "Gestió de daus per visitar ubicacions i avançar al teu tauler personal",
    "Construcció de masos amb cartes d’habilitats alomàntiques",
    "Control d’àrees mitjançant tokens i combats tàctics"
  ],
  correctAnswer: 1,
},
  {
  id: 17,
  question: "En *Covenant*, quina acció principal no és realitzada mitjançant una eina específica amb assignació d’enans?",
  image: "https://i.ibb.co/jvHKyGvH/imagen.png",
  options: [
    "Excavar la muntanya per revelar salons i obtenir recursos",
    "Atacar enemics per netejar salons i guanyar prestigi",
    "Transportar recursos per habilitar estructures monumentals",
    "Negociar amb altres jugadors per intercanviar recursos"
  ],
  correctAnswer: 3
},
  {
  id: 18,
  question: "Quina secció del programa de Cunyadisme Lúdic mescla música i jocs de taula",
  image: "https://i.ibb.co/VYk5yDf9/imagen.png",
  options: [
    "Dice the track",
    "RadioMeeple",
    "Rajoletes i cançons",
    "Joc o cancó"
  ],
  correctAnswer: 3
},
];
