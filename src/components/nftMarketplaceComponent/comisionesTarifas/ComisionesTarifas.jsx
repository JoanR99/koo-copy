import {
	Box,
	CardMedia,
	Container,
	Stack,
	Typography,
	styled,
} from '@mui/material';

export const ComisionesTarifas = () => {
	const BoxComponent = styled(Box)({
		display: 'flex',
		width: '100vw',
		padding: '3rem 2rem',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '2rem',
		background: '#C02327',
	});

	const ContainerTextstyle = styled(Box)({
		display: 'flex',
		flexDirection: 'column',

		justifyContent: 'center',
		gap: '1rem',
	});
	return (
		<BoxComponent>
			<Container>
				<Stack
					direction={{
						xs: 'column',
						md: 'row',
					}}
					spacing={{
						xs: '32px',
						md: '64px',
					}}
				>
					<ContainerTextstyle
						sx={{
							minWidth: { md: '520px' },
							alignItems: { xs: 'center', md: 'flex-start' },
						}}
					>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontFamily: 'Poppins',
								fontSize: {
									xs: '1.5525rem !important',
									sm: '2.8125rem !important',
									md: '2.8125rem !important',
									lg: '2.6125rem !important',
								},

								fontStyle: 'normal',
								fontWeight: 800,
								lineHeight: 'normal',
							}}
						>
							Commissions and fees
						</Typography>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontFamily: 'Poppins',
								fontSize: {
									xs: '1.5rem !important',
									sm: '1.5rem !important',
									md: '2rem !important',
									lg: '2rem !important',
								},
								fontStyle: 'normal',
								fontWeight: 600,
								lineHeight: 'normal',
							}}
						>
							Upload your art or collect!
						</Typography>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontFamily: 'Poppins',
								fontSize: {
									xs: '.9rem !important',
									sm: '1.12rem !important',
									md: '1.25rem !important',
									lg: '1.25rem !important',
								},
								fontStyle: 'normal',
								fontWeight: 500,
								lineHeight: 'normal',
							}}
						>
							20% discount for artists and collectors
						</Typography>
					</ContainerTextstyle>
					<Box
						sx={{
							width: '100%',
							height: '17.3125rem',
							borderRadius: '0.625rem',
							background: '#D9D9D9',
						}}
					></Box>
				</Stack>
			</Container>
		</BoxComponent>
	);
};
