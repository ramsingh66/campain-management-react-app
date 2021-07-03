import { FunctionComponent, useMemo } from "react";
import { EventData } from "../../model";
import { getDurationText } from "../../utils";
import { DateCell } from "./Table.styles";

export const CampaignDateCell: FunctionComponent<Pick<EventData, "createdOn">> =
  ({ createdOn }) => {
    const startDate = useMemo(
      () => new Date(createdOn).toDateString(),
      [createdOn]
    );

    const duratoinInDays = getDurationText(createdOn);
    return (
      <DateCell>
        <span>{startDate}</span>
        <span className="duration">{duratoinInDays}</span>
      </DateCell>
    );
  };
