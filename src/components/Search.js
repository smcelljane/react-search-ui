import React, { useState } from "react";
import SearchBag from "./SearchBag";

function Search({ clients }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.policyNumber.includes(searchQuery)
    );
  });

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  return (
    <>
      <input
        type="search"
        className="form-control my-3"
        placeholder="Search ( Client Name / Policy Number )"
        onChange={handleChange}
      />
      {searchShow ? <SearchBag filteredClients={filteredClients} /> : ""}
    </>
  );
}

export default Search;
