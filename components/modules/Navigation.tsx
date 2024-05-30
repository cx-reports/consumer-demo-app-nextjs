import {
  BadgeDollarSign,
  CandlestickChart,
  FileSpreadsheet,
  FlaskConical,
  Landmark,
  LineChart,
  Ticket,
} from "lucide-react";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-6">
      <span className="mt-2 mb-1">Documents</span>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
      >
        <FileSpreadsheet className="h-4 w-4" />
        Invoices
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <FlaskConical className="h-4 w-4" />
        Lab Results
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Ticket className="h-4 w-4" />
        Tickets
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <LineChart className="h-4 w-4" />
        Trade
      </Link>

      <span className="mt-8 mb-1">Reports</span>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Landmark className="h-4 w-4" />
        Bank Transactions
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <BadgeDollarSign className="h-4 w-4" />
        Sales
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <CandlestickChart className="h-4 w-4" />
        Portfolio Valuation
      </Link>
    </nav>
  );
};
