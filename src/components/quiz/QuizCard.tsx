import { useState, useEffect, useRef } from "react";
import { QuizQuestion } from "@/data/quizData";
import QuizOption from "./QuizOption";

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (points: number) => void;
}

const MAX_POINTS = 1000;
const MIN_POINTS = 250;
const TIME_LIMIT = 10; // seconds until points stop decreasing

const QuizCard = ({ question, onAnswer }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(MAX_POINTS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate points based on elapsed time
  const calculatePoints = (time: number): number => {
    if (time >= TIME_LIMIT) return MIN_POINTS;
    const pointsPerSecond = (MAX_POINTS - MIN_POINTS) / TIME_LIMIT;
    return Math.round(MAX_POINTS - pointsPerSecond * time);
  };

  // Timer effect
  useEffect(() => {
    if (isRevealed) return;

    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 0.1;
        setCurrentPoints(calculatePoints(newTime));
        return newTime;
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRevealed]);

  const handleOptionClick = (index: number) => {
    if (isRevealed) return;

    if (timerRef.current) clearInterval(timerRef.current);
    
    setSelectedAnswer(index);
    setIsRevealed(true);

    const isCorrect = index === question.correctAnswer;
    const points = isCorrect ? currentPoints : 0;

    setTimeout(() => {
      onAnswer(points);
    }, 1500);
  };

  return (
    <div className="animate-scale-in">
      <div className="bg-card rounded-2xl card-shadow overflow-hidden">
        {/* Image */}
        <div className="relative h-72 md:h-[300px] overflow-hidden">
          <img
            src={question.image}
            alt="Quiz question"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          
          {/* Points indicator */}
          <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="font-black text-primary text-lg">{currentPoints}</span>
            <span className="text-muted-foreground text-sm ml-1">pts</span>
          </div>
          
          {/* Timer bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50">
            <div 
              className="h-full bg-primary transition-all duration-100 ease-linear"
              style={{ 
                width: `${Math.max(0, 100 - (elapsedTime / TIME_LIMIT) * 100)}%`,
                backgroundColor: elapsedTime >= TIME_LIMIT ? 'hsl(var(--destructive))' : undefined
              }}
            />
          </div>
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

