import moment from 'moment'
import { EventData, EventList } from "../model";

export function getEventCategoryByTime (eventList:EventList){
    const prevEvents:Array<EventData>=[];
    const liveEvents:Array<EventData>=[];
    const upcomingEvents:Array<EventData>=[];
    
    const start =moment().startOf('day').valueOf();
    const end =moment().endOf('day').valueOf();
    
    eventList.forEach(event=> {
      if(event.createdOn > end){
        upcomingEvents.push(event);
      } else if(event.createdOn>= start){
        liveEvents.push(event);
      }else{
        prevEvents.push(event)
      }
    });
    return {prevEvents,liveEvents,upcomingEvents}
  }