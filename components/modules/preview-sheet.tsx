import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useRef, useState } from "react";

interface PreviewSheetProps {
  reportId?: number;
  content?: any;
}

export function PreviewSheet({ reportId, content }: PreviewSheetProps) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const previewIframe = useRef<HTMLIFrameElement>(null);

  const getPreviewUrl = async () => {
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

    setPreviewUrl(`${previewUrl}&hidePrintButton=true`);
  };

  const getReportPdfFIle = async () => {
    window.open(
      `/api/get-report-pdf?data=${encodeURIComponent(
        JSON.stringify(content)
      )}&reportId=${reportId}`
    );
  };

  const printPdfFile = () => {
    if (!previewIframe.current) return;
    previewIframe.current.contentWindow?.print();
  };

  return (
    <SheetContent
      className="min-w-[1000px]"
      onOpenAutoFocus={(e) => getPreviewUrl()}
    >
      <SheetHeader>
        <div className="flex flex-row gap-2">
          <Button onClick={printPdfFile}>Print</Button>
          <Button variant="outline" onClick={getReportPdfFIle}>
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
