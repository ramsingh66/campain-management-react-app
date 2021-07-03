export type CreationTime = number;

// naming ad EventData so it is not comfused with Js Event
export type EventData = {
    readonly name: string,
    readonly region: string,
    readonly createdOn: CreationTime,
    readonly price: number,
    readonly csvUrl: string,
    readonly reportUrl: string,
    readonly imageUrl: string
}

export type EventList = ReadonlyArray<EventData>;