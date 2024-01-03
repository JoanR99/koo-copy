import { Box, styled, Typography } from '@mui/material';
import image from '../../assets/Img/jpg-jpeg/metaverse-3.jpeg';
import ButtonSecondary from '@/components/buttons/buttonSecondary';

export default function ThirdSection(): JSX.Element {
	const Filter = styled(Box)({
		width: '100%',
		height: '100%',
		mixBlendMode: 'hue',
		backgroundColor: '#C02327',
		borderRadius: '20px',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
	});

	return (
		<Box
			sx={{
				width: '100%',
				paddingY: '80px',
				gap: '81px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: {
					xs: 'column',
					lg: 'row',
				},
			}}
		>
			<Box
				sx={{
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					width: '310px',
					height: '465px',
					flexShrink: 0,
					borderRadius: '20px',
					filter: 'drop-shadow(-8px 9px 6.8px rgba(0, 0, 0, 0.50));',
				}}
			>
				<Filter />
			</Box>

			<Box
				sx={{
					width: {
						xs: '90%',
						md: '590px',
					},
					height: {
						xs: 'auto',
						md: '428px',
					},
					padding: '8px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: '24px',
				}}
			>
				<Typography
					component="h3"
					sx={{
						fontFamily: 'Inter',
						fontSize: '35px !important',
						fontStyle: 'normal',
						fontWeight: 700,
						lineHeight: 'normal',
					}}
				>
					Metaverse Development: An Experience Beyond Reality
				</Typography>

				<Box
					sx={{
						width: {
							xs: '100%',
							md: '551px',
						},
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						flexShrink: 0,
						alignItems: 'flex-start',
					}}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<Typography
							component="p"
							sx={{
								textAlign: 'justify',
								fontFamily: 'Inter',
								fontSize: '12px !important',
								fontStyle: 'normal',
								fontWeight: 400,
								lineHeight: '24px',
							}}
						>
							Metaverse app development turns visions into metaverse experiences
							that inspire, captivate, and transform. Whether it's creating
							realistic simulations, immersive educational platforms, or
							interactive social spaces, we turn your digital dreams into
							reality with our metaverse app development solutions. Our team of
							innovative developers incorporates technical expertise with
							creative prowess in Metaverse app development to enhance your
							brand's presence.
						</Typography>
						<Typography
							component="p"
							sx={{
								textAlign: 'justify',
								fontFamily: 'Inter',
								fontSize: '12px !important',
								fontStyle: 'normal',
								fontWeight: 400,
								lineHeight: '24px',
							}}
						>
							Open the doors of digital prospects with a reliable name–
							Koolinart and jump into the realm of the metaverse that is
							predicted to be a multi-trillion-dollar market. Our experts
							combine the power of blockchain, augmented reality (AR), and
							virtual reality (VR) in metaverse app development for
							transformative experiences. We work closely with you to make sure
							everything, from design to interactions and code, perfectly aligns
							with your business idea.
						</Typography>
					</Box>
					<ButtonSecondary>Conect us</ButtonSecondary>
				</Box>
			</Box>
		</Box>
	);
}
