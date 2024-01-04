import { Box, CardMedia, Typography, styled } from '@mui/material';

export const CardPartners = (props) => {
	const BoxContainer = styled(Box)({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '.5rem',
		padding: '4rem',
	});
	return (
		<BoxContainer>
			<CardMedia
				image={props.image}
				sx={{
					width: '5rem',
					height: '5rem',
					fill: '#FFF',
				}}
			/>
			<Typography
				sx={{
					color: '#FFF',
					fontFamily: 'Inter',
					fontSize: '1.25rem',
					fontStyle: 'normal',
					fontWeight: 600,
					lineHeight: 'normal',
				}}
			>
				{props.title}
			</Typography>
		</BoxContainer>
	);
};
