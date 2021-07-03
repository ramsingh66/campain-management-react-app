import moment from "moment";
import { useEventDataContext } from "../../context";
import { csvLogo, reportLogo } from "../../icons";
import { Cell35Percent, SmallImage } from "./Table.styles";

export const ActionsCell = () => {
  const { csvUrl, reportUrl, createdOn } = useEventDataContext();

  const date = moment(createdOn).format('yyyy-MM-DD');

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
      <input type="date" value={date} onChange={event=> console.log(Date.parse(event.target.value))} />
    </Cell35Percent>
  );
};
