import { ActionsCell } from "./ActionsCell";
import { CampaignNameCell } from "./CampaignNameCell";
import { CampaignDateCell } from "./CampaingnDateCell";
import { PricingCell } from "./PricingCell";
import { Row } from "./Table.styles";

export const EventRow = () => {
  return (
    <Row>
      <CampaignDateCell />
      <CampaignNameCell />
      <PricingCell />
      <ActionsCell />
    </Row>
  );
};
