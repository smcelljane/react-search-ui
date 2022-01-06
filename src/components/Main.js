import { Component } from "react";
import Search from "./Search";
import { clientsData } from "../data/Data";

export default class Main extends Component {
  render() {
    return (
      <>
        <Search clients={clientsData} />
      </>
    );
  }
}
