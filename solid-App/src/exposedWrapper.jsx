import { render } from "solid-js/web";
import ExposedComponent from "./exposedComponent";

const ExposedWrapper = (el) => {
    render(ExposedComponent, el);
  };
  
export default ExposedWrapper