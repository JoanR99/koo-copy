import { Box, Container } from '@mui/material';
import { TitleDevelopment } from './WhyChoose';
import ButtonPrimary from '../buttons/buttonPrimary';
import ButtonSecondary from '../buttons/buttonSecondary';

export default function Connect() {
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '2rem',
				}}
			>
				<TitleDevelopment variant="h5">
					Connect with our subject matter experts to discuss your business use
					case
				</TitleDevelopment>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						gap: '24px',
						flexWrap: 'wrap',
					}}
				>
					<ButtonPrimary>Contact User</ButtonPrimary>

					<ButtonSecondary>Connect on WhatsApp</ButtonSecondary>
					<ButtonSecondary>Connect on Telegram</ButtonSecondary>
				</Box>
			</Box>
		</Container>
	);
}
