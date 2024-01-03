import { Box, Container, Typography } from '@mui/material';
import BannerImg from '@/assets/Img/bannerimage.png';

export default function ContainerTop() {
	return (
		<>
			<Box
				sx={{
					bgcolor: '#C02327',
					py: '40px',
					color: '#EAE8E8',
					maxWidth: '100vw',
				}}
			>
				<Container>
					<Box
						sx={{
							display: 'flex',
							gap: '48px',
							alignItems: 'center',
							justifyContent: 'center',
							flexWrap: 'wrap',
						}}
					>
						<Box
							sx={{
								maxWidth: '584px',
							}}
						>
							<Typography
								sx={{
									fontSize: '48px !important',
									fontWeight: '700',
									mb: '16px',
								}}
							>
								Blockchain Development Company
							</Typography>
							<Typography
								sx={{
									fontSize: '16px !important',
									fontWeight: '500',
								}}
							>
								With over 1000 successful Blockchain projects under our belt, we
								leverage our real-world experience to build Blockchain solutions
								that help you disrupt the market.
							</Typography>
						</Box>
						<Box
							component={'img'}
							src={BannerImg}
							sx={{
								width: '100%',
								maxWidth: { sm: '512px' },
								maxHeight: { sm: '450px' },
								filter: 'hue-rotate(145.5deg)',
							}}
						></Box>
					</Box>
				</Container>
			</Box>
		</>
	);
}
