import React, { useState } from "react";
import "./Wrapper.css";
import Modal from "../Modal/Modal.jsx";
import { createPortal } from "react-dom";

const Wrapper = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="wrapper">
      <button
        className="show__button"
        onClick={() => {
          setShow(true);
        }}
      >
        Open
      </button>
      {/* {show && <Modal setShow={setShow} />} */}
      {show && createPortal(<Modal setShow={setShow} />, document.body)};
    </div>
  );
};

export default Wrapper;

// {
// //   show && createPortal(<Modal setShow={setShow} />, document.body);
// }
