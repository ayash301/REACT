import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  const modalElement = document.getElementById("modal-root");
  if (!modalElement) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Tutup
        </button>
      </div>
    </div>,
    modalElement
  );
};

const PortalModalDemo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Buka Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h3>Portal Modal</h3>
        <p>Modal ini dirender di luar App menggunakan Portal.</p>
      </Modal>
    </>
  );
};

export default PortalModalDemo;
