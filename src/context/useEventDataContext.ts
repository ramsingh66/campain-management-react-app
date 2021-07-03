import { useContext } from "react";
import { EventDataContext } from "./EventDataContext";

export const useEventDataContext = () => useContext(EventDataContext);