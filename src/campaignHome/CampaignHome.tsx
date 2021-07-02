import { Tabs } from "../tabs";

export const CampaignHome = () => {
  return (
    <div>
      Manage Campaigns
      <Tabs
        tabs={[
          { name: "Upcoming Campaigns", renderTab: () => "Upcoming" },
          { name: "Live Campaigns", renderTab: () => "Live" },
          { name: "Past Campaigns", renderTab: () => "Past" },
        ]}
      />
    </div>
  );
};
