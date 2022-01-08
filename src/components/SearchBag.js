import SearchBagItem from "./SearchBagItem";

function SearchBag({ filteredClients }) {
  const filtered = filteredClients.map((client) => (
    <SearchBagItem key={client.id} client={client} />
  ));
  return <div>{filtered}</div>;
}

export default SearchBag;
