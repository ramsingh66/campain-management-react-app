import moment from "moment";

const DAY = 3600 * 1000 * 24;

// convertig a duration into days info.
// if event start date if within today, return "Today"
// else return X days [ago/later] based on duration future/past

export function getDurationText(eventStartMillis: number): string {
    const start = moment().startOf('day').valueOf();
    const end = moment().endOf('day').valueOf();

    if (eventStartMillis > end) {
        // event in future -> time = eventTime-todayStart
        // i.e event is next day at 1 AM an currently time is 11 PM , we should see 1 Day later
        const daysPending = (Math.floor((eventStartMillis - start) / DAY));
        return `${daysPending} Days Later`
    }
    if (eventStartMillis >= start) {
        return "Today";
    }

    // event in past -> time = todayEnd-eventStart
        // i.e event was yeaterday 11 PM , and current time is 1 AM we should see 1 Day Ago
    const daysAgo = Math.floor((end - eventStartMillis) / DAY);

    return `${daysAgo} Days Ago`;
}
