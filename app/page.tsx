import { DataTable } from "../components/modules/data-table";
import { columns } from "./invoices/columns";
import { data } from "./invoices/data";

export default function Home() {
  return (
    <DataTable
      columns={columns}
      data={data}
      usePreviewSheet={true}
      reportId={18627}
    />
  );
}
