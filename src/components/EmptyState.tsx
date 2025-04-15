
import { LineChart, Search } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="container py-16 text-center flex flex-col items-center">
      <div className="bg-blue-50 p-8 rounded-full mb-6">
        <Search className="h-16 w-16 text-blue-500" />
      </div>
      <h2 className="text-3xl font-bold mb-4">SEO Visual Insights</h2>
      <p className="text-gray-500 mb-8 max-w-lg mx-auto">
        Enter a website URL above to analyze its SEO performance across multiple factors 
        including on-page elements, technical aspects, and content quality.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="bg-green-50 p-3 rounded-full mb-4">
            <Search className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="font-bold mb-2">On-Page Analysis</h3>
          <p className="text-sm text-gray-500">
            Check meta titles, descriptions, headings, image alt text, and URL structure.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-yellow-50 p-3 rounded-full mb-4">
            <LineChart className="h-6 w-6 text-yellow-500" />
          </div>
          <h3 className="font-bold mb-2">Technical Audit</h3>
          <p className="text-sm text-gray-500">
            Analyze page speed, mobile-friendliness, SSL, sitemaps, and structured data.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-red-50 p-3 rounded-full mb-4">
            <LineChart className="h-6 w-6 text-red-500" />
          </div>
          <h3 className="font-bold mb-2">Content Quality</h3>
          <p className="text-sm text-gray-500">
            Evaluate content length, readability, keyword usage, and overall quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
