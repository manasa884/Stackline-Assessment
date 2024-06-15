"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchProductData,
  selectAllProducts,
} from "../lib/features/product/productSlice";

import styles from "./styles.module.scss";

import { AppDispatch } from "@/lib/store";
import { Graph } from "@/components/graph";
import { Table } from "@/components/table";

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
          <Table data={product.sales} />
        </Card>
      </div>
    </div>
  ) : null;
}
