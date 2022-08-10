import React from 'react';
import Ico from './Ico/Ico';

function DrawerContainer() {
	return (
		<>
			<Ico
				className={`fa-solid fa-magnifying-glass px-3`}
				link='Wyszukiwarka'
			/>
			<Ico className={`fa-solid fa-heart px-3`} link='Ulubione' />
			<Ico className={`fa-solid fa-cart-shopping px-3`} link='Koszyk' />
		</>
	);
}

export default DrawerContainer;