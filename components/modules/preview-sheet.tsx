import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader } from "@/components/ui/sheet";

export function PreviewSheet() {
  return (
    <SheetContent className="min-w-[1000px]">
      <SheetHeader>
        <div className="flex flex-row gap-2">
          <Button>Print</Button>
          <Button variant="outline">PDF</Button>
        </div>
      </SheetHeader>
      <div className="grid gap-4 py-4"></div>
    </SheetContent>
  );
}
