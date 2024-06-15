"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchProductData,
  selectAllProducts,
} from "../lib/features/product/productSlice";

import styles from "./styles.module.scss";

import { AppDispatch } from "@/lib/store";
import { Graph } from "@/components/graph";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(selectAllProducts)[0];

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return product ? (
    <div className={styles.parentContainer}>
      <div className={styles.leftPanelContainer}>
        <Card className={styles.leftPanelCard}>
          <CardBody>
            <img alt="hello" height="auto" src={product.image} width="100%" />
          </CardBody>
          <CardHeader className={styles.cardHeader}>{product.title}</CardHeader>
          <p>{product.subtitle}</p>
          <Divider />
          <div className={styles.tagsContainer}>
            {product.tags.map((tag, i) => (
              <Chip key={i} color="default" variant="bordered">
                {tag}
              </Chip>
            ))}
          </div>
          <Divider />
        </Card>
      </div>
      <div className={styles.rightPanelContainer}>
        <Card>
          <CardHeader>Retail Sales</CardHeader>
          <Graph data={product.sales} />
        </Card>
        <Card className={styles.tableCard}>
          <Table>
            <TableHeader>
              {Object.keys(product.sales[0]).map((key) => (
                <TableColumn key={key} allowsSorting>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </TableColumn>
              ))}
            </TableHeader>
            <TableBody items={product.sales}>
              {(item) => (
                <TableRow key={item.weekEnding}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  ) : null;
}
