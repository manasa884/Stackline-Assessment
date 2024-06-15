import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { SalesData } from "@/api/mock";

type GraphProps = {
  data: SalesData[];
};

export const Graph = ({ data }: GraphProps) => {
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
