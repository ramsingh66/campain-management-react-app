import { FunctionComponent, useCallback, useState } from "react";
import { priceLogo } from "../../icons";
import { EventData } from "../../model";
import { Dialog } from "./Dialog";
import { DialogContainer, DialogImage } from "./PricingCell.styles";
import { Cell20Percent, SmallImage } from "./Table.styles";

export const PricingCell: FunctionComponent<
  Pick<EventData, "price" | "imageUrl" | "name" | "region">
> = ({ price, name, imageUrl, region }) => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = useCallback(() => {
    setShowDialog(true);
  }, [setShowDialog]);

  const closeDialog = useCallback(() => {
    setShowDialog(false);
  }, [setShowDialog]);

  const renderDialog = useCallback(() => {
    return (
      <DialogContainer>
        <div className="image_container">
          <DialogImage src={imageUrl} alt="</>" />
          <div className="name_region">
            <span>{name}</span>
            <span className="region">{region}</span>
          </div>
        </div>
        <div className="pricing_header">Pricing</div>
        <Prices price={price} />
      </DialogContainer>
    );
  }, [imageUrl, name, region, price]);

  return (
    <Cell20Percent>
      <SmallImage src={priceLogo} alt="</>" />
      <button className="price_button" onClick={openDialog}>
        View Pricing
      </button>
      {showDialog && (
        <Dialog
          onClose={closeDialog}
          renderDialog={renderDialog}
          show={showDialog}
        />
      )}
    </Cell20Percent>
  );
};

// showing prices for different duration by adding up original price multiple time
// in ideal application this info come from data source
// for price $100, this would show
// 1 Week - 1 Month   $100
// 6 Month   $200
// 1 Year   $300

const Prices: FunctionComponent<Pick<EventData, "price">> = ({ price }) => {
  return (
    <>
      {["1 Week - 1 Month", "6 Month", "1 Year"].map((duration, index) => (
        <div key={duration} className="price_values">
          <div>{duration}</div>
          <div>${price + price * index}</div>
        </div>
      ))}
    </>
  );
};
