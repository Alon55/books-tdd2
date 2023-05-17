import React, { useState, useEffect } from 'react';
import './App.css';
import { ZERO, TWO, FIVE_PERCENT, BOOK_PRICE } from './constants'


function App() {
  const [cleanCodeQuantity, setCleanCodeQuantity] = useState(ZERO)
  const [cleanCoderQuantity, setCleanCoderQuantity] = useState(ZERO)
  const [totalPrice, setTotalPrice] = useState(ZERO)
  const [shoppingCart, setShoppingCart] = useState([])

  useEffect(() => {
    setShoppingCart([
      ...Array(cleanCodeQuantity).fill('cleanCode'),
      ...Array(cleanCoderQuantity).fill('cleanCoder')
    ])
  }, [cleanCodeQuantity, cleanCoderQuantity])

  const calculateBooksPrice = (shoppingCart) => {
    let totalPrice = ZERO
    if (shoppingCart.length === 1) { totalPrice += BOOK_PRICE } else
      if (shoppingCart[0] !== shoppingCart[1]) { totalPrice += TWO * BOOK_PRICE * FIVE_PERCENT }
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
        <label htmlFor="clean-coder">The Clean Coder <input type="number" min={ZERO} id="clean-coder" value={cleanCoderQuantity} onChange={e => setCleanCoderQuantity(Number(e.target.value))}></input></label>
      </div>
      <br />
      <button onClick={() => calculateBooksPrice(shoppingCart)}>Calculate Total Price</button>
      <h4>{`Total price: ${totalPrice}`}</h4>
    </div>
  );
}

export default App;
