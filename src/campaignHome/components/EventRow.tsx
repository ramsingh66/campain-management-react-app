import { FunctionComponent } from "react";
import { EventData } from "../../model";
import { ActionsCell } from "./ActionsCell";
import { CampaignNameCell } from "./CampaignNameCell";
import { CampaignDateCell } from "./CampaingnDateCell";
import { PricingCell } from "./PricingCell";
import { Row } from "./Table.styles";

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
      <ActionsCell csvUrl={csvUrl} reportUrl={reportUrl} />
    </Row>
  );
};
