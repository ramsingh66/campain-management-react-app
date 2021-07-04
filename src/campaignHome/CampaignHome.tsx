import { useEffect, useMemo, useState } from "react";
import { EventList } from "../model";
import { getMockData,subscribeToStore } from "../store";
import { Tabs } from "../tabs";
import { getEventCategoryByTime } from "../utils";
import { Container, Header } from "./CampaignHome.styles";
import { TabContent } from "./TabContent";

export const CampaignHome = () => {
  // Maybe add a refresh button that dispatch an action and will give initial data
  const [eventsList, setEventsList] = useState<EventList>(getMockData);

  useEffect(() => subscribeToStore(setEventsList), []);

  const tabsList = useMemo(() => {
    const { prevEvents, liveEvents, upcomingEvents } =
      getEventCategoryByTime(eventsList);
    return [
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
    ];
  }, [eventsList]);

  return (
    <Container>
      <Header>Manage Campaigns</Header>
      <Tabs tabs={tabsList} />
    </Container>
  );
};
