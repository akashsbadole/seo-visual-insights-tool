
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

  // More comprehensive demo data for the audit results
  const overallScore = 68;
  const onPageScore = 75;
  const technicalScore = 62;
  const contentScore = 83;

  // Enhanced issues data with more specific details and recommendations
  const onPageIssues: Issue[] = [
    {
      type: "error",
      title: "Missing meta description",
      description: "Your page is missing a meta description tag which is essential for SEO. Search engines use this to display a description in search results.",
      recommendation: "Add a meta description between 120-156 characters that includes your primary keyword and summarizes the page content."
    },
    {
      type: "warning",
      title: "Meta title length",
      description: "Your meta title is 72 characters long (recommended: 50-60 characters). Overly long titles may be truncated in search results.",
      recommendation: "Shorten your title to 50-60 characters while keeping primary keywords near the beginning."
    },
    {
      type: "success",
      title: "H1 tag present",
      description: "Your page correctly uses a single H1 tag: 'Your Ultimate Guide to Digital Marketing in 2025'.",
      recommendation: "Continue using a single, descriptive H1 tag on each page that contains your primary keyword."
    },
    {
      type: "error",
      title: "Images missing alt text",
      description: "4 images on your page are missing alt text: hero-banner.jpg, team-photo.jpg, process-diagram.png, and contact-us.jpg.",
      recommendation: "Add descriptive alt text to all images that accurately describes the image content while including relevant keywords when appropriate."
    },
    {
      type: "warning",
      title: "Keyword density in content",
      description: "Your primary keyword 'digital marketing' appears 15 times in a 1200-word article (1.25% density). Ideal keyword density is between 1-2%.",
      recommendation: "Maintain your current keyword density but ensure keywords are used naturally within the content flow."
    },
    {
      type: "error",
      title: "Multiple H1 tags detected",
      description: "Your page contains 3 H1 tags. Best practice is to have only one H1 tag that clearly describes the page's main topic.",
      recommendation: "Keep only the main H1 tag and change the others to H2 or H3 tags to maintain proper heading hierarchy."
    }
  ];

  const technicalIssues: Issue[] = [
    {
      type: "warning",
      title: "Slow page load time",
      description: "Your page loads in 4.2 seconds on mobile (threshold: 3 seconds). This can increase bounce rates and hurt rankings.",
      recommendation: "Optimize images, enable browser caching, minify CSS/JS files, and consider using a CDN to improve load times."
    },
    {
      type: "error",
      title: "Not mobile-friendly",
      description: "Your site fails Google's Mobile-Friendly Test. Specific issues: text too small, clickable elements too close together, content wider than screen.",
      recommendation: "Implement responsive design, ensure text is readable without zooming, and make touch elements at least 44x44 pixels with adequate spacing."
    },
    {
      type: "success",
      title: "Valid SSL certificate",
      description: "Your website uses HTTPS with a valid SSL certificate from Let's Encrypt that expires on December 15, 2025.",
      recommendation: "Continue monitoring your SSL certificate and set up automatic renewals to avoid expiration."
    },
    {
      type: "warning",
      title: "No XML sitemap found",
      description: "We couldn't locate an XML sitemap at /sitemap.xml. Without a sitemap, search engines may miss important pages.",
      recommendation: "Generate an XML sitemap that includes all important pages and submit it to Google Search Console and Bing Webmaster Tools."
    },
    {
      type: "error",
      title: "Render-blocking resources",
      description: "6 JavaScript and 3 CSS files are blocking the rendering of your page, delaying page display by approximately 1.8 seconds.",
      recommendation: "Defer non-critical JavaScript, inline critical CSS, and optimize the delivery of external resources."
    },
    {
      type: "warning",
      title: "Missing structured data",
      description: "Your page doesn't include any structured data markup. Adding schema markup can enhance how your page appears in search results.",
      recommendation: "Implement relevant schema.org markup such as Article, Product, or Organization depending on your content type."
    },
    {
      type: "error",
      title: "404 errors found",
      description: "3 internal links on your page point to non-existent resources: /old-page, /resources/2023, and /contact-old.",
      recommendation: "Either restore these pages, redirect them to relevant content, or update the links to point to existing pages."
    }
  ];

  const contentIssues: Issue[] = [
    {
      type: "success",
      title: "Good content length",
      description: "Your page has 1,245 words, which is good for comprehensive coverage of the topic 'Digital Marketing Strategies'.",
      recommendation: "Continue creating comprehensive content with 1,000+ words for important topics while keeping it valuable and relevant."
    },
    {
      type: "success",
      title: "Keyword presence",
      description: "Primary keyword 'digital marketing strategies' appears in title, H1, URL, and has a good density of 1.8% in the content.",
      recommendation: "Continue using your primary keyword naturally throughout your content, including in headings, first paragraph, and conclusion."
    },
    {
      type: "warning",
      title: "Improve readability",
      description: "Content has a Flesch reading ease score of 45 (scale: 0-100). This is considered 'difficult' and may reduce engagement.",
      recommendation: "Use shorter sentences, simpler words, more subheadings, and bullet points to make content more scannable and accessible to a wider audience."
    },
    {
      type: "error",
      title: "Low content uniqueness",
      description: "36% of your content appears to be similar to existing content on other websites, which may be seen as duplicate content.",
      recommendation: "Create original content and rewrite sections that closely match other websites. Use quotes when necessary and always cite sources."
    },
    {
      type: "warning",
      title: "Outdated content",
      description: "Several statistics referenced in your content are from 2021. Using outdated information reduces content value and trustworthiness.",
      recommendation: "Update all statistics to the most recent available data and consider adding a 'Last Updated' date to show content freshness."
    },
    {
      type: "success",
      title: "Good media usage",
      description: "Your content includes 6 relevant images and 2 videos that enhance the text and improve user engagement.",
      recommendation: "Continue using relevant visual content while ensuring all media elements have proper alt text and captions."
    }
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
            Analyzed on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
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
