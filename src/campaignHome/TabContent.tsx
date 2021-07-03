import { FunctionComponent } from "react";
import { EventList } from "../model";
import { TableHeader } from "./components";
import { EventRow } from "./components";

type Props = {
  readonly eventList: EventList;
};

export const TabContent: FunctionComponent<Props> = ({ eventList }) => {
  return (
    <div>
      <TableHeader/>
      {eventList.map((eventData) => (
        <EventRow {...eventData} />
      ))}
    </div>
  );
};
