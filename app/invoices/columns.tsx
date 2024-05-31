import { ColumnDef } from "@tanstack/react-table";

export type Invoice = {
  invoice_number: string;
  date: string;
  due_date: string;
  total_due: number;
  notes: string;

  bill_to: {
    company_name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };

  ship_to: {
    company_name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };

  items: Item[];

  subtotals: {
    items_total: number;
    tax_rate: number;
    tax_amount: number;
    shipping_fee: number;
    discount: number;
  };
};

export type Item = {
  item_id: string;
  description: string;
  unit_price: number;
  quantity: number;
  subtotal: number;
};

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoice_number",
    header: "Invoice Number",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
  },
  {
    accessorKey: "total_due",
    header: "Total Due",
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
];
