import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // <HashRouter>
  //   <Navigator />
  //   <Route path="/" exact={true} component={Home} />
  //   <Route path="/about" component={About} />
  //   <Route path="/movie/:id" component={Detail} />
  // </HashRouter>,
  document.getElementById("root")
);
