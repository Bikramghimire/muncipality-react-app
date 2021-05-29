import React from "react";
import Home from "./Home";
import Form from "./Form/Form";
import { Route, Switch } from "react-router-dom";

import Example from "./Components/Example/Example";

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form} />
          <Route path="/example" component={Example} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
