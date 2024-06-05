"use client";

import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

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
        // content: {
        //   invoice: {
        //     invoice_number: "2023-ABC-123456",
        //     date: "2023-11-03",
        //     due_date: "2023-11-17",
        //     bill_to: {
        //       company_name: "Tech Solutions Inc.",
        //       address: "123 Tech Street",
        //       city: "Innovate City",
        //       state: "Techsylvania",
        //       zip: "12345",
        //       country: "USA",
        //     },
        //     ship_to: {
        //       company_name: "Tech Solutions Inc.",
        //       address: "456 Solution Ave",
        //       city: "Progress Town",
        //       state: "Techsylvania",
        //       zip: "67890",
        //       country: "USA",
        //     },
        //     items: [
        //       {
        //         item_id: "CPU001",
        //         description: "Quad-core CPU 3.6 GHz",
        //         unit_price: 250,
        //         quantity: 2,
        //         subtotal: 500,
        //       },
        //       {
        //         item_id: "RAM002",
        //         description: "16GB DDR4 RAM",
        //         unit_price: 90,
        //         quantity: 4,
        //         subtotal: 360,
        //       },
        //       {
        //         item_id: "HDD003",
        //         description: "1TB SSD Hard Drive",
        //         unit_price: 150,
        //         quantity: 1,
        //         subtotal: 150,
        //       },
        //       {
        //         item_id: "GPU004",
        //         description: "Gaming Graphics Card",
        //         unit_price: 400,
        //         quantity: 1,
        //         subtotal: 400,
        //       },
        //       {
        //         item_id: "PSU005",
        //         description: "750W Power Supply Unit",
        //         unit_price: 80,
        //         quantity: 1,
        //         subtotal: 80,
        //       },
        //       {
        //         item_id: "CASE006",
        //         description: "Mid Tower Computer Case",
        //         unit_price: 120,
        //         quantity: 1,
        //         subtotal: 120,
        //       },
        //     ],
        //     subtotals: {
        //       items_total: 1610,
        //       tax_rate: 0.07,
        //       tax_amount: 112.7,
        //       shipping_fee: 42424242,
        //       discount: 0,
        //     },
        //     total_due: 1747.7,
        //     notes: "Thank you for your business!",
        //   },
        // },

        // invoiceItems: [
        //   {
        //     item_id: "CPU001",
        //     description: "Quad-core CPU 3.6 GHz",
        //     unit_price: 250,
        //     quantity: 2,
        //     subtotal: 500,
        //   },
        //   {
        //     item_id: "RAM002",
        //     description: "16GB DDR4 RAM",
        //     unit_price: 90,
        //     quantity: 4,
        //     subtotal: 360,
        //   },
        //   {
        //     item_id: "HDD003",
        //     description: "1TB SSD Hard Drive",
        //     unit_price: 150,
        //     quantity: 1,
        //     subtotal: 150,
        //   },
        //   {
        //     item_id: "GPU004",
        //     description: "Gaming Graphics Card",
        //     unit_price: 400,
        //     quantity: 1,
        //     subtotal: 400,
        //   },
        //   {
        //     item_id: "PSU005",
        //     description: "750W Power Supply Unit",
        //     unit_price: 80,
        //     quantity: 1,
        //     subtotal: 80,
        //   },
        //   {
        //     item_id: "CASE006",
        //     description: "Mid Tower Computer Case",
        //     unit_price: 120,
        //     quantity: 1,
        //     subtotal: 120,
        //   },
        // ],
      }),
    }).then((res) => res?.json());

    return tempDataId;
  };

  // useEffect(() => {
  //   getPreviewUrl();
  // }, []);

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
