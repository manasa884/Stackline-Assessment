import data from "./stackline_frontend_assessment_data_2021.json";

export type SalesData = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type ResponseData = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: number;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: SalesData[];
}[];

/**
 * API call to fetch product data from api (mocked)
 * @returns product sales data
 */
export const getProductData = async (): Promise<ResponseData> => {
  return Promise.resolve(data);
};
