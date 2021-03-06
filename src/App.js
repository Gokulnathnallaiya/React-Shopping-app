import React from "react";

import data from "./data.json";
import Products from "./components/products";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">cart items</div>
          </div>
        </main>
        <footer>All rights Reserved</footer>
      </div>
    );
  }
}

export default App;
