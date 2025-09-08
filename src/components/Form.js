import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCreate();
    }
  };

  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyDown={handleKeyDown} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
