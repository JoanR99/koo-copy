import { Box, CardMedia, Container, Typography, styled } from '@mui/material';

export const CompraSegura = () => {
	const BoxComponentStyle = styled(Box)({
		display: 'flex',
		width: '100vw',
		padding: '3rem 2rem',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '4rem',
	});
	const TypographyTitleStyle = styled(Typography)({
		color: '#C02327',
		fontFamily: 'Poppins',
		fontSize: '45px !importan',
		fontStyle: 'normal',
		fontWeight: '800 !important',
		lineHeight: 'normal',
	});
	const TypographyStyle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.primary,
		// width: '33rem',
		display: 'flex',

		fontFamily: 'Poppins',
		// fontSize: '1.25rem !important',
		fontStyle: 'normal',
		fontWeight: 500,
		lineHeight: 'normal',
	}));
	const ContainerTextStyle = styled(Container)({
		display: 'flex',
		// width: '40rem',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: '1.5rem',
	});
	const ContainerStyle = styled(Container)({
		width: '38.9375rem',
		height: '17.3125rem',
		borderRadius: '0.625rem',
		background: '#D9D9D9',
	});
	return (
		<BoxComponentStyle>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1.5rem',
					width: {
						xs: '16.5rem',
						ms: '32rem',
						sm: '35rem',
						lg: '82rem',
					},
				}}
			>
				<ContainerTextStyle
					sx={{
						width: {
							xs: '26rem',
							sm: '25rem',
							md: '30rem',
							lg: '40rem',
						},
					}}
				>
					<TypographyTitleStyle
						sx={{
							fontSize: {
								xs: '25px',
								md: '35px',
							},
							fontWeight: {
								xs: '800',
							},
						}}
					>
						Buy KNRT securely
					</TypographyTitleStyle>
					<TypographyStyle
						sx={{
							width: {
								xs: '20rem',
								ms: '25rem',
								md: '30rem',
								lg: '33rem',
							},
							fontSize: {
								xs: '.9rem !important',
								sm: '1.12rem !important',
								md: '1.25rem !important',
								lg: '1.25rem !important',
							},
						}}
					>
						Select the amount of KNRT you want to purchase, add $5 in matic for
						network commissions, stripe will process the payment and you will
						have the KNRT in your account, ready to collect NFTs.
					</TypographyStyle>
				</ContainerTextStyle>
				<ContainerStyle></ContainerStyle>
			</Box>
		</BoxComponentStyle>
	);
};
