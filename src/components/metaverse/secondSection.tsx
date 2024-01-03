import { Box, Typography, styled } from '@mui/material';
import image from '../../assets/Img/jpg-jpeg/metaverse-2.jpeg';
import ButtonSecondary from '@/components/buttons/buttonSecondary';

export default function SecondSection(): JSX.Element {
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
				display: 'flex',
				width: '100%',
				paddingY: '80px',
				justifyContent: 'center',
				alignItems: {
					xs: 'center',
					lg: 'flex-start',
				},
				gap: '32px',
				flexShrink: 0,
				backgroundColor: '#C02327',
				flexDirection: {
					xs: 'column',
					lg: 'row',
				},
			}}
		>
			<Box
				sx={{
					width: {
						xs: '90%',
						lg: '590px',
					},
					height: {
						xs: 'auto',
						lg: '468px',
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
						color: '#EAE8E8',
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
						display: 'flex',
						flexDirection: 'column',
						gap: '8px',
						alignItems: 'flex-start',
						flexShrink: 0,
					}}
				>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<Typography
							component="p"
							sx={{
								color: '#EAE8E8',
								textAlign: 'justify',
								fontFamily: 'Inter',
								fontSize: '12px !important',
								fontStyle: 'normal',
								fontWeight: 400,
								lineHeight: '24px',
								width: {
									xs: '100%',
									lg: '548px',
								},
							}}
						>
							Metaverse is no longer an idea of the distant future; it is a
							living digital universe that is evolving right now. This immersive
							virtual world is modifying how we currently work, play, socialize,
							and conduct business from the comfort of our homes. Whether you
							are an entrepreneur looking to launch a virtual storefront, a
							gaming enthusiast, or just eager to redefine human interaction,
							Koolinart excels in Metaverse development with relevant tools,
							expertise, and passion to bring your vision to life.
						</Typography>
						<Typography
							component="p"
							sx={{
								color: '#EAE8E8',
								textAlign: 'justify',
								fontFamily: 'Inter',
								fontSize: '12px !important',
								fontStyle: 'normal',
								fontWeight: 400,
								lineHeight: '24px',
								width: {
									xs: '100%',
									lg: '548px',
								},
							}}
						>
							At Koolinart, we are not just into metaverse development for
							next-gen experiences, our subject matter experts also empower you
							with the knowledge and insights needed to thrive in this dynamic
							digital space. With a deep understanding of user engagement and
							seamless integration, we assure that our metaverse development
							delivers unparalleled experiences. We are building virtual
							ecosystems where you can immerse yourself in your 3D avatars, not
							just creating digital realms for them to exist in.
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
						<ButtonSecondary>Conect us</ButtonSecondary>
						<ButtonSecondary>Talk to our experts</ButtonSecondary>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					width: {
						xs: '90%',
						lg: '582px',
					},
					height: '467px',
					borderRadius: '20px',
					backgroundImage: `url(${image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					filter: 'drop-shadow(-7px 8px 6.7px rgba(0, 0, 0, 0.50));',
				}}
			>
				<Filter />
			</Box>
		</Box>
	);
}
