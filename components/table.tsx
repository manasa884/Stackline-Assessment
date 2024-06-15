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
  const formattedData = data.map((d) => ({
    ...d,
    // Add dollar signs to relevant categories
    retailSales: "$" + d.retailSales,
    wholesaleSales: "$" + d.wholesaleSales,
    retailerMargin: "$" + d.retailerMargin,
  }));

  return (
    <NextTable>
      <TableHeader>
        {Object.keys(data[0]).map((key) => (
          <TableColumn key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={formattedData}>
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
