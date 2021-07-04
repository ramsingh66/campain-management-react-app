import moment from "moment";
import { EventData, EventList } from "../model";

/**
 * This function takes list of events , and devide the list into 3 parts;
 * @argument eventList: Array of Events
 *
 * @returns
 * prevEvents - events that were earlier than today's date
 * liveEvents - events that are exactly today
 * upcomingEvents - events tomorrow onwards
 */
export function getEventCategoryByTime(eventList: EventList) {
  const prevEvents: Array<EventData> = [];
  const liveEvents: Array<EventData> = [];
  const upcomingEvents: Array<EventData> = [];

  const start = moment().startOf("day").valueOf();
  const end = moment().endOf("day").valueOf();

  eventList.forEach((event) => {
    if (event.createdOn > end) {
      // event will start after today 11:59:59 PM

      upcomingEvents.push(event);
    } else if (event.createdOn >= start) {
      // event start time is on today's date

      liveEvents.push(event);
    } else {
      // event was earlier than Today midnight start 00:00:00 AM
      prevEvents.push(event);
    }
  });
  return {
    prevEvents,
    liveEvents,
    upcomingEvents,
  };
}
