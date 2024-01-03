import { Box, Typography } from '@mui/material';
import diagram from '../../assets/Img/png/Frame 868.png';

export default function EleventhSection() {
	return (
		<>
			<Box
				sx={{
					py: '80px',
					px: '20px',
					color: '#EAE8E8',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#303030',
				}}
			>
				<Typography
					sx={{
						fontSize: '32px !important',
						fontWeight: 600,
						mb: '16px',
						textAlign: 'center',
					}}
				>
					Our State-of-the-Art Tech Stack
				</Typography>
				<Box
					component={'img'}
					sx={{
						width: '100%',
						maxWidth: '1100px',
					}}
					src={diagram}
				></Box>
			</Box>
		</>
	);
}
