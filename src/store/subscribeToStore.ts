import { store } from "./store";
import { State } from "./types";

export function subscribeToStore(callback: (update: State) => void) {
    store.subscribe(() => callback(store.getState()))
}
