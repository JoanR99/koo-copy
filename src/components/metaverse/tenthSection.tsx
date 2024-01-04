import { Box, Button, CardMedia, Typography } from '@mui/material';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import Rec from '@/assets/Img/rec.png';

export default function TenthSection() {
	return (
		<>
			<Box
				sx={{
					backgroundColor: (theme) => theme.palette.background.paper,
					py: '80px',
					px: '20px',
					color: (theme) => theme.palette.text.secondary,
					display: 'flex',
					flexDirection: {
						xs: 'column',
						lg: 'row',
					},
					justifyContent: 'center',
					alignItems: 'center',
					gap: '72px',
				}}
			>
				<CardMedia
					component="img"
					src={Rec}
					alt="rec"
					sx={{
						width: '154px',
						height: '134px',

						borderRadius: '20px',
					}}
				/>
				<Box
					sx={{
						width: '100%',
						maxWidth: '700px',
					}}
				>
					<Typography
						sx={{
							mb: '8px',
							fontSize: '32px !important',
							fontWeight: 700,
						}}
					>
						Step into a New Dimension of Success
					</Typography>
					<Typography
						sx={{
							mb: '24px',
							fontSize: '16px !important',
							fontWeight: 400,
						}}
					>
						Approach Koolinart for Metaverse Development: Your Gateway to Easy
						and Exclusive Industry Transformation in the Digital World!
					</Typography>
					<ButtonPrimary>Talk to our experts</ButtonPrimary>
				</Box>
			</Box>
		</>
	);
}
