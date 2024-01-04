import { Box, Container, Typography } from '@mui/material';
import { thirteenData } from '@/data/metaverse';

export default function ThirteenthSection() {
	return (
		<>
			<Box
				sx={{
					p: {
						xs: '20px 0',
						md: 10,
					},
					color: (theme) => theme.palette.text.primary,
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
					alignItems: 'center',
				}}
			>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '24px',
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
							Why choose us as your Metaverse Development Company?
						</Typography>
						<Typography
							sx={{
								fontSize: '18px !important',
								fontWeight: 400,
							}}
						>
							Koolinart, with a team of seasoned developers and subject matter
							experts, proves to be the right choice at the right place to
							deliver the right solutions.
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '16px',
							justifyContent: 'center',
							color: '#EAE8E8',
						}}
					>
						{thirteenData.map((card) => (
							<Box
								key={card.id}
								sx={{
									width: {
										xs: '100%',
										md: '275px',
									},
									height: '335px',
									background:
										'linear-gradient(153deg, #C02327 58.4%, #353535 98.49%);',
									borderRadius: '20px',
									px: '20px',
									py: '12px',
									pt: '40px',
									display: 'flex',
									flexDirection: 'column',
									gap: '16px',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										width: '50px',
										height: '50px',
										borderRadius: '25px',
										background: '#EAE8E8',
									}}
								></Box>
								<Typography
									sx={{
										fontSize: '24px !important',
										fontWeight: { xs: 600 },
									}}
								>
									{card.title}
								</Typography>
								<Typography
									sx={{
										fontSize: '16px !important',
										fontWeight: {
											xs: 400,
										},
										textAlign: 'center',
									}}
								>
									{card.description}
								</Typography>
							</Box>
						))}
					</Box>
				</Container>
			</Box>
		</>
	);
}
