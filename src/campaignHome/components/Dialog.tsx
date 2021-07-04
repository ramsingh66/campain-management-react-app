import { FunctionComponent, ReactNode } from "react";
import Modal from "@material-ui/core/Modal";
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
    <Modal open={show} onEscapeKeyDown={onClose} onBlur={onClose}>
      <DialogBox>
        {renderDialog()}
        <button onClick={onClose} className="close_button">
          Close
        </button>
      </DialogBox>
    </Modal>
  );
};
