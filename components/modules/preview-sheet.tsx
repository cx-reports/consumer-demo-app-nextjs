import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useState } from "react";

interface PreviewSheetProps {
  reportId?: number;
  content?: any;
}

export function PreviewSheet({ reportId, content }: PreviewSheetProps) {
  const [previewUrl, setPreviewUrl] = useState<string>();

  const getPreviewUrl = async () => {
    const tempDataId = await pushTemporaryData();

    let { previewUrl } = await fetch(
      `/api/get-report-preview-url?tempDataId=${tempDataId}&reportId=${reportId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res?.json());

    setPreviewUrl(`${previewUrl}&hidePrintButton=true`);
  };

  const getDownloadUrl = async () => {
    const tempDataId = await pushTemporaryData();

    let downloadUrl = await fetch(
      `/api/get-report-pdf-download-url?tempDataId=${tempDataId}&reportId=${reportId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res?.json());

    return downloadUrl;
  };

  const downloadPdfFIle = async () => {
    let downloadUrl = await getDownloadUrl();
    window.open(downloadUrl.downloadUrl);
  };

  const pushTemporaryData = async () => {
    console.log(content);
    let { tempDataId } = await fetch("/api/push-temporary-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: {
          ...content,
        },
      }),
    }).then((res) => res?.json());

    return tempDataId;
  };

  return (
    <SheetContent
      className="min-w-[1000px]"
      onOpenAutoFocus={(e) => getPreviewUrl()}
    >
      <SheetHeader>
        <div className="flex flex-row gap-2">
          <Button>Print</Button>
          <Button variant="outline" onClick={downloadPdfFIle}>
            PDF
          </Button>
        </div>
      </SheetHeader>
      <div className="grid h-full gap-4 py-4">
        <iframe src={previewUrl} className="w-full h-full" />
      </div>
    </SheetContent>
  );
}
