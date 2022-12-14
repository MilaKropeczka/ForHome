import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Cart.module.sass';
import { totalSum, Koszyk } from '../../molecules/Koszyk/Koszyk';
import { useEffect, useState } from 'react';

function Cart(props) {
	const [allSum, setAllSum] = useState(totalSum);

	useEffect(() => {
		setAllSum(totalSum);
	}, [props]);

	let testowoo = false;

	function testt() {
		for (const el of props.handleState) {
			if (el.cart === true) {
				testowoo = true;
				return summary();
			}
		}
		return emptyCart();
	}

	function emptyCart() {
		return (
			<Row>
				<h3 className='p-5'>Twój koszyk jest pusty</h3>
			</Row>
		);
	}

	function summary() {
		return (
			<Row>
				<Col className='text-center'>
					<h2 className='text-center m-5'>
						Podsumowanie:
						<span className={`${styles.font}`}>
							&nbsp;{allSum}
							&nbsp;zł
						</span>
					</h2>
					<button
						className={`${styles.button} ${styles.primary} mt-lg-0 mx-lg-2 my-4`}>
						Dostawa i płatność{' '}
						<i className='fa-solid fa-chevron-right'></i>
					</button>
				</Col>
			</Row>
		);
	}

	return (
		<Container fluid='lg'>
			<Row>
				<Col>
					<h2 className='text-center m-5'>{props.title}</h2>
				</Col>
			</Row>
			<Koszyk
				handleState={props.handleState}
				addAmount={props.addAmount}
				removeAmount={props.removeAmount}
				removeCart={props.removeCart}
			/>
			<hr />
			{testt()}
		</Container>
	);
}

export default Cart;
