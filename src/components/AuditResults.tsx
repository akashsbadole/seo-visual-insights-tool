
import { Button } from "./ui/button";
import SummarySection from "./SummarySection";
import DetailSection from "./DetailSection";
import { Issue } from "./DetailSection";
import { Download } from "lucide-react";
import { useState } from "react";
import { toast } from "./ui/sonner";

interface AuditResultsProps {
  url: string;
  onNewAudit: () => void;
}

const AuditResults = ({ url, onNewAudit }: AuditResultsProps) => {
  const [isExporting, setIsExporting] = useState(false);

  // Demo data for the audit results
  const overallScore = 68;
  const onPageScore = 75;
  const technicalScore = 62;
  const contentScore = 83;

  // Demo issues data
  const onPageIssues: Issue[] = [
    {
      type: "error",
      title: "Missing meta description",
      description: "Your page is missing a meta description. Add a concise, compelling description to improve click-through rates."
    },
    {
      type: "warning",
      title: "Meta title length",
      description: "Your meta title is 72 characters long. Consider shortening it to 50-60 characters for optimal display in search results."
    },
    {
      type: "success",
      title: "H1 tag present",
      description: "Your page correctly uses a single H1 tag, which helps search engines understand the main topic."
    },
    {
      type: "error",
      title: "Images missing alt text",
      description: "4 images on your page are missing alt text. Add descriptive alt text to improve accessibility and SEO."
    },
  ];

  const technicalIssues: Issue[] = [
    {
      type: "warning",
      title: "Slow page load time",
      description: "Your page loads in 4.2 seconds. Aim for under 3 seconds to improve user experience and rankings."
    },
    {
      type: "error",
      title: "Not mobile-friendly",
      description: "Your page doesn't pass Google's Mobile-Friendly Test. Ensure your site is responsive on all devices."
    },
    {
      type: "success",
      title: "Valid SSL certificate",
      description: "Your website uses HTTPS with a valid SSL certificate, which is good for security and SEO."
    },
    {
      type: "warning",
      title: "No XML sitemap found",
      description: "We couldn't locate an XML sitemap at /sitemap.xml. Adding a sitemap helps search engines discover your content."
    },
  ];

  const contentIssues: Issue[] = [
    {
      type: "success",
      title: "Good content length",
      description: "Your page has 1,245 words, which is good for comprehensive coverage of the topic."
    },
    {
      type: "success",
      title: "Keyword presence",
      description: "Primary keyword appears in title, headings, and throughout the content."
    },
    {
      type: "warning",
      title: "Improve readability",
      description: "Content has a Flesch reading ease score of 45. Consider simplifying language for better comprehension."
    },
  ];

  const handleExport = () => {
    setIsExporting(true);
    // Simulate PDF generation process
    setTimeout(() => {
      setIsExporting(false);
      toast.success("Report exported successfully!", {
        description: "Your SEO audit report has been downloaded."
      });
    }, 2000);
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">SEO Audit for: {url}</h2>
          <p className="text-gray-500 mt-1">
            Analyzed on {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onNewAudit}>
            New Analysis
          </Button>
          <Button
            onClick={handleExport}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={isExporting}
          >
            <Download className="mr-2 h-4 w-4" />
            {isExporting ? "Exporting..." : "Export Report"}
          </Button>
        </div>
      </div>

      <SummarySection 
        overallScore={overallScore}
        onPageScore={onPageScore}
        technicalScore={technicalScore}
        contentScore={contentScore}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Detailed Analysis</h3>
        
        <DetailSection 
          title="On-Page SEO" 
          score={onPageScore} 
          issues={onPageIssues}
        />
        
        <DetailSection 
          title="Technical SEO" 
          score={technicalScore} 
          issues={technicalIssues}
        />
        
        <DetailSection 
          title="Content Quality" 
          score={contentScore} 
          issues={contentIssues}
        />
      </div>
    </div>
  );
};

export default AuditResults;
