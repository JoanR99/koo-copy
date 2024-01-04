import { Box, CardMedia, Divider, Typography, styled } from '@mui/material';
import eclipce from '../../../assets/Img/svg/Union.svg';

export const CardCrearNft = () => {
	const CardMediaStyle = styled(CardMedia)({
		color: 'white',
		width: '10.75rem',
		height: '6.5rem',
		flexShrink: 0,
		fill: '#C02327',
	});
	const BoxCard = styled(Box)({
		display: 'flex',
		width: '16.4rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.975rem',
	});
	const TypographyTltleStyle = styled(Typography)({
		color: '#C02327',
		fontFamily: 'Poppins',
		fontSize: '25px !important ',
		fontStyle: 'normal',
		fontWeight: 600,
		lineHeight: 'normal',
		textAlign: 'center',
	});
	const TypographyTextStyle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.primary,
		fontFamily: 'Poppins',
		fontSize: '1.2rem !important',
		fontStyle: 'normal',
		fontWeight: 600,
		lineHeight: 'normal',
		textAlign: 'center',
	}));
	const TypographyNumberStyle = styled(Typography)({
		color: '#EAE8E8',
		width: '8.5rem',
		height: '5.6rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		fontFamily: 'Poppins',
		fontSize: '2.8125rem !important',
		fontStyle: 'normal',
		fontWeight: '800',
		lineHeight: 'normal',
	});
	const DividerStyle = styled(Divider)({
		background: '#C02327',
		color: '#C02327',
		width: '2.875rem',
		padding: '.125rem',
	});
	return (
		<Box
			sx={{
				width: '100%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: {
						xs: 'center',
						md: 'space-between',
					},
					alignItems: 'center',
					gap: '32px',
					width: '100%',
				}}
			>
				<BoxCard
					sx={{
						width: {
							xs: '100%',
							md: '16.4rem',
						},
					}}
				>
					<CardMediaStyle image={eclipce} component="eclipse">
						<TypographyNumberStyle>1</TypographyNumberStyle>
					</CardMediaStyle>
					<TypographyTltleStyle>Select a collection</TypographyTltleStyle>
					<TypographyTextStyle>
						Select the collection where you want to to host your NFT.
					</TypographyTextStyle>
				</BoxCard>
				<DividerStyle />
				<BoxCard
					sx={{
						width: {
							xs: '100%',
							md: '16.4rem',
						},
					}}
				>
					<CardMediaStyle image={eclipce} component="eclipse">
						<TypographyNumberStyle>2</TypographyNumberStyle>
					</CardMediaStyle>
					<TypographyTltleStyle>Upload your NFT</TypographyTltleStyle>
					<TypographyTextStyle>
						Select the collection where you want to to host your NFT.
					</TypographyTextStyle>
				</BoxCard>
				<DividerStyle />
				<BoxCard
					sx={{
						width: {
							xs: '100%',
							md: '16.4rem',
						},
					}}
				>
					<CardMediaStyle image={eclipce} component="eclipse">
						<TypographyNumberStyle>3</TypographyNumberStyle>
					</CardMediaStyle>
					<TypographyTltleStyle>Mintea</TypographyTltleStyle>
					<TypographyTextStyle>
						Select the collection where you want to to host your NFT.
					</TypographyTextStyle>
				</BoxCard>
			</Box>
		</Box>
	);
};
