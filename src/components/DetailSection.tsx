
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
  recommendation?: string;
}

interface DetailSectionProps {
  title: string;
  score: number;
  issues: Issue[];
  demoMode?: boolean;
}

const DetailSection = ({ title, score, issues, demoMode = false }: DetailSectionProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getStatusText = (score: number) => {
    if (score >= 80) return "Good";
    if (score >= 50) return "Needs Improvement";
    return "Poor";
  };

  // Count issues by type for summary
  const successCount = issues.filter(issue => issue.type === "success").length;
  const warningCount = issues.filter(issue => issue.type === "warning").length;
  const errorCount = issues.filter(issue => issue.type === "error").length;

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={title}>
      <AccordionItem value={title}>
        <AccordionTrigger className="py-4 px-6 bg-gray-50 rounded-md hover:bg-gray-100">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <h3 className="font-medium text-lg">{title}</h3>
              <span className="ml-3 text-sm px-3 py-1 bg-gray-200 rounded-full">
                {issues.length} checks
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className={`font-bold ${getScoreColor(score)}`}>
                {score}/100 - {getStatusText(score)}
              </span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-4 px-0">
          <div className="mb-4 flex items-center gap-4 px-2">
            <div className="text-xs flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span>{successCount} Passed</span>
            </div>
            <div className="text-xs flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span>{warningCount} Warnings</span>
            </div>
            <div className="text-xs flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span>{errorCount} Errors</span>
            </div>
          </div>
          
          {demoMode && (
            <div className="bg-blue-50 p-4 mb-4 rounded border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This is a demonstration with example data. For real URL analysis, 
                a backend service that can crawl and analyze websites would be needed.
              </p>
            </div>
          )}
          
          <div className="space-y-3">
            {issues.map((issue, index) => (
              <IssueItem
                key={index}
                type={issue.type}
                title={issue.title}
                description={issue.description}
                recommendation={issue.recommendation}
              />
            ))}
            {issues.length === 0 && (
              <div className="px-6 py-8 text-center text-gray-500">
                No issues detected
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailSection;
