import React, { useState } from "react";
import SearchBag from "./SearchBag";
import { Container, Navbar } from "react-bootstrap";

import "../style/_search.scss";

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
      <nav className="nav-search">
        <Container>
          <div className="search-header-bar ">
            <i className="fa fa-search"></i>
            <input
              type="search"
              className="search-input"
              placeholder="Search ( Client Name / Policy Number )"
              onChange={handleChange}
            />
          </div>
        </Container>
      </nav>
      {searchShow ? <SearchBag filteredClients={filteredClients} /> : ""}
    </>
  );
}

export default Search;
