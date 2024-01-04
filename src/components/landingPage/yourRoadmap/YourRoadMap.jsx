import { Box, Container, Typography, styled } from '@mui/material';
import { ContainerYourRoadMap } from './ContainerYourRoadMap';

export const YourRoadMap = (props) => {
	const ContainerStyle = styled(Container)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '3rem',
		color: theme.palette.text.primary,
	}));

	return (
		<ContainerStyle>
			<Box
				sx={{
					pt: '80px',
				}}
			>
				<Typography
					variant="h2"
					sx={{
						color: (theme) => theme.palette.text.primary,
						fontFamily: 'Inter',
						fontSize: { xs: '1.4rem' },
						fontStyle: 'normal',
						fontWeight: '700',
						lineHeight: 'normal',
					}}
				>
					{props.title}
				</Typography>
			</Box>
			<ContainerYourRoadMap />
		</ContainerStyle>
	);
};
