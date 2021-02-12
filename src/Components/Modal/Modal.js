import React from "react";

const Modal = ({ text, type, dispatch }) => {
  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "DISMISS_MODAL" });
    }, 3000);
  });
  return (
    <div className={`modal ${type}`}>
      <p className="bold">{text}</p>
    </div>
  );
};

export default Modal;
