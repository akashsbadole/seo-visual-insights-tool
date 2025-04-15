
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import IssueItem, { IssueType } from "./IssueItem";

export interface Issue {
  type: IssueType;
  title: string;
  description: string;
}

interface DetailSectionProps {
  title: string;
  score: number;
  issues: Issue[];
}

const DetailSection = ({ title, score, issues }: DetailSectionProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={title}>
        <AccordionTrigger className="py-4 px-6 bg-gray-50 rounded-md hover:bg-gray-100">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-medium text-lg">{title}</h3>
            <div className="flex items-center gap-3">
              <span className={`font-bold ${getScoreColor(score)}`}>
                {score}/100
              </span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4 px-0">
          <div className="space-y-3">
            {issues.map((issue, index) => (
              <IssueItem
                key={index}
                type={issue.type}
                title={issue.title}
                description={issue.description}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailSection;
