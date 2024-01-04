import { Container, Typography } from '@mui/material';
import { ContainerOurClient } from './ContainerOurClient';

export const OurClients = (props) => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '3rem',
				py: {
					xs: '40px',
					md: '80px',
				},
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
			<ContainerOurClient />
		</Container>
	);
};
