
import { useState } from "react";
import Header from "@/components/Header";
import EmptyState from "@/components/EmptyState";
import AuditResults from "@/components/AuditResults";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analyzedUrl, setAnalyzedUrl] = useState<string | null>(null);

  const handleAnalyze = (url: string) => {
    setIsLoading(true);
    
    // Simulate API call to perform SEO analysis
    setTimeout(() => {
      setAnalyzedUrl(url);
      setIsLoading(false);
    }, 3000);
  };

  const handleNewAudit = () => {
    setAnalyzedUrl(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onAnalyze={handleAnalyze} isLoading={isLoading} />
      
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-t-blue-600 border-blue-200 animate-spin"></div>
          <p className="text-gray-500">Analyzing website SEO factors...</p>
        </div>
      ) : analyzedUrl ? (
        <AuditResults url={analyzedUrl} onNewAudit={handleNewAudit} />
      ) : (
        <EmptyState />
      )}
      
      <footer className="bg-white border-t mt-auto">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SEO Visual Insights. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
