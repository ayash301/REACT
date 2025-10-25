import  { useImperativeHandle, forwardRef, useState, type ReactNode } from "react";
import "./Modal.css";

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  children: ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Ini adalah Modal</h3>
        <div>{props.children}</div>
        <button className="modal-btn close" onClick={() => setIsOpen(false)}>
          Tutup
        </button>
      </div>
    </div>
  );
});

export default Modal;
