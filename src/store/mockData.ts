import { EventList } from "../model";

const DAY =1000 * 3600*24

export const mockData: EventList = [{
    name: "Test Whatsapp",
    region: "US",
    createdOn: Date.parse('2021-08-10'),
    price: 100,
    csvUrl: "Some CSV link for Whatsapp",
    reportUrl: "Some report link for Whatsapp",
    imageUrl: "Some image url of the campaign",
    duration: DAY*30
},
{
    name: "Super Jewels Quest",
    region: "CA, FR",
    createdOn: Date.parse('2021-06-10'),
    price: 123,
    csvUrl: "Some CSV link for Super Jewels Quest",
    reportUrl: "Some report link for Super Jewels Ques",
    duration: DAY*30,
    imageUrl: "Some image url of the campaign",
},
{
    name: "Mole Slayer",
    region: "FR",
    createdOn: Date.parse('2021-07-10'),
    price: 123,
    csvUrl: "Some CSV link for Mole Slayer",
    reportUrl: "Some report link for Mole Slayer",
    imageUrl: "Some image url of the campaign",
    duration: DAY*30
},
{
    name: "Mancala Mix",
    region: "JP",
    createdOn: Date.parse('2021-05-10'),
    price: 123,
    csvUrl: "Some CSV link for Mancala Mix",
    reportUrl: "Some report link for Mancala Mix",
    duration: DAY*30,
    imageUrl: "Some image url of the campaign",
}
]
