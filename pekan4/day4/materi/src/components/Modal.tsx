import { useRef, type FC } from "react";
import type { ModalHandle } from "./ModalHandle";
import Modal from "./ModalHandle";
import "./Modal.css";

const ShowModal: FC = () => {
  const modalRef = useRef<ModalHandle | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <div>
      <h2>useImperativeHandle: Mengontrol Komponen Anak</h2>

      <button className="modal-btn open" onClick={handleOpenModal}>
        Buka Modal
      </button>

      <button className="modal-btn close" onClick={handleCloseModal}>
        Tutup Modal
      </button>

      <Modal ref={modalRef}>
        <p>Konten di dalam modal.</p>
      </Modal>
    </div>
  );
};

export default ShowModal;
