import { render, queryByText, getByText } from "@testing-library/react";
import { CampaignHome } from "../campaignHome";

const NOW_MILLIS = Date.parse("2021-07-05");
const TOMORROW_MILLIS = Date.parse("2021-07-06");
const NEXT_WEEK_MILLIS = Date.parse("2021-07-12");
const PREV_WEEK_MILLIS = Date.parse("2021-06-28");

const mockEvents = [
  {
    name: "PUBG Mobile",
    region: "US",
    createdOn: NOW_MILLIS,
    price: 1100,
    csvUrl:
      "https://www.bluestacks.com/apps/action/pubg-mobile-international-version-on-pc.html",
    reportUrl:
      "https://www.bluestacks.com/apps/action/pubg-mobile-international-version-on-pc.html",
    imageUrl: "_",
  },
  {
    name: "PUBG",
    region: "CA, FR",
    createdOn: NEXT_WEEK_MILLIS,
    price: 2100,
    csvUrl: "https://www.pubg.com/en-us/",
    reportUrl: "https://www.pubg.com/en-us/",
    imageUrl: "_",
  },
  {
    name: "Mortal Combat",
    region: "FR",
    createdOn: PREV_WEEK_MILLIS,
    price: 899,
    csvUrl: "https://www.mortalkombat.com/",
    reportUrl: "https://www.mortalkombat.com/",
    imageUrl: "_",
  },
  {
    name: "Real Racing",
    region: "FR",
    createdOn: TOMORROW_MILLIS,
    price: 999,
    csvUrl: "https://www.ea.com/games/real-racing/real-racing-3",
    reportUrl: "https://www.ea.com/games/real-racing/real-racing-3",
    imageUrl: "_",
  },
];
jest.mock("../store", () => ({
  ...jest.requireActual("../store"),
  getMockData: () => mockEvents,
}));

test("should show 3 tabs for campaigns", () => {
  jest.spyOn(Date, "now").mockImplementation(() => NOW_MILLIS);

  const { container } = render(<CampaignHome />);

  expect(queryByText(container, "Upcoming Campaigns")).toBeTruthy();
  expect(queryByText(container, "Live Campaigns")).toBeTruthy();
  expect(queryByText(container, "Past Campaigns")).toBeTruthy();

  // verify campaigns shown in correct tab

  expect(queryByText(container, "7 Days Later")).toBeTruthy();
  expect(queryByText(container, "1 Days Later")).toBeTruthy();
  expect(queryByText(container, "PUBG")).toBeTruthy();
  expect(queryByText(container, "Real Racing")).toBeTruthy();

  getByText(container, "Live Campaigns").click();
  expect(queryByText(container, "Today")).toBeTruthy();
  expect(queryByText(container, "PUBG Mobile")).toBeTruthy();

  expect(queryByText(container, "1 Days Later")).toBeFalsy();

  getByText(container, "Past Campaigns").click();

  expect(queryByText(container, "7 Days Ago")).toBeTruthy();
  expect(queryByText(container, "Mortal Combat")).toBeTruthy();
});
