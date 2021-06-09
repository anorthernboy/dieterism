import React, { Component } from "react";
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
        <Quote quote={quote} />
        <Rams quoteId={quoteId} click={this.newQuote} />
      </div>
    );
  }

  newQuote = event => {
    event.preventDefault();
    const quoteId = this.state.quoteId < 8 ? Math.floor(Math.random() * (30 - 8 + 1) + 8) :
                    this.state.quoteId < 16 ? Math.floor(Math.random() * (30 - 16 + 1) + 16) :
                    this.state.quoteId < 24 ? Math.floor(Math.random() * (16 - 0 + 1) + 0) :
                    Math.floor(Math.random() * (24 - 0 + 1) + 0);
    if (this.state.quote !== quotes[quoteId][quoteId]) {
      const quote = quotes[quoteId][quoteId];
      this.setState({ quoteId, quote });
    }
  };
}

export default App;
