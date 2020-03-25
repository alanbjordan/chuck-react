import React from "react";
import Quote from "./components/Quote";
import Header from "./components/Header";
import ChuckResponse from "./components/ChuckResponse";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <hr />
        <h1 className="getYourQuote">Get Your Chuck Quote</h1>

        <hr />
        <Quote />
        <hr />
        <ChuckResponse />
      </div>
    </div>
  );
}

