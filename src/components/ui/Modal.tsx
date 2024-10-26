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
}

const PPModal = ({
  isOpen,
  closeModal,
  title,
  children,
  handleOk,
  showCancelButton = true,
  showOkButton = true,
}: IModal) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={handleOk}
      onCancel={closeModal}
      cancelButtonProps={{
        style: {
          background: "#F87069",
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
