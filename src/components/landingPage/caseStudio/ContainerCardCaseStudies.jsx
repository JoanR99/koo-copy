import image from '@/assets/Img/Rectangle.png';
import { Box } from '@mui/material';
import { CardCaseStudies } from '../individualCardTechnology/CardCaseStudies';

export const ContainerCard = () => {
	const cards = [
		{
			img: image,
			title: 'NFT Marketplace',
			lorem:
				'Featuring The First, One-Of-A-Kind NFT Marketplace Powered With Social Media Integration & Chatbot Support...',
		},
		{
			img: image,
			title: 'Digital Banking App',
			lorem:
				'An All-In-One Digital Banking Solution: A Banking Case Study For Simplified Experience...',
		},
		{
			img: image,
			title: 'Lottery & Raffles Platform',
			lorem:
				'Top Performing Fair, Transparent, And Secure Lottery & Raffles Platform',
		},
	];
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				gap: '4rem',
				flexWrap: 'wrap',
				width: {
					xs: '100%',
					sm: '28rem',
					md: '48rem',
					lg: '78rem',
				},
				alignItems: {
					xs: 'center',
					sm: 'stretch',
				},
			}}
		>
			{cards.map((card) => {
				return (
					<CardCaseStudies
						image={card.img}
						title={card.title}
						lorem={card.lorem}
					/>
				);
			})}
		</Box>
	);
};
