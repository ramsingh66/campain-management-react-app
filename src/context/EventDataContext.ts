import { createContext } from "react";
import { EventData } from "../model";

// this is a fallback data ,when no data is given in a provider

const DEFAULT_DATA:EventData={
    name: "Battle Royale",
    region: "US",
    createdOn: Date.parse('2021-09-11'),
    price: 1200,
    csvUrl: "url",
    reportUrl: "https://www.google.com",
    imageUrl: 'battleRoyale',
}

export const EventDataContext = createContext<EventData>(DEFAULT_DATA)