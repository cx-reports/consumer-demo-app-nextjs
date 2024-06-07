"use client";

import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";

interface PreviewSheetProps {
  reportId?: number;
  content?: any;
  onCloseAutoFocus?: () => void;
}

export function PreviewSheet({
  reportId,
  content,
  onCloseAutoFocus,
}: PreviewSheetProps) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const previewIframe = useRef<HTMLIFrameElement>(null);

  const getPreviewUrl = async () => {
    console.log("render");
    let { previewUrl } = await fetch(
      `/api/get-report-preview-url?data=${encodeURIComponent(
        JSON.stringify(content)
      )}&reportId=${reportId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res?.json());

    console.log(previewUrl);
    setPreviewUrl(`${previewUrl}&hidePrintButton=true`);
  };

  const getReportPdfFile = async () => {
    window.open(
      `/api/get-report-pdf?data=${encodeURIComponent(
        JSON.stringify(content)
      )}&reportId=${reportId}`
    );
  };

  const printPdfFile = () => {
    if (!previewIframe.current) return;
    previewIframe.current.contentWindow?.postMessage("print", "*");
  };

  useEffect(() => {
    getPreviewUrl();

    window.addEventListener("message", (event) => {
      if (event.data === "print") {
        previewIframe?.current?.contentWindow?.print();
      } else {
        return;
      }
    });
  }, []);

  return (
    <SheetContent
      className="min-w-[1000px]"
      // onOpenAutoFocus={(e) => getPreviewUrl()}
      onCloseAutoFocus={onCloseAutoFocus}
    >
      <SheetHeader>
        <div className="flex flex-row gap-2">
          <Button onClick={() => printPdfFile()}>Print</Button>
          <Button variant="outline" onClick={getReportPdfFile}>
            PDF
          </Button>
        </div>
      </SheetHeader>
      <div className="grid h-full gap-4 py-4">
        <iframe
          src={previewUrl}
          className="w-full h-full"
          ref={previewIframe}
        />
      </div>
    </SheetContent>
  );
}
