import React, { useState, useEffect } from 'react';
import './App.css';
import { ZERO, BOOK_PRICE } from './constants'


function App() {
  const [cleanCodeQuantity, setCleanCodeQuantity] = useState(ZERO)
  const [totalPrice, setTotalPrice] = useState(ZERO)

  const calculateBooksPrice = (cleanCodeQuantity) => {
    let totalPrice = cleanCodeQuantity * BOOK_PRICE
    setTotalPrice(totalPrice)
  }

  return (
    <div className="App">
      <img src="https://github.com/stephane-genicot/katas/raw/master/images/Kata_DevelopmentBooks_TDD.jpeg?raw=true" className="App-logo" alt="logo" />
      <h3>
        Book price calculator - TDD
      </h3>
      <div className="inputs">
        <label htmlFor="clean-code">Clean Code <input type="number" min={ZERO} id="clean-code" value={cleanCodeQuantity} onChange={e => setCleanCodeQuantity(Number(e.target.value))}></input></label>
      </div>
      <br />
      <button onClick={() => calculateBooksPrice(cleanCodeQuantity)}>Calculate Total Price</button>
      <h4>{`Total price: ${totalPrice}`}</h4>
    </div>
  );
}

export default App;
