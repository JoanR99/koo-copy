import { Box, Stack, styled } from '@mui/material';
import { CardMarketPlace } from '../cardMarketPlace/CardMarketPlace';
import I993 from '@/assets/Img/993.png';
import I994 from '@/assets/Img/994.png';
import I995 from '@/assets/Img/995.png';
import I996 from '@/assets/Img/996.png';
import I997 from '@/assets/Img/997.png';
import I998 from '@/assets/Img/998.png';
import I999 from '@/assets/Img/999.png';

export const MarketPlaceContainer = () => {
	return (
		<Stack
			direction={{ xs: 'column', md: 'row' }}
			alignItems="center"
			spacing="30px"
			justifyContent="center"
		>
			<CardMarketPlace size={4} img={I993} />
			<CardMarketPlace size={3} img={I994} />
			<CardMarketPlace size={2} img={I995} />
			<CardMarketPlace size={1} img={I996} />
			<CardMarketPlace size={2} img={I997} />
			<CardMarketPlace size={3} img={I998} />
			<CardMarketPlace size={4} img={I999} />
		</Stack>
	);
};
