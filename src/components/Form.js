import { useState } from "react";

const Form = ({ handleInputChange }) => {
  const [filterInput, setFilterInput] = useState("");

  const changeInput = (e) => {
    setFilterInput(e.target.value);
    handleInputChange(e.target.value);
  };

  return (
    <>
      <form id="form">
        <div className="search">
          <i className="fa fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Type a search"
          value={filterInput}
          onChange={changeInput}
          autoComplete="off"
        />
      </form>
    </>
  );
};

export default Form;
