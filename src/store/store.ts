import { createStore, Reducer, Store } from "redux";
import { mockData } from "./mockData";
import { Action, ActionType, State } from "./types";

const reducer: Reducer<State, Action> = (state: State = mockData, action: Action) => {
    switch (action.type) {
        case ActionType.CHANGE_DATE:
            const { name: actionName, createdOn } = action.payload;
            return state.map(eventData =>
                eventData.name === actionName ? { ...eventData, createdOn } : eventData
            )
        default:
            return state;
    }
}


export const store: Store<State, Action> = createStore<State, Action, any, any>(reducer);

