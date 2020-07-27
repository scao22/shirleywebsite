import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar.js";

import { get, post } from "../utilities";

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    get("/api/whoami").then(user => {
      if (user._id) {
        this.setState({ userId: user._id });
      }
    });
  }

  render() {
    return (
      <>
        <h2> Get Started</h2>
      </>
    );
  }
}

export default GetStarted;
