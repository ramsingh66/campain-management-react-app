import { EventData, EventList } from "../model";

export enum ActionType {
  CHANGE_DATE,
}

export type Action = {
  type: ActionType.CHANGE_DATE;
  payload: Pick<EventData, "name" | "createdOn">;
};

export type State = EventList;
