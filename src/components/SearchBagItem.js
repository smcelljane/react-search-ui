import React from "react";

function SearchBagItem({ client }) {
  return (
    <>
      <h2>{client.name}</h2>
      <p>{client.policyNumber}</p>
      <p>{client.phone}</p>
      <p>{client.email}</p>
    </>
  );
}

export default SearchBagItem;
