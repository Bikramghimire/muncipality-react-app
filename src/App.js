import React from "react";
import Home from "./Home";
import Form from "./Form/Form";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-19-tracking.p.rapidapi.com/v1/Nepal",
  headers: {
    "x-rapidapi-key": "2e3ba36e00msh70efad010843a66p1766d6jsn8f2905a0c72d",
    "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
  },
};

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form} />
          {/* <Route path="/example" component={Example} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
