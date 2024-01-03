import { Box, Container, Typography, styled } from '@mui/material';
import CardsStack from './cards/CardsStack';
import MobileStackImg from '@/assets/Img/svg/MobileStack.svg';
import FrontendStack from '@/assets/Img/svg/FrontendStack.svg';
import BackendStack from '@/assets/Img/svg/BackendStack.svg';
import CmsStack from '@/assets/Img/svg/CMSStack.svg';

const ContainerGeneral = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	alignContent: 'center',
	gap: '2rem',
	flexWrap: 'wrap',
});

export default function TechnologyStack() {
	return (
		<Container>
			<ContainerGeneral>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Typography
						variant="h1"
						sx={{
							textAlign: 'center',
							fontFamily: 'Poppins',
							fontSize: '2rem',
							fontStyle: 'normal',
							fontWeight: 600,
							lineHeight: 'normal',
						}}
					>
						Technology Stack
					</Typography>
					<Typography
						variant="string"
						sx={{
							textAlign: 'center',
							fontFamily: 'Poppins',
							fontSize: '1rem',
							fontStyle: 'normal',
							fontWeight: 600,
							lineHeight: 'normal',
						}}
					>
						We leverage cutting-edge technologies and platforms being practiced
						in the global market and stay abreast of the latest market trends.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '2rem',
						justifyContent: 'center',
						alignItems: 'center',
						alignContent: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						<Typography variant="h4" sx={{ padding: '0.5rem 1.5rem' }}>
							Mobile
						</Typography>
						<CardsStack img={MobileStackImg} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						<Typography variant="h5" sx={{ padding: '0.5rem 1.5rem' }}>
							Frontend
						</Typography>
						<CardsStack img={FrontendStack} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						<Typography variant="h5" sx={{ padding: '0.5rem 1.5rem' }}>
							Backend
						</Typography>
						<CardsStack img={BackendStack} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						<Typography variant="h5" sx={{ padding: '0.5rem 1.5rem' }}>
							CMS
						</Typography>
						<CardsStack img={CmsStack} />
					</Box>
				</Box>
			</ContainerGeneral>
		</Container>
	);
}
