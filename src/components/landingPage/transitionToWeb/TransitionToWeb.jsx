import { Box, CardMedia, Container, Typography, styled } from '@mui/material';
import imgTrans from '../../../assets/Img/svg/mundoLandingPage.svg';

export const TransitionToWeb = () => {
	const BoxContainerStyle = styled(Box)({
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: {
			xs: 'center',
			md: 'center',
			lg: 'space-between',
		},
	});
	const CardMediaStyle = styled(CardMedia)({
		// width: '55.96875rem',
		// height: '45.75rem',
		alignItems: 'flex-start',
		flexShrink: 0,
	});
	const BoxStyled = styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	});
	const TypographyStyled = styled(Typography)({
		color: '#EAE8E8',
		fontFamily: 'Inter',
		maxWidth: '32rem',
		alignItems: 'center',
		justifyContent: 'center',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal',
	});
	const TypographyLorem = styled(Typography)({
		maxWidth: '28.125rem',
		color: '#EAE8E8',
		fontFamily: 'Inter',
		textAlign: 'justify',
		fontSize: '1rem',
		fontStyle: 'normal',
		fontWeight: 500,
		lineHeight: 'normal',
	});
	return (
		<BoxContainerStyle
			sx={{
				gap: { xs: '1.5rem', sm: '4rem', lg: '9.75rem' },
				flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap', lg: 'inherit' },
				backgroundColor: '#303030',
				padding: {
					xs: '6rem 0.5rem',
					lg: '6rem 8.69rem 0 0',
				},
			}}
		>
			<CardMediaStyle
				sx={{
					maxWidth: {
						xs: '90%',
						md: '45.3rem',
						lg: '55.96875rem',
					},
				}}
				component="img"
				image={imgTrans}
			/>
			<BoxStyled>
				<TypographyStyled
					variant="h1"
					sx={{
						fontSize: {
							xs: '1.8rem !important',
							sm: '2rem !important',
							md: '2.3rem !important',
							lg: '2.5rem !important',
						},
					}}
				>
					Embrace Web3
				</TypographyStyled>
				<TypographyStyled
					variant="h1"
					sx={{
						// fontSize: '2.5rem !important',
						fontSize: {
							xs: '1.8rem !important',
							sm: '2rem !important',
							md: '2.3rem !important',
							lg: '2.5rem !important',
						},
					}}
				>
					Embrace Transformation
				</TypographyStyled>
				<TypographyLorem>
					Unearth the blockchain potential to overhaul enterprise &
					institutional processes. Antier, one of world’s pioneering blockchain
					development companies harnesses the power of decentralization and
					smart contracts to build scalable, asset agnostic applications.
				</TypographyLorem>
				<TypographyLorem>
					Our subject matter experts provide enterprise-grade blockchain app
					development services ensuring transparency & immutability over a
					distributed ledger. Ask more about our expertise in DeFi 2.0,
					Metaverse ecosystems, DAOs, Exchanges & wallets, crypto banks, NFTs
					and more.
				</TypographyLorem>
			</BoxStyled>
		</BoxContainerStyle>
	);
};
