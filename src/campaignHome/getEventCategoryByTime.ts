import { EventData, EventList } from "../model";

export function getEventCategoryByTime (eventList:EventList){
    const prevEvents:Array<EventData>=[];
    const liveEvents:Array<EventData>=[];
    const upcomingEvents:Array<EventData>=[];
    
    const currentTime = Date.now();
    
    eventList.forEach(event=> {
      if(event.createdOn > currentTime){
        upcomingEvents.push(event);
      } else if(event.createdOn+ event.duration > currentTime){
        liveEvents.push(event);
      }else{
        prevEvents.push(event)
      }
    });
    return {prevEvents,liveEvents,upcomingEvents}
  }