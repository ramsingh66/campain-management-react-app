import { Tabs } from "../tabs";
import { Container,Header } from "./CampaignHome.styles";

export const CampaignHome = () => {
  return (
    <Container>
      <Header>Manage Campaigns</Header>
      <Tabs
        tabs={[
          { name: "Upcoming Campaigns", renderTab: () => "Upcoming" },
          { name: "Live Campaigns", renderTab: () => "Live" },
          { name: "Past Campaigns", renderTab: () => "Past" },
        ]}
      />
    </Container>
  );
};
