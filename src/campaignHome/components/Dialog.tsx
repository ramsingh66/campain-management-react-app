import { FunctionComponent, ReactNode } from "react";
import { DialogBox } from "./Dialog.styles";

export const Dialog: FunctionComponent<{
  readonly show: boolean;
  renderDialog: () => ReactNode;
  readonly onClose: () => void;
}> = ({ show, renderDialog, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <DialogBox id="campaign-dialog-box">
      <div className="content">{renderDialog()}</div>
      <button onClick={onClose} className="close_button">
        Close
      </button>
    </DialogBox>
  );
};
