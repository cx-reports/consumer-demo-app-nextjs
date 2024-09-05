"use client";

import { Combobox } from "@/components/modules/combo-box";
import DatePicker from "@/components/modules/date-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { accounts } from "./accounts";
import { AccountModel } from "./accounts";

const AccountsList = [
  {
    value: "123456789",
    label: "John Doe",
  },
  {
    value: "987654321",
    label: "Jane Smith",
  },
  {
    value: "123123123",
    label: "Alice Johnson",
  },
  {
    value: "321321321",
    label: "Bob Brown",
  },
  {
    value: "456456456",
    label: "Carol White",
  },
];

export default function BankTransactions() {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [selectedAccount, setSelectedAccount] = useState<string>();
  const [account, setAccount] = useState<AccountModel>();
  const [previewUrl, setPreviewUrl] = useState<string>();

  const getPreviewUrl = async () => {
    let { previewUrl } = await fetch(
      `/api/get-report-preview-url?reportId=1628&params=${encodeURIComponent(
        JSON.stringify({ dateFrom, dateTo })
      )}&data=${encodeURIComponent(JSON.stringify({ account }))}`
    ).then((res) => res?.json());

    setPreviewUrl(`${previewUrl}&hidePrintButton=true`);
  };

  const getReportPdfFile = async () => {
    let { previewUrl } = await fetch(
      `/api/get-report-preview-url?reportId=1628&params=${encodeURIComponent(
        JSON.stringify({ dateFrom, dateTo })
      )}&data=${encodeURIComponent(JSON.stringify({ account }))}`
    ).then((res) => res?.json());

    window.open(previewUrl);
  };

  useEffect(() => {
    accounts.find((acc) => {
      if (acc.accountNumber == selectedAccount) {
        setAccount(acc);
      }
    });
  }, [selectedAccount]);

  return (
    <>
      <div className="flex md:flex-row flex-col gap-2 h-full">
        <Card className="max-w-[400px] w-full pt-4">
          <CardContent className="p-3 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="from-date">Date from:</Label>
              <DatePicker id="from-date" setDateTo={setDateFrom} />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="to-date">Date to:</Label>
              <DatePicker id="to-date" setDateTo={setDateTo} />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="account">Account:</Label>
              <Combobox
                id="account"
                setAccount={setSelectedAccount}
                items={AccountsList}
              />
            </div>

            <div className="flex flex-row gap-2 mt-4">
              <Button
                onClick={getPreviewUrl}
                disabled={!account || !dateFrom || !dateTo}
              >
                Preview
              </Button>
              <Button
                onClick={getReportPdfFile}
                variant="outline"
                disabled={!account || !dateFrom || !dateTo}
              >
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border w-full h-full rounded-md shadow-sm">
          <iframe src={previewUrl} className="w-full h-full" />
        </Card>
      </div>
    </>
  );
}
