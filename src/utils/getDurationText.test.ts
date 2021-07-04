import { getDurationText } from "./getDurationText";


const NOW_MILLIS = Date.parse('2021-07-05');
const TOMORROW_MILLIS = Date.parse('2021-07-06');
const YESTERDAY_MILLIS = Date.parse('2021-07-04');
const NEXT_WEEK_MILLIS = Date.parse('2021-07-12');
const PREV_WEEK_MILLIS = Date.parse('2021-06-28');



test('getDurationText', () => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => NOW_MILLIS)

    expect(getDurationText(NOW_MILLIS)).toEqual('Today');

    expect(getDurationText(TOMORROW_MILLIS)).toEqual('1 Days Later');
    expect(getDurationText(YESTERDAY_MILLIS)).toEqual('1 Days Ago');
    expect(getDurationText(NEXT_WEEK_MILLIS)).toEqual('7 Days Later');
    expect(getDurationText(PREV_WEEK_MILLIS)).toEqual('7 Days Ago');



})