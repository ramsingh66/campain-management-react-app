import moment from "moment";
import { useCallback, useMemo } from "react";
import { useEventDataContext } from "../../context";
import { csvLogo, reportLogo } from "../../icons";
import { changeEventDate } from "../../store";
import { Cell35Percent, SmallImage } from "./Table.styles";

export const ActionsCell = () => {
  const { csvUrl, reportUrl, createdOn, name } = useEventDataContext();

  const date = useMemo(
    () => moment(createdOn).format("yyyy-MM-DD"),
    [createdOn]
  );

  const handleDateChange = useCallback(
    (event: any) => {
      const dateMillis = Date.parse(event.target.value);
      if (typeof dateMillis === "number" && !isNaN(dateMillis)) {
        changeEventDate(name, dateMillis);
      }
    },
    [name]
  );

  return (
    <Cell35Percent>
      <SmallImage src={csvLogo} alt="</>" />
      <a className="csv_link" href={csvUrl} rel="noreferrer" target="_blank">
        CSV
      </a>
      <SmallImage src={reportLogo} alt="</>" />
      <a
        className="report_link"
        href={reportUrl}
        target="_blank"
        rel="noreferrer"
      >
        Report
      </a>
      <input
        type="date"
        className="date_input"
        value={date}
        onChange={handleDateChange}
      />
    </Cell35Percent>
  );
};
