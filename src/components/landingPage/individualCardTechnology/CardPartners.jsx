import { Box, CardMedia, Typography, styled } from '@mui/material';

export const CardPartners = (props) => {
	const BoxContainer = styled(Box)({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '5rem',
	});
	return (
		<BoxContainer>
			<CardMedia
				component="img"
				src={props.image}
				alt={props.title}
				sx={{
					objectFit: 'cover',
					width: 'auto',
					height: 'auto',
				}}
			/>
		</BoxContainer>
	);
};
