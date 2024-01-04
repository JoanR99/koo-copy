import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import ButtonSecondary from '../buttons/buttonSecondary';
import HoldingHandsImg from '@/assets/Img/HoldingHands.png';

const ContainerTotal = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1.5rem',
	paddingBottom: '1rem',
});

const ImageContainer = styled.div({
	position: 'relative',
	width: '100%',
	height: '40rem',
	overflow: 'hidden',
});

export const TitleDevelopment = styled(Typography)({
	color: '#C02327',
	textAlign: 'center',
	fontFamily: 'Poppins',
	fontSize: '32px !important',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: 'normal',
});

export const SubtitleDevelopment = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	textAlign: 'center',
	fontFamily: 'Poppins',
	fontSize: '16px !important',
	fontStyle: 'normal',
	fontWeight: 500,
	lineHeight: 'normal',
}));

export default function WhyChoose() {
	return (
		<ContainerTotal sx={{ overflowX: 'hidden' }}>
			<ImageContainer>
				<img
					src={HoldingHandsImg}
					alt="Holding Hands"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background:
							'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.95) 100%)',
					}}
				></div>
			</ImageContainer>
			<Container>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1.5rem',
					}}
				>
					<TitleDevelopment>
						Why Choose us as your Blockchain Development Company?
					</TitleDevelopment>
					<Box>
						<SubtitleDevelopment>
							By partnering with Koolinart, you can rely on a team of technical
							experts with real-world experience delivering end-to-end
							Blockchain development services.
						</SubtitleDevelopment>
					</Box>
					<ButtonSecondary>Hire our experts</ButtonSecondary>
				</Box>
			</Container>
		</ContainerTotal>
	);
}
