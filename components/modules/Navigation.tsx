"use client";

import clsx from "clsx";
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
import { usePathname } from "next/navigation";

// TODO Navigation
// interface NavigationItemModel {
//   href: string;
//   text: string;
// }

// interface NavigationItemsModel {
//   title?: string;
//   items: NavigationItemModel[];
// }

// const navigationItems: NavigationItemsModel[] = [
//   {
//     title: "Documents",
//     items: [
//       {
//         href: "/",
//         text: "Invoices",
//       },
//       {
//         href: "/lab-results",
//         text: "Lab Results",
//       },
//       {
//         href: "/tickets",
//         text: "Tickets",
//       },
//       {
//         href: "/trade",
//         text: "Trade",
//       },
//     ],
//   },
//   {
//     title: "Reports",
//     items: [
//       {
//         href: "/bank-transactions",
//         text: "Bank Transactions",
//       },
//       {
//         href: "/sales",
//         text: "Sales",
//       },
//       {
//         href: "/portfolio-valuation",
//         text: "Portfolio Valuation",
//       },
//     ],
//   },
// ];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-6">
      <span className="mt-2 mb-1">Documents</span>
      <Link
        href="/"
        // className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/",
        })}
      >
        <FileSpreadsheet className="h-4 w-4" />
        Invoices
      </Link>
      <Link
        href="/lab-results"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/lab-results",
        })}
      >
        <FlaskConical className="h-4 w-4" />
        Lab Results
      </Link>
      <Link
        href="/tickets"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/tickets",
        })}
      >
        <Ticket className="h-4 w-4" />
        Tickets
      </Link>
      <Link
        href="/trade"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/trade",
        })}
      >
        <LineChart className="h-4 w-4" />
        Trade
      </Link>

      <span className="mt-8 mb-1">Reports</span>
      <Link
        href="/bank-transactions"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/bank-transactions",
        })}
      >
        <Landmark className="h-4 w-4" />
        Bank Transactions
      </Link>
      <Link
        href="/sales"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/sales",
        })}
      >
        <BadgeDollarSign className="h-4 w-4" />
        Sales
      </Link>
      <Link
        href="/portfolio-valuation"
        className={clsx({
          "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
            true,
          "bg-muted text-primary": pathname == "/portfolio-valuation",
        })}
      >
        <CandlestickChart className="h-4 w-4" />
        Portfolio Valuation
      </Link>
    </nav>
  );
};
