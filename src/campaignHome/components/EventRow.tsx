import { FunctionComponent } from "react";
import { EventData } from "../../model";
import { CampaignNameCell } from "./CampaignNameCell";
import { CampaignDateCell } from "./CampaingnDateCell";
import { PricingCell } from "./PricingCell";
import { Cell30Percent, Row } from "./Table.styles";

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
      <CampaignDateCell createdOn={createdOn} />
      <CampaignNameCell name={name} imageUrl={imageUrl} region={region} />
      <PricingCell
        price={price}
        imageUrl={imageUrl}
        name={name}
        region={region}
      />
      <Cell30Percent>Rest Actions</Cell30Percent>
    </Row>
  );
};
