import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail.js";
import Navigator from "./components/Navigator.js";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
