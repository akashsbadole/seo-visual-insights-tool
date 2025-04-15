
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface HeaderProps {
  onAnalyze: (url: string) => void;
  isLoading: boolean;
}

const Header = ({ onAnalyze, isLoading }: HeaderProps) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic URL validation
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    
    try {
      // Check if URL is valid format
      new URL(url);
      setError("");
      onAnalyze(url);
    } catch (err) {
      setError("Please enter a valid URL (include http:// or https://)");
    }
  };

  return (
    <header className="w-full bg-white border-b">
      <div className="container py-4 md:py-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              <span className="text-blue-500">SEO</span> Visual Insights
            </h1>
            <div className="hidden md:flex space-x-2">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Contact</Button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <div className="relative">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter website URL (e.g. https://example.com)"
                  className={`pl-10 pr-4 h-12 ${error ? 'border-red-500' : ''}`}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Analyzing..." : "Analyze Website"}
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
