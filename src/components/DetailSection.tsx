
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

  // Return education content based on section title
  const renderEducationalContent = () => {
    switch (title) {
      case "On-Page SEO":
        return (
          <div className="bg-blue-50 p-4 mb-4 rounded border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">About On-Page SEO</h4>
            <p className="text-sm text-blue-800 mb-2">
              On-Page SEO refers to all measures taken directly within your website to improve its position in search rankings.
              Key elements include:
            </p>
            <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
              <li><strong>Meta Tags:</strong> Title tags and meta descriptions that accurately describe page content</li>
              <li><strong>Headings:</strong> Proper H1-H6 tag hierarchy that includes key search terms</li>
              <li><strong>Content Quality:</strong> Original, relevant content that answers user queries</li>
              <li><strong>URL Structure:</strong> Clean, descriptive URLs containing relevant keywords</li>
              <li><strong>Internal Linking:</strong> Strategic links between related pages on your site</li>
              <li><strong>Image Optimization:</strong> Descriptive filenames and alt text for all images</li>
            </ul>
          </div>
        );
      case "Technical SEO":
        return (
          <div className="bg-blue-50 p-4 mb-4 rounded border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">About Technical SEO</h4>
            <p className="text-sm text-blue-800 mb-2">
              Technical SEO focuses on improving the technical aspects of a website to increase the ranking of its pages in search engines.
              Important technical factors include:
            </p>
            <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
              <li><strong>Site Speed:</strong> Fast-loading pages improve user experience and rankings</li>
              <li><strong>Mobile Compatibility:</strong> Mobile-friendly design is essential for rankings</li>
              <li><strong>Indexability:</strong> Ensuring search engines can properly crawl and index your site</li>
              <li><strong>Site Structure:</strong> Logical site architecture that helps both users and crawlers</li>
              <li><strong>Schema Markup:</strong> Structured data that helps search engines understand content</li>
              <li><strong>XML Sitemaps:</strong> Maps that guide search engines through your site</li>
              <li><strong>Security:</strong> HTTPS implementation and other security measures</li>
            </ul>
          </div>
        );
      case "Content Quality":
        return (
          <div className="bg-blue-50 p-4 mb-4 rounded border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">About Content Quality</h4>
            <p className="text-sm text-blue-800 mb-2">
              Content quality is a critical ranking factor for search engines. High-quality content:
            </p>
            <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
              <li><strong>Relevance:</strong> Addresses the user's search intent and provides valuable information</li>
              <li><strong>Depth:</strong> Covers topics thoroughly with appropriate word count</li>
              <li><strong>Readability:</strong> Well-structured with clear headings, short paragraphs, and simple language</li>
              <li><strong>Originality:</strong> Unique content that isn't duplicated elsewhere</li>
              <li><strong>Engagement:</strong> Content that keeps users on page and encourages interaction</li>
              <li><strong>Freshness:</strong> Regularly updated to remain current and accurate</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

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
          
          {renderEducationalContent()}
          
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
