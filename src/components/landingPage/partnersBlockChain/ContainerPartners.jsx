import { Box, styled } from '@mui/material';
import img from '../../../assets/Img/tegImg1.png';
import { CardPartners } from '../individualCardTechnology/CardPartners';
import Banxa from '@/assets/Img/banxa-logo.png';
import Skoda from '@/assets/Img/skoda.png';
import Challengy from '@/assets/Img/challengy.png';
import Hacken from '@/assets/Img/hacken.png';
import TechRate from '@/assets/Img/techrate.png';
import Mercuryo from '@/assets/Img/mercurio.png';
import Zeeve from '@/assets/Img/zeeve.png';
import Web3 from '@/assets/Img/web3auth-logo.svg';

const cards = [
	{
		img: Banxa,
		title: 'Banxa',
	},
	{
		img: Skoda,
		title: 'Skoda',
	},
	{
		img: Challengy,
		title: 'Challengy',
	},
	{
		img: Hacken,
		title: 'Hacken',
	},
	{
		img: Web3,
		title: 'Web3Auth',
	},
	{
		img: TechRate,
		title: 'Tech Rate',
	},
	{
		img: Mercuryo,
		title: 'Mercuryo',
	},
	{
		img: Zeeve,
		title: 'Zeeve',
	},
];
const BoxStyle = styled(Box)({
	display: 'flex',
	flexWrap: 'wrap',
	padding: {
		xs: '3.6rem 1.5rem',
		md: '7.25rem 3rem',
	},
	justifyContent: 'center',
	alignItems: 'center',
	gap: '7.05rem',
	background: '#C02327',
});

export const ContainerPartners = () => {
	return (
		<BoxStyle
			sx={{
				width: '100vw',
				// width: {
				//     xs: '28rem',
				//     sm: '48rem',
				//     md: '68rem',
				//     lg: '90rem'
				// },
			}}
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					},
					alignContent: 'center',
					justifyContent: 'center',
					width: {
						xs: '28rem',
						sm: '48rem',
						md: '68rem',
						lg: '90rem',
					},
				}}
			>
				{cards.map((card) => {
					return <CardPartners image={card.img} title={card.title} />;
				})}
			</Box>
		</BoxStyle>
	);
};
