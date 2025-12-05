import { cn } from "@/lib/utils";

interface QuizOptionProps {
  label: string;
  text: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean | null;
  isRevealed: boolean;
  onClick: () => void;
  disabled: boolean;
}

const optionColors = [
  "bg-option-a hover:bg-option-a/90",
  "bg-option-b hover:bg-option-b/90",
  "bg-option-c hover:bg-option-c/90 text-foreground",
  "bg-option-d hover:bg-option-d/90",
];

const optionLabels = ["A", "B", "C", "D"];

const QuizOption = ({
  text,
  index,
  isSelected,
  isCorrect,
  isRevealed,
  onClick,
  disabled,
}: QuizOptionProps) => {
  const getStateClasses = () => {
    if (!isRevealed) {
      return isSelected
        ? `${optionColors[index]} ring-4 ring-foreground/20 scale-[1.02]`
        : optionColors[index];
    }

    if (isCorrect) {
      return "bg-success ring-4 ring-success/30";
    }

    if (isSelected && !isCorrect) {
      return "bg-destructive ring-4 ring-destructive/30 animate-shake";
    }

    return "bg-muted text-muted-foreground opacity-50";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full p-4 rounded-xl font-bold text-left transition-all duration-300",
        "flex items-center gap-4 option-shadow",
        "text-primary-foreground",
        getStateClasses(),
        !disabled && "cursor-pointer active:scale-[0.98]",
        disabled && "cursor-default"
      )}
    >
      <span className="w-10 h-10 rounded-lg bg-foreground/20 flex items-center justify-center text-lg font-black">
        {optionLabels[index]}
      </span>
      <span className="text-base md:text-lg">{text}</span>
    </button>
  );
};

export default QuizOption;
