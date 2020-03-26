import React from "react";
import QuoteSelector from "./components/QuoteSelector";
import Header from "./components/Header";
import ChuckQuote from "./components/ChuckQuote";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <hr/>
        <QuoteSelector/>
        <hr/>
        <ChuckQuote category="placeHolder"/>
      </div>
    </div>
  );
}
