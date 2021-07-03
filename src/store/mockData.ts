import { EventList } from "../model";
import { mortalCombat, nfsmw, pubgMobile, pubgPC, battleRoyale, gameEvil, realRacing } from '../icons';

const today = Date.now();

export const mockData: EventList = [{
    name: "Battle Royale",
    region: "US",
    createdOn: Date.parse('2021-09-11'),
    price: 1200,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: battleRoyale,
}, {
    name: "Game Evil",
    region: "US",
    createdOn: Date.parse('2021-09-12'),
    price: 1200,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: gameEvil,
}, {
    name: "PUBG Mobile",
    region: "US",
    createdOn: Date.parse('2021-09-10'),
    price: 1200,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: pubgMobile,
},
{
    name: "PUBG",
    region: "CA, FR",
    createdOn: Date.parse('2021-06-10'),
    price: 2500,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: pubgPC,
},
{
    name: "Mortal Combat",
    region: "FR",
    createdOn: today,
    price: 999,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: mortalCombat,
},
{
    name: "Real Racing",
    region: "FR",
    createdOn: today,
    price: 999,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: realRacing,
},
{
    name: "Need For Speed",
    region: "JP",
    createdOn: Date.parse('2021-05-10'),
    price: 700,
    csvUrl: "https://www.google.com",
    reportUrl: "https://www.google.com",
    imageUrl: nfsmw,
}
]
