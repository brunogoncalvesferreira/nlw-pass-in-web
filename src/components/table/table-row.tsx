import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<'tr'> {}

export function TableRow(props : TableCellProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props}/>
  )
}