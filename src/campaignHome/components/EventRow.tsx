import { FunctionComponent, useMemo } from "react";
import { EventData } from "../../model";
import { getDurationText } from "../../utils";
import {
  Cell20Percent,
  Cell30Percent,
  Row,
  Image,
  DateCell,
} from "./Table.styles";

export const EventRow: FunctionComponent<EventData> = ({
  name,
  region,
  createdOn,
  imageUrl,
  csvUrl,
  price,
  reportUrl,
}) => {
  return (
    <Row>
      <DateAndDuration createdOn={createdOn} />
      <CampaignCell name={name} imageUrl={imageUrl} region={region} />
      <Cell20Percent>{price}</Cell20Percent>
      <Cell30Percent>Rest Actions</Cell30Percent>
    </Row>
  );
};

const CampaignCell: FunctionComponent<
  Pick<EventData, "name" | "imageUrl" | "region">
> = ({ name, imageUrl, region }) => {
  return (
    <Cell30Percent>
      <Image src={imageUrl} alt="</>" />
      <div className="name_region">
        <span>{name}</span>
        <span className="region">{region}</span>
      </div>
    </Cell30Percent>
  );
};

const DateAndDuration: FunctionComponent<Pick<EventData, "createdOn">> = ({
  createdOn,
}) => {
  const startDate = useMemo(
    () => new Date(createdOn).toDateString(),
    [createdOn]
  );

  const duratoinInDays = getDurationText(createdOn);
  return (
    <DateCell>
      <span>{startDate}</span>
      <span className="duration">{duratoinInDays}</span>
    </DateCell>
  );
};
