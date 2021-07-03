import { FunctionComponent } from "react";
import { csvLogo, reportLogo, calendarLogo } from "../../icons";
import { EventData } from "../../model";
import { Cell35Percent, SmallImage } from "./Table.styles";

export const ActionsCell: FunctionComponent<
  Pick<EventData, "csvUrl" | "reportUrl">
> = ({ csvUrl, reportUrl }) => {
  return (
    <Cell35Percent>
      <SmallImage src={csvLogo} alt="</>" />
      <a className="csv_link" href={csvUrl}  rel="noreferrer" target="_blank">
        CSV
      </a>

      <SmallImage src={reportLogo} alt="</>" />
      <a className="report_link" href={reportUrl} target="_blank" rel="noreferrer">
        Report
      </a>

      <SmallImage src={calendarLogo} alt="</>" />
      <button className="calender_button">Schedule Again</button>
    </Cell35Percent>
  );
};
