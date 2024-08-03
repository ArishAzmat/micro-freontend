import { render } from "solid-js/web";
import "./index.css";
import ExposedComponent from "./exposedComponent";
const App = () => (
  <div class="container">
    <div>Name: solid-App</div>
    <div>Framework: solid-js</div>
    <ExposedComponent/>
  </div>
);
render(App, document.getElementById("app"));
