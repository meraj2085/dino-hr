import { Modal } from "antd";
import { ReactElement, ReactNode } from "react";

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  title: string | ReactNode;
  children: ReactElement;
  handleOk?: () => void;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  okText?: string;
  cancelText?: string;
}

const PPModal = ({
  isOpen,
  closeModal,
  title,
  children,
  handleOk,
  showCancelButton = true,
  showOkButton = true,
  okText = "Ok",
  cancelText = "Cancel",
}: IModal) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={handleOk}
      okText={okText}
      cancelText={cancelText}
      onCancel={closeModal}
      cancelButtonProps={{
        style: {
          background: "#9d0208",
          display: showCancelButton ? "inline" : "none",
          boxShadow: "none",
          border: "none",
        },
      }}
      okButtonProps={{
        style: {
          background: "#00674A",
          display: showOkButton ? "inline" : "none",
          boxShadow: "none",
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default PPModal;
