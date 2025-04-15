
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type IssueType = "success" | "warning" | "error";

interface IssueItemProps {
  type: IssueType;
  title: string;
  description: string;
  recommendation?: string; // Added a recommendation field for more helpful guidance
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
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        {recommendation && (
          <div className="mt-2 text-sm">
            <span className="font-medium text-blue-600">Recommendation: </span>
            <span className="text-gray-700">{recommendation}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueItem;
