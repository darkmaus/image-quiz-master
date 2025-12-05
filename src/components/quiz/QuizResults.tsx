import { Trophy, RotateCcw, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const QuizResults = ({ score, total, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return "¡Perfecto! 🎉";
    if (percentage >= 80) return "¡Excelente! 🌟";
    if (percentage >= 60) return "¡Bien hecho! 👏";
    if (percentage >= 40) return "¡Sigue practicando! 💪";
    return "¡Inténtalo de nuevo! 🔄";
  };

  const getEmoji = () => {
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🥇";
    if (percentage >= 60) return "🥈";
    if (percentage >= 40) return "🥉";
    return "📚";
  };

  return (
    <div className="animate-bounce-in">
      <div className="bg-card rounded-2xl card-shadow p-8 md:p-12 text-center">
        {/* Trophy Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto quiz-gradient rounded-full flex items-center justify-center animate-pulse-glow">
            <Trophy className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Big Emoji */}
        <div className="text-7xl mb-4">{getEmoji()}</div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
          {getMessage()}
        </h2>

        {/* Score */}
        <div className="mb-8">
          <p className="text-muted-foreground text-lg mb-4">Tu puntuación</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-6xl md:text-7xl font-black text-primary">
              {score}
            </span>
            <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
              / {total}
            </span>
          </div>
          <p className="text-xl font-semibold text-secondary mt-2">
            {percentage}% correcto
          </p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-8 h-8 transition-all duration-300",
                i < Math.ceil((percentage / 100) * 5)
                  ? "text-accent fill-accent"
                  : "text-muted"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="quiz-gradient text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 mx-auto hover:opacity-90 transition-opacity active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          Jugar de Nuevo
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
