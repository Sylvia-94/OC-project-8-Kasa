import React, { useState } from "react";

const Collapsible = ({ label, text }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="button-container">
        <button onClick={toggle} className="togglebtn">
          {label}
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      {open && <div>{text}</div>}
    </div>
  );
};

export default Collapsible;
