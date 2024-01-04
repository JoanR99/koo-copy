import eclipse from '@/assets/Img/tegImg1.png';
import { Box } from '@mui/material';
import { Empresa } from '../individualCardTechnology/Empresa';
import Ire from '@/assets/Img/5ire.png';
import Coin from '@/assets/Img/coin-trade.png';
import Crisil from '@/assets/Img/crisil.png';
import Skoda from '@/assets/Img/skoda.png';
import Tata from '@/assets/Img/Tata-Steel.svg';

export const ContainerOurClient = () => {
	const cards = [
		{
			img: Ire,
			title: '5ire',
		},
		{
			img: Coin,
			title: 'Coin Trade',
		},
		{
			img: Crisil,
			title: 'Crisil',
		},
		{
			img: Skoda,
			title: 'Skooda',
		},
		{
			img: Tata,
			title: 'Tata Steel',
		},
	];
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: {
					xs: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(5, 1fr)',
				},
				alignItems: 'stretch',
				justifyContent: 'center',
				gap: '1rem',
				width: '100%',
			}}
		>
			{cards.map((card) => {
				return <Empresa image={card.img} title={card.title} />;
			})}
		</Box>
	);
};
