
import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type IssueType = "success" | "warning" | "error";

interface IssueItemProps {
  type: IssueType;
  title: string;
  description: string;
  recommendation?: string;
}

const IssueItem = ({ type, title, description, recommendation }: IssueItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />;
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "border-green-100 bg-green-50";
      case "warning":
        return "border-yellow-100 bg-yellow-50";
      case "error":
        return "border-red-100 bg-red-50";
    }
  };

  return (
    <div className={cn("p-4 rounded-md border flex gap-3", getTypeStyles())}>
      {getIcon()}
      <div className="w-full">
        <h3 className="font-medium text-gray-900 flex items-center gap-2">
          {title}
          {type === "error" && <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Critical</span>}
          {type === "warning" && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Warning</span>}
          {type === "success" && <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Passed</span>}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        {recommendation && (
          <div className="mt-3 bg-blue-50 p-3 rounded-md border border-blue-100">
            <div className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-blue-700">Recommendation: </span>
                <span className="text-sm text-gray-700">{recommendation}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueItem;
