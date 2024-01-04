import { Box, Typography } from '@mui/material';
import { nineData } from '@/data/metaverse';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1300 },
		items: 4,
	},
	laptop: {
		breakpoint: { max: 1300, min: 1020 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1020, min: 664 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function ninthSection() {
	return (
		<>
			<Box
				sx={{
					px: '20px',
					py: 10,
					color: '#EAE8E8',
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
					alignItems: 'center',
					background: '#C02327',
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
						Metaverse Development: Shaping Industries of Tomorrow
					</Typography>
					<Typography
						sx={{
							fontSize: '18px !important',
							fontWeight: 400,
						}}
					>
						Our mission is to empower businesses like yours to tap into the
						metaverse's transformative power with our enterprise-focused
						solutions regardless of industry verticals. Get a sneak peek at how
						we redefine what's possible in your industry with Metaverse
						development-
					</Typography>
				</Box>

				<Box
					sx={{
						width: '80vw',
						display: 'flex',
						flexDirection: 'column',
						position: 'relative',
					}}
				>
					<ReactCarousel
						responsive={responsive}
						infinite={true}
						arrows={false}
						showDots={false}
					>
						{nineData.map((card) => (
							<Box
								sx={{
									py: '10px',
									px: {
										xs: '10px',
										lg: '0px',
									},
									height: '100%',
								}}
							>
								<Box
									key={card.id}
									sx={{
										width: '200px',
										height: '356px',
										backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										borderRadius: '20px',
										p: '16px',
										display: 'flex',
										flexDirection: 'column',
										gap: '16px',
										alignItems: 'center',
										justifyContent: 'flex-end',
									}}
								>
									<Typography
										sx={{
											fontSize: '20px !important',
											fontWeight: 600,
											color: '#EAE8E8',
											textAlign: 'center',
										}}
									>
										{card.title}
									</Typography>
								</Box>
							</Box>
						))}
					</ReactCarousel>
				</Box>
			</Box>
		</>
	);
}
