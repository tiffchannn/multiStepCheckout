
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXX0=

import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   info: [],

    // }

  }

  // handleClick () {

  // }

  // getInfo() {
  //   axios.get('/api')
  //     .then(results)
  // }

  render() {
    return(
    <div>
      <h1>Shop</h1>
      <button>Checkout!</button> // will take you to the first input at name AND creates new persisted record
      <form>
        <h2>Create an account</h2>
        <label>
          Name:
        </label>
        <label>
          Email:
        </label>
        <label>
          Password:
        </label>
      </form>
      <button>Next</button> // moves into shipping info at address input
      <form>
        <h2>Shipping Information</h2>
        <label>
          Address:
        </label>
        <label>
          Line 1:
        </label>
        <label>
          Line 2:
        </label>
        <label>
          City:
        </label>
        <label>
          State:
        </label>
        <label>
          Zip Code:
        </label>
        <label>
          Phone Number:
        </label>
      </form>
        <button>Next</button> //moves into payment at credit card number
        <form>
        <h2>Payment Information</h2>
        <label>
          Credit Card Number:
        </label>
        <label>
          Expiration Date:
        </label>
        <label>
          CVV Code:
        </label>
        <label>
          Billing Zip Code:
        </label>
      </form>
      <button>Review</button> // will take user to new page with all inputted data - use get and post request here
      <button>Purchase</button> //on click will lead back to homepage
    </div>
    )
  }
}

export default App;