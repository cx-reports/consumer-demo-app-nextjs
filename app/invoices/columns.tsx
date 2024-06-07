import { ColumnDef } from "@tanstack/react-table";

export interface CompanyDataModel {
  company_name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ItemModel {
  item_id: string;
  description: string;
  unit_price: number;
  quantity: number;
  subtotal: number;
}

export interface SubtotalModel {
  items_total: number;
  tax_rate: number;
  tax_amount: number;
  shipping_fee: number;
  discount: number;
}

export interface Invoice {
  invoice_number: string;
  date: string;
  due_date: string;
  total_due: number;
  notes: string;

  bill_to: CompanyDataModel;
  ship_to: CompanyDataModel;

  items: ItemModel[];
  subtotals: SubtotalModel;
}

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "bill_to.company_name",
    header: "Client",
  },
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
