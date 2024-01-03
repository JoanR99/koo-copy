import { Box, Typography } from '@mui/material';
import { eightData } from '@/data/metaverse';

export default function EighthSection() {
	return (
		<>
			<Box
				sx={{
					p: 10,
					display: 'flex',
					flexDirection: 'column',
					gap: '32px',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '32px !important',
							fontWeight: 600,
						}}
					>
						Metaverse Development Services: Redefining Digital Boundaries
					</Typography>
					<Typography
						sx={{
							fontSize: '18px !important',
							fontWeight: 400,
						}}
					>
						We provide end-to-end Metaverse development services to facilitate
						your entry and participation in the metaverse.
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '16px',
						justifyContent: 'center',
						maxWidth: '812px',
					}}
				>
					{eightData.map((card) => (
						<Box
							key={card.id}
							sx={{
								width: '260px',
								height: 'auto',
								background:
									'linear-gradient(0deg, #595959 0%, rgba(53, 53, 53, 0.91) 100%)',
								borderRadius: '20px',
								px: '32px',
								py: '24px',
								display: 'flex',
								flexDirection: 'column',
								gap: '16px',
								alignItems: 'center',
								textAlign: 'center',
								color: '#EAE8E8',
							}}
						>
							<Box
								sx={{
									width: '60px',
									height: '60px',
									background: '#EAE8E8',
								}}
							></Box>
							<Typography
								sx={{
									fontSize: '16px !important',
									fontWeight: 600,
								}}
							>
								{card.title}
							</Typography>
							<Typography
								sx={{
									fontSize: '12px !important',
									fontWeight: 400,
								}}
							>
								{card.description}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
}
