import { Container, Typography } from '@mui/material';
import { ConteinerOurClient } from './ConteinerOurClient';

export const OurClients = (props) => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '3rem',
			}}
		>
			<Typography
				variant="h2"
				color="red"
				sx={{
					marginTop: '4rem',
					color: (theme) => theme.palette.text.primary,
					fontFamily: 'Inter',
					fontSize: '2rem',
					fontStyle: 'normal',
					fontWeight: 700,
					lineHeight: 'normal',
				}}
			>
				{props.title}
			</Typography>
			<ConteinerOurClient />
		</Container>
	);
};
