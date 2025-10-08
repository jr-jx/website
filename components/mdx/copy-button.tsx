"use client";
import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  content: string;
}

const CopyButton: React.FC<Props> = ({ content }) => {
  const [copied, setCopied] = React.useState(false);
  const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);

      if (timerId) {
        clearTimeout(timerId);
        setTimerId(null);
      }

      setTimerId(
        setTimeout(() => {
          setCopied(false);
        }, 2000)
      );
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <Button
      variant="link"
      size="sm"
      onClick={handleClick}
      className="h-8 w-8 p-0"
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="sr-only">
        {copied ? "已复制" : "复制代码"}
      </span>
    </Button>
  );
};

export default CopyButton;
