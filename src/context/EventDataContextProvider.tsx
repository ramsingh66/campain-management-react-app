import { FunctionComponent } from "react";
import { EventData } from "../model";
import { EventDataContext } from "./EventDataContext";

export const EventDataContextProvider: FunctionComponent<EventData> = ({
  children,
  ...rest
}) => {
  return (
    <EventDataContext.Provider value={{ ...rest }}>
      {children}
    </EventDataContext.Provider>
  );
};
