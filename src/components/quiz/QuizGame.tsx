import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import ProgressBar from "./ProgressBar";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";
import { Sparkles } from "lucide-react";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen quiz-gradient">
      <div className="min-h-screen bg-background/95 backdrop-blur-sm py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <header className="text-center mb-8 animate-slide-up">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-black text-foreground">
                Quiz Time!
              </h1>
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <p className="text-muted-foreground font-medium">
              Pon a prueba tus conocimientos
            </p>
          </header>

          {!isFinished ? (
            <>
              {/* Progress */}
              <div className="mb-6">
                <ProgressBar
                  current={currentQuestion + 1}
                  total={quizQuestions.length}
                />
              </div>

              {/* Score Badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-card px-6 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-muted-foreground">Puntos: </span>
                  <span className="font-black text-primary text-xl">{score}</span>
                </div>
              </div>

              {/* Quiz Card */}
              <QuizCard
                question={quizQuestions[currentQuestion]}
                onAnswer={handleAnswer}
                questionNumber={currentQuestion}
              />
            </>
          ) : (
            <QuizResults
              score={score}
              total={quizQuestions.length}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
