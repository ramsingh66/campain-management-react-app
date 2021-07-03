import { FunctionComponent, useMemo } from "react";
import { EventData } from "../../model";
import { Cell20Percent,Cell30Percent, Row } from "./Table.styles";

export const EventRow: FunctionComponent<EventData> = ({
  name,
  region,
  createdOn,
  duration,
  imageUrl,
  csvUrl,
  price,
  reportUrl,
}) => {
  const date = useMemo(()=> new Date(createdOn).toDateString(),[createdOn]);
  return (
  
    <Row>
      <Cell20Percent>{date}</Cell20Percent>
      <Cell30Percent>{name}</Cell30Percent>
      <Cell20Percent>{price}</Cell20Percent>
      <Cell30Percent>Rest Actions</Cell30Percent>

    </Row>
  );
};
