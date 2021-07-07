import React from "react";
import Home from "./Home";
import Form from "./Form/Form";
import { Route, Switch } from "react-router-dom";
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
