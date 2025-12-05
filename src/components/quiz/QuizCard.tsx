import { useState } from "react";
import { QuizQuestion } from "@/data/quizData";
import QuizOption from "./QuizOption";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
}

const QuizCard = ({ question, onAnswer, questionNumber }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isRevealed) return;

    setSelectedAnswer(index);
    setIsRevealed(true);

    const isCorrect = index === question.correctAnswer;

    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  return (
    <div className="animate-scale-in" key={questionNumber}>
      <div className="bg-card rounded-2xl card-shadow overflow-hidden">
        {/* Image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={question.image}
            alt="Quiz question"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
        </div>

        {/* Question */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-6 text-center">
            {question.question}
          </h2>

          {/* Options */}
          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <QuizOption
                key={index}
                label={String.fromCharCode(65 + index)}
                text={option}
                index={index}
                isSelected={selectedAnswer === index}
                isCorrect={isRevealed ? index === question.correctAnswer : null}
                isRevealed={isRevealed}
                onClick={() => handleOptionClick(index)}
                disabled={isRevealed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
