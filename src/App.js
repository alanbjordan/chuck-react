import React from "react";
import QuoteSelector from "./components/QuoteSelector";
import Header from "./components/Header";
import ChuckQuote from "./components/ChuckQuote";
import "./App.css";

export default function App() {
    const chuckQuote = "Chuck Norris threw a grenade and killed 50 people, then it exploded.";
    const headerText = "Chuck Norris Quotes"
    const leadIn = "Chuck Says....."
  return (
    <div className="App">
      <div className="wrapper">
        <Header hText = {headerText}/>
        <hr/>
        <QuoteSelector chuckSays = {leadIn}/>
        <hr/>
        <ChuckQuote quote={chuckQuote} category="placeHolder"/>
      </div>
    </div>
  );
}
