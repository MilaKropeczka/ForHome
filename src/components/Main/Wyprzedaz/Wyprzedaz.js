import React from 'react';
import Box from '../Box/Box';

function Wyprzedaz(props) {
	const handleState = props.handleState;

	const mapItems = handleState.map((el) => {
		if (el.status === 'wyprzedaz') {
			return <Box key={el.id} {...el} />;
		}
	});
	return mapItems;
}

export default Wyprzedaz;