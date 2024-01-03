import { Box, Container } from '@mui/material';
import CardsBottom from './cards/CardsBottom';
import RectangleImg from '@/assets/Img/Rectangles.png';

export default function Bottom() {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: '1.94rem',
				justifyContent: 'center',
				alignItems: 'flex-start',
				mb: '80px',
				flexWrap: {
					xs: 'wrap',
					lg: 'nowrap',
				},
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
				<CardsBottom
					title="Blockchain Pioneers"
					description="With years of experience in blockchain technology, we are the industry pioneers with extensive expertise. We do one thing, and we do it well."
				/>
				<CardsBottom
					title="End-to-End Services"
					description="We provide end-to-end services covering everything from ideation and development to deployment with the utmost professionalism and expertise."
				/>
				<CardsBottom
					title="Competitive Pricing"
					description="We offer competitive pricing structures that ensure you receive exceptional value for your investment without compromising on quality."
				/>
			</Box>
			<Box
				component={'img'}
				src={RectangleImg}
				sx={{
					p: {
						xs: '0 0.75rem',
						lg: '0',
					},
					width: {
						xs: 'full',
						lg: '450px',
					},
					height: {
						xs: '100%',
						lg: '100%',
					},
				}}
			></Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
				<CardsBottom
					title="Customization Excellence"
					description="We understand– No two businesses are the same, nor their needs. We excel at tailoring solutions to your unique requirements and vision."
				/>
				<CardsBottom
					title="Security-Centric Approach"
					description="Security is paramount in the crypto space so we adopt a security-first mindset, implementing industry best practices to safeguard your digital assets"
				/>
				<CardsBottom
					title="24/7 Support"
					description="We offer unwavering, ongoing support with 24/7 availability to ensure the longevity and optimal performance of your blockchain solutions."
				/>
			</Box>
		</Container>
	);
}
