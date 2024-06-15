import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { SalesData } from "@/api/mock";

type GraphProps = {
  data: SalesData[];
};

const monthsMap: { [key: string]: string } = {
  "01": "JAN",
  "02": "FEB",
  "03": "MAR",
  "04": "APR",
  "05": "MAY",
  "06": "JUN",
  "07": "JUL",
  "08": "AUG",
  "09": "SEP",
  "10": "OCT",
  "11": "NOV",
  "12": "DEC",
};

export const Graph = ({ data }: GraphProps) => {
  // const cleanedData = data.map((d): SalesData => {
  //   const monthNum = d.weekEnding.split("-")[1];

  //   return {
  //     ...d,
  //     weekEnding: monthsMap[monthNum],
  //   };
  // });

  return (
    <ResponsiveContainer height={250} width="100%">
      <LineChart data={data} height={250} width={730}>
        <XAxis dataKey="weekEnding" />
        <Tooltip />
        <Line
          dataKey="retailSales"
          dot={false}
          stroke="#5395e6"
          strokeWidth={2}
          type="monotone"
        />
        <Line
          dataKey="wholesaleSales"
          dot={false}
          stroke="#899cb3"
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
