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
		width: '17.4rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.975rem',
	});
	const TypographyTltleStyle = styled(Typography)({
		color: '#C02327',
		fontFamily: 'Poppins',
		fontSize: '1.635rem !important ',
		fontStyle: 'normal',
		fontWeight: 600,
		lineHeight: 'normal',
	});
	const TypographyTextStyle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.primary,
		fontFamily: 'Poppins',
		fontSize: '1.2rem !important',
		fontStyle: 'normal',
		fontWeight: 600,
		lineHeight: 'normal',
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
				display: 'flex',
				width: {
					md: '50rem',
					lg: '90rem',
				},
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '3.5rem',
			}}
		>
			<BoxCard>
				<CardMediaStyle image={eclipce} component="eclipse">
					<TypographyNumberStyle>1</TypographyNumberStyle>
				</CardMediaStyle>
				<TypographyTltleStyle>Selecciona una colección</TypographyTltleStyle>
				<TypographyTextStyle>
					Selecciona la colección dónde quieres alojar tu NFT.
				</TypographyTextStyle>
			</BoxCard>
			<DividerStyle />
			<BoxCard>
				<CardMediaStyle image={eclipce} component="eclipse">
					<TypographyNumberStyle>2</TypographyNumberStyle>
				</CardMediaStyle>
				<TypographyTltleStyle>Sube tu NFT</TypographyTltleStyle>
				<TypographyTextStyle>
					Selecciona la colección dónde quieres alojar tu NFT.
				</TypographyTextStyle>
			</BoxCard>
			<DividerStyle />
			<BoxCard>
				<CardMediaStyle image={eclipce} component="eclipse">
					<TypographyNumberStyle>3</TypographyNumberStyle>
				</CardMediaStyle>
				<TypographyTltleStyle>Mintea</TypographyTltleStyle>
				<TypographyTextStyle>
					Selecciona la colección dónde quieres alojar tu NFT.
				</TypographyTextStyle>
			</BoxCard>
		</Box>
	);
};
