import { useEventDataContext } from "../../context";
import { Cell25Percent, Image } from "./Table.styles";

export const CampaignNameCell = () => {
  const { name, imageUrl, region } = useEventDataContext();
  return (
    <Cell25Percent>
      <Image src={imageUrl} alt="</>" />
      <div className="name_region">
        <span>{name}</span>
        <span className="region">{region}</span>
      </div>
    </Cell25Percent>
  );
};
