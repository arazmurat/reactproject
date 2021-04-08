import React, { useState } from "react";

export default function Form(props) {
  const [search, setsearch] = useState("");

  function handleChange  (e) {
    setsearch(e.target.value);
  };

  function onFormSubmit  (e) {
    e.preventDefault();
		props.handleData(search)
		setsearch("")
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
