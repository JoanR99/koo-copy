import { Box, Typography, styled } from '@mui/material';

const ContainerRed = styled(Box)({
	display: 'flex',
	maxWidth: '390px',
	height: '100%',
	padding: '110px 24px 48px 24px',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '1rem',
	flexShrink: '0',
	borderRadius: '1.875rem',
	background: '#C02327',
	boxShadow:
		'0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.16)',
	position: 'relative',
	mt: '100px',
});

const VectorContainer = styled(Box)({
	display: 'relative',
	alignItems: 'flex-start',
	marginBottom: '-7.29165rem',
});

const VectorWhite = styled('img')({
	position: 'absolute',
	top: '-8rem',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '23.125rem',
	height: '24.58331rem',
	zIndex: '1',
	flexShrink: '0',
	fill: '#ECE9E8',
	filter:
		'drop-shadow(0px 2.767px 2.214px rgba(0, 0, 0, 0.04)) drop-shadow(0px 6.65px 5.32px rgba(0, 0, 0, 0.06)) drop-shadow(0px 12.522px 10.017px rgba(0, 0, 0, 0.08)) drop-shadow(0px 22.336px 17.869px rgba(0, 0, 0, 0.10)) drop-shadow(0px 41.778px 33.422px rgba(0, 0, 0, 0.12)) drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.16))',
});

const ImageOverlay = styled('img')({
	position: 'absolute',
	top: '-5rem',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '7.5rem',
	height: '7.5rem',
	zIndex: '2',
	flexShrink: '0',
});

export default function CardsServices(props) {
	return (
		<Box
			sx={{
				pt: '130px',
			}}
		>
			<ContainerRed>
				<VectorContainer>
					<VectorWhite src="src/assets/Img/svg/Vector.svg" />
					<ImageOverlay src={props.img} alt="Overlay" />
				</VectorContainer>
				<Box sx={{ marginTop: '7.5rem' }}>
					<Typography
						variant="h6"
						sx={{ color: '#EAE8E8', textAlign: 'center' }}
					>
						{props.title}
					</Typography>

					<Typography
						variant="string"
						sx={{ color: '#EAE8E8', textAlign: 'center', fontSize: '0.851rem' }}
					>
						{props.text}
					</Typography>
				</Box>
			</ContainerRed>
		</Box>
	);
}
