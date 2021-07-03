import { FunctionComponent } from "react";
import { EventDataContextProvider } from "../context";
import { EventList } from "../model";
import { TableHeader } from "./components";
import { EventRow } from "./components";

type Props = {
  readonly eventList: EventList;
};

export const TabContent: FunctionComponent<Props> = ({ eventList }) => {
  return (
    <div>
      <TableHeader />
      {eventList.map((eventData) => (
        <EventDataContextProvider {...eventData} key={eventData.name}>
          <EventRow />
        </EventDataContextProvider>
      ))}
    </div>
  );
};
