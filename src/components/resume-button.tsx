"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  readonly className?: string;
}

export function ResumeButton({ className }: ResumeButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;
    
    try {
      setIsDownloading(true);
      
      const response = await fetch("/api/resume");
      if (!response.ok) throw new Error("Network response was not ok");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      
      // Extract filename from Content-Disposition header if possible
      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = "Resume.pdf";
      if (contentDisposition && contentDisposition.indexOf("filename=") !== -1) {
        const matches = /filename="([^"]*)"/.exec(contentDisposition);
        if (matches != null && matches[1]) filename = matches[1];
      }
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-80 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-2 group",
        className
      )}
    >
      {isDownloading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
      )}
      {isDownloading ? "Downloading..." : "Download Resume"}
    </button>
  );
}
