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
    question: "¿Qué país tiene esta bandera?",
    image: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=600&h=400&fit=crop",
    options: ["Brasil", "Argentina", "Colombia", "México"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "¿En qué ciudad se encuentra este monumento?",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    options: ["Londres", "Roma", "París", "Madrid"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "¿Qué animal es este?",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&h=400&fit=crop",
    options: ["León", "Tigre", "Leopardo", "Guepardo"],
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
];
