import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id=" something-important">Adopt me!!</h1>
      <Pet name="luna" animal="Dog" breed="Havaneese" />
      <Pet name="Peter" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
