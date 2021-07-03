import { FunctionComponent, useMemo } from "react";
import { EventData } from "../../model";
import { Cell20Percent, Cell30Percent, Row, Image,DateCell } from "./Table.styles";

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
  const startDate = useMemo(() => new Date(createdOn).toDateString(), [createdOn]);
  const todayDate = Date.now();

  const duratoinInDays = getDurationInfo(createdOn - todayDate);
  return (
    <DateCell>
      <span>{startDate}</span>
      <span className="duration">{duratoinInDays}</span>
    </DateCell>
  );
};

const DAY = 3600 * 1000 * 24;

// convertig a duration into days info.
// if absolyte duration is within 1 day, return now
// else return X days [ago/later] based on duration negative/positive

function getDurationInfo(pendingDuration: number): string {
  const days = Math.floor(Math.abs(pendingDuration / DAY));

  if (!days) {
    return "Now";
  }

  return `${days} Days ${pendingDuration > 0 ? "Later" : "Ago"}`;
}
