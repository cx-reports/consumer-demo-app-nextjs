"use client";

import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

export function PreviewSheet() {
  const [previewUrl, setPreviewUrl] = useState<string>();

  const getPreviewUrl = async () => {
    const tempDataId = await pushTemporaryData();

    let { previewUrl } = await fetch(
      `/api/get-report-preview-url?tempDataId=${tempDataId}`,
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
      `/api/get-report-pdf-download-url?tempDataId=${tempDataId}`,
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
    let { tempDataId } = await fetch("/api/push-temporary-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:
          "{\n  \u0022invoice_number\u0022: \u00222023-ABC-123456\u0022,\n  \u0022date\u0022: \u00222023-11-03\u0022,\n  \u0022due_date\u0022: \u00222023-11-17\u0022,\n  \u0022bill_to\u0022: {\n    \u0022company_name\u0022: \u0022Tech Solutions Inc.\u0022,\n    \u0022address\u0022: \u0022123 Tech Street\u0022,\n    \u0022city\u0022: \u0022Innovate City\u0022,\n    \u0022state\u0022: \u0022Techsylvania\u0022,\n    \u0022zip\u0022: \u002212345\u0022,\n    \u0022country\u0022: \u0022USA\u0022\n  },\n  \u0022ship_to\u0022: {\n    \u0022company_name\u0022: \u0022Tech Solutions Inc.\u0022,\n    \u0022address\u0022: \u0022456 Solution Ave\u0022,\n    \u0022city\u0022: \u0022Progress Town\u0022,\n    \u0022state\u0022: \u0022Techsylvania\u0022,\n    \u0022zip\u0022: \u002267890\u0022,\n    \u0022country\u0022: \u0022USA\u0022\n  },\n  \u0022items\u0022: [\n    {\n      \u0022item_id\u0022: \u0022CPU001\u0022,\n      \u0022description\u0022: \u0022Quad-core CPU 3.6 GHz\u0022,\n      \u0022unit_price\u0022: 250.00,\n      \u0022quantity\u0022: 2,\n      \u0022subtotal\u0022: 500.00\n    },\n    {\n      \u0022item_id\u0022: \u0022RAM002\u0022,\n      \u0022description\u0022: \u002216GB DDR4 RAM\u0022,\n      \u0022unit_price\u0022: 90.00,\n      \u0022quantity\u0022: 4,\n      \u0022subtotal\u0022: 360.00\n    },\n    {\n      \u0022item_id\u0022: \u0022HDD003\u0022,\n      \u0022description\u0022: \u00221TB SSD Hard Drive\u0022,\n      \u0022unit_price\u0022: 150.00,\n      \u0022quantity\u0022: 1,\n      \u0022subtotal\u0022: 150.00\n    },\n    {\n      \u0022item_id\u0022: \u0022GPU004\u0022,\n      \u0022description\u0022: \u0022Gaming Graphics Card\u0022,\n      \u0022unit_price\u0022: 400.00,\n      \u0022quantity\u0022: 1,\n      \u0022subtotal\u0022: 400.00\n    },\n    {\n      \u0022item_id\u0022: \u0022PSU005\u0022,\n      \u0022description\u0022: \u0022750W Power Supply Unit\u0022,\n      \u0022unit_price\u0022: 80.00,\n      \u0022quantity\u0022: 1,\n      \u0022subtotal\u0022: 80.00\n    },\n    {\n      \u0022item_id\u0022: \u0022CASE006\u0022,\n      \u0022description\u0022: \u0022Mid Tower Computer Case\u0022,\n      \u0022unit_price\u0022: 120.00,\n      \u0022quantity\u0022: 1,\n      \u0022subtotal\u0022: 120.00\n    }\n  ],\n  \u0022subtotals\u0022: {\n    \u0022items_total\u0022: 1610.00,\n    \u0022tax_rate\u0022: 0.07,\n    \u0022tax_amount\u0022: 112.70,\n    \u0022shipping_fee\u0022: 25.00,\n    \u0022discount\u0022: 0.00\n  },\n  \u0022total_due\u0022: 1747.70,\n  \u0022notes\u0022: \u0022Thank you for your business!\u0022\n}",
      }),
    }).then((res) => res?.json());

    return tempDataId;
  };

  useEffect(() => {
    getPreviewUrl();
  }, []);

  return (
    <SheetContent className="min-w-[1000px]">
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
