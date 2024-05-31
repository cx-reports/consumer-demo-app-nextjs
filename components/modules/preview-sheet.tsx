"use client";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

export function PreviewSheet() {
  const [previewUrl, setPreviewUrl] = useState();

  const getPreviewUrl = async () => {
    let { previewUrl } = await fetch("/api/get-report-preview-url", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res?.json());

    setPreviewUrl(previewUrl);
  };

  useEffect(() => {
    getPreviewUrl();
  }, []);

  return (
    <SheetContent className="min-w-[1000px]">
      <SheetHeader>
        <div className="flex flex-row gap-2">
          <Button>Print</Button>
          <Button variant="outline">PDF</Button>
        </div>
      </SheetHeader>
      <div className="grid gap-4 py-4 h-full">
        <iframe src={previewUrl} className="w-full h-full" />
      </div>
    </SheetContent>
  );
}
