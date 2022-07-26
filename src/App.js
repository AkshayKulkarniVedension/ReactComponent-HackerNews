import React from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";
function App() {
  return (
    <React.Fragment>
      <SearchForm></SearchForm>
      <Buttons></Buttons>
      <Stories></Stories>
    </React.Fragment>
  );
}

export default App;
