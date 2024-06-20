import { PropTypes } from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

export default function ColorButton(props) {
  const { btnText, btnColor, goto, modal } = props;
  const [showModal, setShowModal] = useState(false);

  function handleModel(state) {
    setShowModal(state);
  }
  const btnClass = clsx(
    "p-2 pl-6 pr-6 rounded-3xl hover:scale-105 transition-transform font-bold",
    {
      "bg-gradient-to-r text-white from-pink-700 to-purple-700":
        btnColor === "primary",
      "text-gray-600 border border-gray-700 bg-gray-200":
        btnColor === "secondary",
      "bg-gradient-to-r text-white from-yellow-700 to-red-700":
        btnColor === "yellow",
      "bg-gradient-to-r text-white from-green-700 to-blue-700":
        btnColor === "success",
    },
  );

  return (
    <>
      {goto ? (
        <Link to={goto} className={btnClass} style={{ textDecoration: "none" }}>
          {btnText}
        </Link>
      ) : (
        <button
          className={btnClass}
          style={{ textDecoration: "none" }}
          onClick={() => handleModel(true)}
        >
          {btnText}
        </button>
      )}
      {showModal ? (
        <Modal closeModal={() => handleModel(false)}>{modal}</Modal>
      ) : null}
    </>
  );
}

// valid prop buttonText that it is a string
ColorButton.propTypes = {
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  goto: PropTypes.string,
  modal: PropTypes.element,
};
