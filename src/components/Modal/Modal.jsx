import s from "./Modal.module.css";

const Modal = ({ onClose }) => {
  return (
    <div className={s.modal}>
      <h2 className={s.title}>Modal Open</h2>
      <button className={s.btn} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default Modal;
