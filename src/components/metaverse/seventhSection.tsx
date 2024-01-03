import { Box, Typography } from '@mui/material';
import image from '../../assets/Img/png/metaverse-7.png';
import ButtonPrimary from '@/components/buttons/buttonPrimary';

export default function SeventhSection(): JSX.Element {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				paddingY: '80px',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '72px',
				backgroundColor: (theme) => theme.palette.background.paper,
				color: (theme) => theme.palette.text.secondary,
				flexShrink: 0,
				flexDirection: {
					xs: 'column',
					lg: 'row',
				},
				paddingX: {
					xs: '32px',
					lg: 0,
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: {
						xs: 'center',
						lg: 'flex-start',
					},
					gap: '24px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: {
							xs: 'center',
							lg: 'flex-start',
						},
						gap: '8px',
					}}
				>
					<Typography
						component="h3"
						sx={{
							fontFamily: 'Inter',
							fontSize: '32px !important',
							fontStyle: 'normal',
							fontWeight: 700,
							lineHeight: 'normal',
							textAlign: {
								xs: 'center',
								lg: 'initial',
							},
						}}
					>
						Be a Pioneer in Expanding Frontiers of Virtual Reality
					</Typography>
					<Typography
						component="p"
						sx={{
							fontFamily: 'Inter',
							fontSize: '16px !important',
							fontStyle: 'normal',
							fontWeight: 400,
							lineHeight: 'normal',
							width: {
								xs: 'auto',
								lg: '689px',
							},
							textAlign: {
								xs: 'center',
								lg: 'initial',
							},
						}}
					>
						Trust Koolinart to drive your success and shape your virtual destiny
						with its expert navigation and infallible Metaverse development
						solutions.
					</Typography>
				</Box>
				<ButtonPrimary>Talk to our experts</ButtonPrimary>
			</Box>

			<Box
				sx={{
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					width: '272px',
					height: '272px',
					transform: 'scaleX(-1)',
				}}
			/>
		</Box>
	);
}
