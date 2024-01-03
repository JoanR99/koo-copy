import { Box, Container, Stack, Typography } from '@mui/material';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import { UnstyledLink } from '@/components/buttons/unstyledLink';
import GameTopImage from '@/assets/Img/game_top.png';

export default function GameTop() {
	return (
		<Box
			sx={{
				backgroundImage: `linear-gradient(180deg, rgba(192, 35, 39, 0.00) 0%, rgba(0, 0, 0, 0.95) 85.25%), url(${GameTopImage})`,

				width: {
					xs: '100vw',
					sm: '100%',
				},
				height: '580px',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',

				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-end',
				pb: '64px',
				borderBottom: '1px solid #C02327',
			}}
		>
			<Container>
				<Stack spacing="16px" alignItems="center">
					<Typography
						sx={{
							color: '#EAE8E8',
							textAlign: 'center',
							fontSize: {
								xs: '28px',
								md: '32px',
							},
							fontWeight: {
								xs: '700',
							},
						}}
					>
						Blockchain Game Development Company
					</Typography>

					<Typography
						sx={{
							color: '#EAE8E8',
							textAlign: 'center',

							fontSize: {
								xs: '16px',
							},
							fontWeight: {
								xs: '500',
							},
						}}
					>
						Creating the most interactive game environments for an immersive
						experience
					</Typography>
					<ButtonPrimary>
						<UnstyledLink to="/contact">Contact us</UnstyledLink>
					</ButtonPrimary>
				</Stack>
			</Container>
		</Box>
	);
}
