import { Card, CardContent } from "@/components/ui/card";

export default function BankTransactions() {
  return (
    <>
      <div className="flex gap-2">
        <Card className="w-[400px]">
          <CardContent>{/* <p>Card Content</p> */}</CardContent>
        </Card>

        <Card className="border w-full h-full rounded-md shadow-sm"></Card>
      </div>
    </>
  );
}
