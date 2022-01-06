import React from "react";
import { Container } from "react-bootstrap";

import "../style/_searchBagItem.scss";

function SearchBagItem({ client }) {
  return (
    <>
      <div className="striped">
        <Container fluid="md">
          <h5 className="pt-3">{client.name}</h5>
          <div className="pb-3 d-sm-flex col-sm-12">
            <span className="d-block col-sm-4"><i className="fa fa-phone"></i> {client.phone}</span>
            <span className="d-block col-sm-4"><i className="fa fa-at"></i> {client.email}</span>
            <span className="d-block col-sm-4"><i className="fa fa-file"></i>  Policy No: {client.policyNumber} | {client.policyNumber}</span>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SearchBagItem;
