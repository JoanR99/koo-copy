import eclipse from '@/assets/Img/tegImg1.png';
import { Box } from '@mui/material';
import { Empresa } from '../individualCardTechnology/Empresa';

export const ConteinerOurClient = () => {
	const cards = [
		{
			img: eclipse,
			title: 'Empresa',
		},
		{
			img: eclipse,
			title: 'Empresa',
		},
		{
			img: eclipse,
			title: 'Empresa',
		},
		{
			img: eclipse,
			title: 'Empresa',
		},
		{
			img: eclipse,
			title: 'Empresa',
		},
	];
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: {
					xs: 'repeat(2, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(4, 1fr)',
					xl: 'repeat(5, 1fr)',
				},
				alignItems: 'center',
				justifyContent: 'center',
				gap: '3rem',
				width: {
					xs: '18rem',
					sm: '28rem',
					md: '48rem',
					lg: '78rem',
				},
			}}
		>
			{cards.map((card) => {
				return <Empresa image={card.img} title={card.title} />;
			})}
		</Box>
	);
};
