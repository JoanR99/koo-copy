import { Box, Container, Typography } from '@mui/material';
import { CardsTechnology } from './CardsTechnology';

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '.5rem',
	maxWidth: '100vw',
};

export const Technology = (props) => {
	return (
		<Container sx={containerStyle}>
			<Box>
				<Typography
					variant="h2"
					sx={{
						margin: '4rem',
						color: (theme) => theme.palette.text.primary,
						fontFamily: 'Inter',
						fontSize: '2rem',
						fontStyle: 'normal',
						fontWeight: '700',
						lineHeight: 'normal',
					}}
				>
					{props.title}
				</Typography>
			</Box>
			<CardsTechnology />
		</Container>
	);
};
