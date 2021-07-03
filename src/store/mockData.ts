import { EventList } from "../model";
import { mortalCombat, nfsmw, pubgMobile, pubgPC, battleRoyale, gameEvil, realRacing } from '../icons';

const today = Date.now();

export const mockData: EventList = [{
    name: "Battle Royale",
    region: "US",
    createdOn: Date.parse('2021-09-11'),
    price: 1200,
    csvUrl: "https://www.gameflare.com/battle-royale-games/",
    reportUrl: "https://www.gameflare.com/battle-royale-games/",
    imageUrl: battleRoyale,
}, {
    name: "Game Evil",
    region: "US",
    createdOn: Date.parse('2021-09-12'),
    price: 1200,
    csvUrl: "https://evilnun-game.com/",
    reportUrl: "https://evilnun-game.com/",
    imageUrl: gameEvil,
}, {
    name: "PUBG Mobile",
    region: "US",
    createdOn: Date.parse('2021-09-10'),
    price: 1200,
    csvUrl: "https://www.bluestacks.com/apps/action/pubg-mobile-international-version-on-pc.html",
    reportUrl: "https://www.bluestacks.com/apps/action/pubg-mobile-international-version-on-pc.html",
    imageUrl: pubgMobile,
},
{
    name: "PUBG",
    region: "CA, FR",
    createdOn: Date.parse('2021-06-10'),
    price: 2500,
    csvUrl: "https://www.pubg.com/en-us/",
    reportUrl: "https://www.pubg.com/en-us/",
    imageUrl: pubgPC,
},
{
    name: "Mortal Combat",
    region: "FR",
    createdOn: today,
    price: 999,
    csvUrl: "https://www.mortalkombat.com/",
    reportUrl: "https://www.mortalkombat.com/",
    imageUrl: mortalCombat,
},
{
    name: "Real Racing",
    region: "FR",
    createdOn: today,
    price: 999,
    csvUrl: "https://www.ea.com/games/real-racing/real-racing-3",
    reportUrl: "https://www.ea.com/games/real-racing/real-racing-3",
    imageUrl: realRacing,
},
{
    name: "Need For Speed",
    region: "JP",
    createdOn: Date.parse('2021-05-10'),
    price: 700,
    csvUrl: "https://need-for-speed-most-wanted-demo.en.softonic.com/",
    reportUrl: "https://need-for-speed-most-wanted-demo.en.softonic.com/",
    imageUrl: nfsmw,
}
]
