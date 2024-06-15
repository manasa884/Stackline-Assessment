import {
  Table as NextTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

import { SalesData } from "@/api/mock";

type TableProps = {
  data: SalesData[];
};

export const Table = ({ data }: TableProps) => {
  return (
    <NextTable>
      <TableHeader>
        {Object.keys(data[0]).map((key) => (
          <TableColumn key={key} allowsSorting>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.weekEnding}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </NextTable>
  );
};
