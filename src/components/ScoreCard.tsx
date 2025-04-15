
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

interface ScoreCardProps {
  title: string;
  score: number;
  description: string;
  className?: string;
}

const ScoreCard = ({ title, score, description, className }: ScoreCardProps) => {
  // Determine the color and icon based on the score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-6 w-6 text-green-500" />;
    if (score >= 50) return <AlertCircle className="h-6 w-6 text-yellow-500" />;
    return <XCircle className="h-6 w-6 text-red-500" />;
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <div className="flex items-center gap-1.5">
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
            {getScoreIcon(score)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Progress
          value={score}
          className="h-2 mt-2"
          // Fix: Replace indicatorClassName with a proper className to style the indicator
          className={cn("h-2 mt-2", getProgressColor(score))}
        />
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
