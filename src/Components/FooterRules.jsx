import React, { useState } from "react";
import { createPortal } from "react-dom";
import RulesModal from "./RulesModal";

export default function FooterRules() {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="text-white uppercase border-2 border-gray-500 border-opacity-80 py-2 px-6 md:px-10 md:py-2 rounded-lg"
      >
        Rules
      </button>

      {showModal &&
        createPortal(
          <RulesModal closeModal={() => setShowModal(!showModal)} />,
          document.body
        )}
    </>
  );
}
