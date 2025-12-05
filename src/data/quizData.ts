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
    question: "¿Qué instrumento musical es este?",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop",
    options: ["Guitarra", "Violín", "Piano", "Flauta"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "¿Qué fruta es esta?",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&h=400&fit=crop",
    options: ["Mango", "Papaya", "Piña", "Banana"],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "¿Qué maravilla del mundo es esta?",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    options: ["Machu Picchu", "Taj Mahal", "Coliseo", "Gran Muralla"],
    correctAnswer: 0,
  },
];
