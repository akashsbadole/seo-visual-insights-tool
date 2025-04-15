
import { Card, CardContent } from "./ui/card";
import ScoreCard from "./ScoreCard";

interface SummarySectionProps {
  overallScore: number;
  onPageScore: number;
  technicalScore: number;
  contentScore: number;
}

const SummarySection = ({
  overallScore,
  onPageScore,
  technicalScore,
  contentScore,
}: SummarySectionProps) => {
  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">SEO Audit Results</h2>
          <p className="text-muted-foreground">
            Overall score based on on-page factors, technical SEO, and content quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScoreCard
            title="Overall Score"
            score={overallScore}
            description="Combined score from all SEO categories"
            className="border-blue-200 bg-blue-50"
          />
          <ScoreCard
            title="On-Page SEO"
            score={onPageScore}
            description="Meta tags, headings, and structural elements"
          />
          <ScoreCard
            title="Technical SEO"
            score={technicalScore}
            description="Page speed, mobile-friendliness, and indexability"
          />
          <ScoreCard
            title="Content Quality"
            score={contentScore}
            description="Content length, readability, and keyword optimization"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SummarySection;
