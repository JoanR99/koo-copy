import { Box, Container, Stack, Typography, styled } from '@mui/material';
import { CardCrearNft } from '../cardMarketPlace/CardCrearNft';

export const CrearNft = () => {
	const BoxStyle = styled(Box)({
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1.5rem',
	});
	const TypographyTitleStyle = styled(Typography)({
		color: '#C02327',
		fontFamily: 'Poppins',
		// fontSize: '2.8125rem',
		fontStyle: 'normal',
		fontWeight: 800,
		lineHeight: 'normal',
	});
	return (
		<Container sx={{}}>
			<Stack
				spacing="30px"
				sx={{
					width: '100%',
				}}
				alignItems="center"
			>
				<TypographyTitleStyle
					sx={{
						fontSize: {
							xs: '1.5525rem !important',
							sm: '2.8125rem !important',
							md: '2.8125rem !important',
							lg: '2.8125rem !important',
						},
						textAlign: 'center',
					}}
				>
					Create an NFT in three steps
				</TypographyTitleStyle>
				<CardCrearNft />
			</Stack>
		</Container>
	);
};
