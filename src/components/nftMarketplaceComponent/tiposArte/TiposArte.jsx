import { Box, CardMedia, Container, Typography, styled } from '@mui/material';
import img from '../../../assets/Img/Spiderman.png';
import eclipse from '../../../assets/Img/svg/Ellipse_27.svg';
import eclipse1 from '../../../assets/Img/svg/Ellipse_29.svg';

export const TiposArte = () => {
	const BoxImg = styled(Box)({
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'center',
		gap: '5rem',
	});
	const CardMediaStyle = styled(CardMedia)({
		// width: '13.3125rem',
		// height: '24.5625rem',
		borderRadius: '2.5rem',
	});
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '3rem',
			}}
		>
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
			<BoxImg>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
					}}
				>
					<CardMediaStyle
						image={img}
						component="img"
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
					}}
				>
					<CardMediaStyle
						image={img}
						component="img"
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
					}}
				>
					<CardMediaStyle
						image={img}
						component="img"
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
			</BoxImg>
			<Container
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<CardMedia
					image={eclipse1}
					component="eclipce"
					sx={{
						width: '1.25rem',
						height: '1.25rem',
						margin: '.5rem',
					}}
				/>
				<CardMedia
					image={eclipse1}
					component="eclipce"
					sx={{
						width: '1.25rem',
						height: '1.25rem',
						margin: '.5rem',
					}}
				/>
				<CardMedia
					image={eclipse}
					component="eclipce"
					sx={{
						width: '1.25rem',
						height: '1.25rem',
						margin: '.5rem',
						fill: '#C02327',
					}}
				/>
				<CardMedia
					image={eclipse1}
					component="eclipce"
					sx={{
						width: '1.25rem',
						height: '1.25rem',
						margin: '.5rem',
					}}
				/>
				<CardMedia
					image={eclipse1}
					component="eclipce"
					sx={{
						width: '1.25rem',
						height: '1.25rem',
						margin: '.5rem',
					}}
				/>
			</Container>
		</Box>
	);
};
