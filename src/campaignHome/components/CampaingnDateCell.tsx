import {  useMemo } from "react";
import { useEventDataContext } from "../../context";
import { getDurationText } from "../../utils";
import { DateCell } from "./Table.styles";

export const CampaignDateCell =
  () => {
    const {createdOn} = useEventDataContext();
    
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
