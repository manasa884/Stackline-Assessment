import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";

import styles from "./styles.module.scss";

import { ResponseData } from "@/api/mock";

type Response = ResponseData[0];

type ProductSummaryCardProps = {
  data: Pick<Response, "image" | "title" | "subtitle" | "tags">;
};

export const ProductSummaryCard = ({ data }: ProductSummaryCardProps) => {
  return (
    <Card className={styles.leftPanelCard}>
      <img alt="hello" height="auto" src={data.image} width="100%" />
      <CardHeader className={styles.cardHeader}>{data.title}</CardHeader>
      <CardBody className={styles.cardBody}>
        <p>{data.subtitle}</p>
        <Divider />
        <div className={styles.tagsContainer}>
          {data.tags.map((tag, i) => (
            <Chip key={i} color="default" variant="bordered">
              {tag}
            </Chip>
          ))}
        </div>
        <Divider />
      </CardBody>
    </Card>
  );
};
