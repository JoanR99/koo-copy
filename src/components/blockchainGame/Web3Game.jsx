import { Box, Stack, Typography } from '@mui/material';
import Web3GameImage from '@/assets/Img/web_3.png';

export default function Web3Game() {
	return (
		<Box>
			<Stack direction="row" alignItems="center">
				<Box
					sx={{
						maxWidth: '660px',
						display: {
							xs: 'none',
							md: 'block',
						},
					}}
				>
					<img src={Web3GameImage} alt="Web3Game" />
				</Box>
				<Stack
					spacing="26px"
					sx={{
						maxWidth: '670px',
						padding: {
							xs: '0 20px',
							md: '0 40px',
						},
						margin: 'auto',
					}}
				>
					<Stack>
						<Typography
							sx={{
								fontSize: { xs: '49px' },
								fontWeight: { xs: '600' },
							}}
						>
							Web3 Game Development:
						</Typography>
						<Typography
							sx={{
								color: '#C02327',
								fontSize: { xs: '32px' },
								fontWeight: { xs: '600' },
							}}
						>
							Connecting Real World and Virtual World
						</Typography>
					</Stack>
					<Typography
						sx={{
							textAlign: 'justify',
							fontSize: { xs: '16px' },
							fontWeight: { xs: '500' },
						}}
					>
						We have an extensive history of developing great digital experiences
						across industries. Our designers and developers work together in the
						real world to create an immersive digital world that is more
						meaningful than real life.
						<br />
						<br />
						Whether it is a simple card game, a more complex combat game with
						weapons and assets, or a digital twin city wherein the players can
						perform and monetize their tasks, we create everything
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
}
