import {
	Box,
	CardMedia,
	Container,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import Carousel from '../../blockchainGame/Carousel';

export const TiposArte = () => {
	return (
		<Container>
			<Stack spacing="3rem" alignItems="center">
				<Typography
					sx={{
						color: '#C02327',
						fontFamily: 'Poppins',
						fontSize: '2.8125rem !important',
						fontStyle: 'normal',
						fontWeight: 800,
						lineHeight: 'normal',
					}}
				>
					Types of art
				</Typography>

				<Box
					sx={{
						width: {
							xs: '90vw',
						},
					}}
				>
					<Carousel />
				</Box>
			</Stack>
		</Container>
	);
};
