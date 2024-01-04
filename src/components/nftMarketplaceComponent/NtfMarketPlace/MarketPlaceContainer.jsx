import { Box, Stack, styled } from '@mui/material';
import { CardMartketPlace } from '../cardMarketPlace/CardMartketPlace';
import img from '../../../assets/Img/Spiderman.png';

export const MarketPlaceContainer = () => {
	return (
		<Stack
			direction={{ xs: 'column', md: 'row' }}
			alignItems="center"
			spacing="30px"
			justifyContent="center"
		>
			<CardMartketPlace size={4} />
			<CardMartketPlace size={3} />
			<CardMartketPlace size={2} />
			<CardMartketPlace size={1} />
			<CardMartketPlace size={2} />
			<CardMartketPlace size={3} />
			<CardMartketPlace size={4} />
		</Stack>
	);
};
