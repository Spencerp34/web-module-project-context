import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductsContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
			return(
				setCart([
				...cart,
				item
			])
		)
	};

	return (
		<div className="App">
			<ProductsContext.Provider value = {{products, addItem}}>
				<CartContext.Provider value = {cart}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products products={products} addItem={addItem} />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContext.Provider>
			</ProductsContext.Provider>
		</div>
	);
}

export default App;
