"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { PreviewSheet } from "./preview-sheet";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  usePreviewSheet?: boolean;
  reportId?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  usePreviewSheet = true,
  reportId,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [content, setContent] = useState<any>();
  const [showPreviewSheet, setShowPreviewSheet] = useState<boolean>(false);

  return (
    <Sheet>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            <>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <>
                    <SheetTrigger
                      onClick={() => {
                        setShowPreviewSheet(true);
                        setContent({ invoice: data[row.index] });
                      }}
                      asChild
                      disabled={!usePreviewSheet}
                    >
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                        className="cursor-pointer"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    </SheetTrigger>
                  </>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </>
          </TableBody>
        </Table>
      </div>

      {showPreviewSheet && (
        <PreviewSheet
          reportId={reportId}
          content={content}
          onCloseAutoFocus={() => setShowPreviewSheet(false)}
        />
      )}
    </Sheet>
  );
}
