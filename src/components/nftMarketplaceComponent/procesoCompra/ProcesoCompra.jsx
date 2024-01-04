import { Box, CardMedia, Container, Typography, styled } from '@mui/material';
import eclipse from '../../../assets/Img/svg/Ellipse_32Rojo.svg';
import flecha1 from '../../../assets/Img/svg/Flecha1.svg';
import flecha2 from '../../../assets/Img/svg/Flecha2.svg';

export const ProcesoCompra = () => {
	const BoxCardsAll = styled(Box)({
		display: 'flex',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		// width: '78.25rem',
		// height: '33.4375rem',
		// gap: '9.813rem'
	});
	const BoxCard = styled(Box)({
		display: 'inline-flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '3.5rem',
	});
	const TypographyTitle = styled(Typography)({
		color: '#C02327',
		fontFamily: 'Poppins',
		fontStyle: 'normal',
		fontWeight: 800,
		lineHeight: 'normal',
	});
	const BoxLorem = styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: '1.5rem',
	});
	const TypographyLorem = styled(Typography)(({ theme }) => ({
		width: '18.875rem',
		height: '6.5625rem',
		color: theme.palette.text.primary,
		fontFamily: 'Poppins',
		fontSize: '1.25rem !important',
		fontStyle: 'normal',
		fontWeight: 500,
		lineHeight: 'normal',
	}));
	return (
		<Box>
			<Container
				sx={{
					display: 'inline-flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '3rem',
				}}
			>
				<TypographyTitle
					sx={{
						fontSize: {
							xs: '2.1rem !important',
							sm: '3rem !important',
							lg: '2.8125rem !important',
						},
						textAlign: 'center',
					}}
				>
					Purchasing process
				</TypographyTitle>
				<BoxCardsAll
					sx={{
						width: {
							sm: '50rem',
							md: '70.25rem',
							lg: '78.25rem',
						},
						height: {
							lg: '33.4375rem',
						},
						gap: {
							md: '5rem',
							lg: '9.813rem',
						},
					}}
				>
					<BoxCard>
						<CardMedia
							image={eclipse}
							component="eclipse"
							sx={{
								width: '9.9375rem',
								height: '9.9375rem',
							}}
						/>
						<BoxLorem>
							<TypographyLorem
								sx={{
									textAlign: 'center',
								}}
							>
								Select the NFT you want purchase
							</TypographyLorem>
						</BoxLorem>
						<Box
							sx={{
								display: {
									xs: 'none',
									sm: 'none',
									lg: 'flex',
								},
								alignItems: 'flex-end',
								width: '1rem',
							}}
						>
							<CardMedia
								image={flecha1}
								component="flecha"
								sx={{
									width: '14.65625rem',
									height: '7.55rem',
									flexShrink: 0,
								}}
							/>
						</Box>
					</BoxCard>
					<BoxCard
						sx={{
							justifyContent: 'flex-end',
						}}
					>
						<CardMedia
							image={eclipse}
							component="eclipse"
							sx={{
								width: '9.9375rem',
								height: '9.9375rem',
							}}
						/>
						<BoxLorem>
							<TypographyLorem sx={{ textAlign: 'center' }}>
								Add the indicated amount of KNRT and accept.
							</TypographyLorem>
						</BoxLorem>
					</BoxCard>
					<BoxCard>
						<CardMedia
							image={eclipse}
							component="eclipse"
							sx={{
								width: '9.9375rem',
								height: '9.9375rem',
							}}
						/>
						<BoxLorem>
							<TypographyLorem sx={{ textAlign: 'center' }}>
								Add the indicated amount of KNRT and accept.
							</TypographyLorem>
						</BoxLorem>
						<Box
							sx={{
								display: {
									xs: 'none',
									sm: 'none',
									lg: 'flex',
								},
								width: '18rem',
								marginLeft: '-10rem',
							}}
						>
							<CardMedia
								image={flecha2}
								component="flecha"
								sx={{
									width: '14.78125rem',
									height: '6.25rem',
									// width: '14.65625rem',
									// height: '7.55rem',
									flexShrink: 0,
								}}
							/>
						</Box>
					</BoxCard>
				</BoxCardsAll>
				{/* <CardMedia image={img} component='svg' sx={{
                    width: {
                        xs: '22rem',
                        sm: '40rem',
                        md: '51rem',
                        lg: '71.25rem'
                    },
                    height: {
                        xs: '11rem',
                        sm: '19rem',
                        md: '25rem',
                        lg: '33.4375rem'
                    },
                }} /> */}
			</Container>
		</Box>
	);
};
