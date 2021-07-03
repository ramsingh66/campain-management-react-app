import { FunctionComponent } from "react";
import { EventData } from "../../model";
import { Cell30Percent, Image } from "./Table.styles";

export const CampaignNameCell: FunctionComponent<
  Pick<EventData, "name" | "imageUrl" | "region">
> = ({ name, imageUrl, region }) => {
  return (
    <Cell30Percent>
      <Image src={imageUrl} alt="</>" />
      <div className="name_region">
        <span>{name}</span>
        <span className="region">{region}</span>
      </div>
    </Cell30Percent>
  );
};
