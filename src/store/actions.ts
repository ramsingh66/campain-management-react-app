import { store } from "./store";
import { ActionType } from "./types";

export const changeEventDate = (eventName: string, createdOn: number) =>
  store.dispatch({
    type: ActionType.CHANGE_DATE,
    payload: { createdOn, name: eventName },
  });
