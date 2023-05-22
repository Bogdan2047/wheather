import React from "react";
import "./App.css";
import { Main } from "./page/main";
import { Header } from "./components/header";

function App() {
  return (
    <div className="container md:w-4/5 m-auto pt-5 ">
      <Header />
      <Main />
    </div>
  );
}

export default App;
