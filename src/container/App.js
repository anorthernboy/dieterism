import React, { Component } from "react";
import Header from "../component/Header.js";
import Quote from "../component/Quote.js";
import Rams from "../component/Rams.js";
import { quotes } from "../quote-data.js";
import "../style/App.css";

class App extends Component {
  state = { quoteId: 0, quote: "less, but better" };

  render() {
    console.log(this.state.quote);
    const { quoteId, quote } = this.state;
    return (
      <div className="app">
        <Header />
        <Quote quote={quote} />
        <Rams quoteId={quoteId} click={this.newQuote} />
      </div>
    );
  }

  newQuote = event => {
    event.preventDefault();
    const quoteId = Math.floor(Math.random() * Math.floor(quotes.length));
    if (this.state.quote !== quotes[quoteId][quoteId]) {
      const quote = quotes[quoteId][quoteId];
      this.setState({ quoteId, quote });
    }
  };
}

export default App;
