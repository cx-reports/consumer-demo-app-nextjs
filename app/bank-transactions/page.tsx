"use client";
import { Combobox } from "@/components/modules/combo-box";
import DatePicker from "@/components/modules/date-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useEffect, useState } from "react";

export default function BankTransactions() {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [account, setAccount] = useState<string>();
  const [url, setUrl] = useState<string>();

  const getPreviewUrl = async () => {
    let { previewUrl } = await fetch(
      `/api/get-report-preview-url?reportId=18628`
    ).then((res) => res?.json());
    console.log(previewUrl);
    setUrl(`${previewUrl}&hidePrintButton=true`);
  };

  const getReportPdfFile = async () => {
    window.open(`/api/get-report-pdf?reportId=18628`);
  };

  // useEffect(() => {
  //   console.log(`From date ${fromDate}`);
  //   console.log(`To date ${toDate}`);
  //   console.log(`account ${account}`);
  // }, [fromDate, toDate, account]);

  return (
    <>
      <div className="flex gap-2 h-full">
        <Card className="w-[400px]">
          <CardContent className="p-3 flex flex-col gap-2">
            <DatePicker setFromDate={setFromDate} />
            <DatePicker setToDate={setToDate} />
            <Combobox setAccount={setAccount} />

            <div className="flex flex-row gap-2 mt-4">
              <Button onClick={getPreviewUrl}>Preview</Button>
              <Button onClick={getReportPdfFile} variant="outline">
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border w-full h-full rounded-md shadow-sm">
          <iframe src={url} className="w-full h-full" />
        </Card>
      </div>
    </>
  );
}
