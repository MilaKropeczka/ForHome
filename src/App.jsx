import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SendSection from './components/SendSection/SendSection';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logowanie from './components/Logowanie/Logowanie';
import Rejestracja from './components/Rejestracja/Rejestracja';
import { data } from './api/data';
import SingleProduct from './components/organisms/SingleProduct';
import { addAmount } from './hooks/addAmount';
import { removeAmount } from './hooks/removeAmount';
import { removeCart } from './hooks/removeCart';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export let products;
export let setProducts;

export function App() {
	const [isLogged, setLogged] = useState(false);
	[products, setProducts] = useState(data);

	return (
		<>
			<Router>
				<ScrollToTop />
				<Route>
					<div className='App'>
						<Nav handleState={products} isLogged={isLogged} />
						<Switch>
							<Route path='/sypialnia'>
								<Main
									title='Sypialnia'
									category='category'
									status='false'
								/>
							</Route>
							<Route path='/salon'>
								<Main
									title='Salon'
									category='category'
									status='false'
								/>
							</Route>
							<Route path='/kuchnia'>
								<Main
									title='Kuchnia'
									category='category'
									status='false'
								/>
							</Route>
							<Route path='/wyprzedaz'>
								<Main
									title='Wyprzedaż'
									category='status'
									status='wyprzedaz'
								/>
							</Route>
							<Route path='/koszyk'>
								<Cart
									title='Koszyk'
									handleState={products}
									setHandleState={setProducts}
									addAmount={addAmount}
									removeAmount={removeAmount}
									removeCart={removeCart}
								/>
							</Route>
							<Route path='/ulubione'>
								<Main
									title='Ulubione'
									status='true'
									category='fav'
								/>
							</Route>
							<Route path='/wyszukiwarka'>
								<Main
									title='Wyszukaj frazy ...""'
									status='true'
									category='fav'
								/>
							</Route>
							<Route path='/profil'></Route>
							<Route path='/logowanie'>
								<Logowanie />
							</Route>
							<Route path='/rejestracja'>
								<Rejestracja />
							</Route>
							<Route path='/oferty'>
								<SingleProduct products={products} />
							</Route>

							<Route exact path='/'>
								<Header />
								<Main
									title='Bestsellery'
									status='hit'
									category='status'
								/>
							</Route>
						</Switch>
						<SendSection />
						<Faq />
						<About />
						<Footer />
					</div>
				</Route>
			</Router>
		</>
	);
}
