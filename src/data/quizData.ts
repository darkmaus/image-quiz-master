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
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "¿Qui va guanyar el premi DAU 2025 a millor autoria del any?",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop",
    options: ["Germán P. Millán", "Stefan Feld", "Tomáš Holek", "Elver Galarga"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "¿Com es diu el tipus de joc en el que el jugador va comprant cartes i millores per la seva baralla?",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    options: ["Deck Building", "Construcció de Baralles", "Eurogame", "Construcción de mazos"],
    correctAnswer: 1,
  },
];
