import { useMemo } from "react";
import { mockData } from "../store";
import { Tabs } from "../tabs";
import { getEventCategoryByTime } from "../utils";
import { Container, Header } from "./CampaignHome.styles";
import { TabContent } from "./TabContent";

export const CampaignHome = () => {
  const { prevEvents, liveEvents, upcomingEvents } = useMemo(() => {
    return getEventCategoryByTime(mockData);

    // deps will be added with live/updating data
  }, []);

  return (
    <Container>
      <Header>Manage Campaigns</Header>
      <Tabs
        tabs={[
          {
            name: "Upcoming Campaigns",
            renderTab: () => <TabContent eventList={upcomingEvents} />,
          },
          {
            name: "Live Campaigns",
            renderTab: () => <TabContent eventList={liveEvents} />,
          },
          {
            name: "Past Campaigns",
            renderTab: () => <TabContent eventList={prevEvents} />,
          },
        ]}
      />
    </Container>
  );
};
