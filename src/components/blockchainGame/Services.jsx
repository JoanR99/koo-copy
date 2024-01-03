import { Box, Container, Stack, Typography } from '@mui/material';
import CardsServices from './cards/CardsServices';
import Over1 from '@/assets/Img/over1.png';
import Over2 from '@/assets/Img/over2.png';
import Over3 from '@/assets/Img/over3.png';
import Over4 from '@/assets/Img/over4.png';
import Over5 from '@/assets/Img/over5.png';
import Over6 from '@/assets/Img/over6.png';

export default function Services() {
	return (
		<Container>
			<Stack
				spacing="32px"
				alignItems="center"
				sx={{
					width: '100%',
				}}
			>
				<Stack
					spacing="8px"
					sx={{
						maxWidth: {
							md: '1000px',
						},
					}}
				>
					<Typography
						sx={{
							textAlign: 'center',
							fontSize: { xs: '32px' },
							fontWeight: { xs: '500' },
						}}
					>
						Our Crypto Game Development Services
					</Typography>
					<Typography
						sx={{
							textAlign: 'center',

							fontSize: { xs: '16px' },
							fontWeight: { xs: '500' },
						}}
					>
						One idea is all it takes to create a new virtual world. Our video
						game development company combines the latest toolswith comprehensive
						services to turn that idea into a reality.
					</Typography>
				</Stack>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							sm: '1fr 1fr',
							md: '1fr 1fr 1fr',
						},
						gap: {
							xs: '30px',
							md: '50px',
						},
					}}
				>
					<CardsServices
						img={Over1}
						title="Blockchain Game Consulting"
						text="Our team of experts offers blockchain game development consulting services to enable new entrants in the field to enjoy a smooth transition into the world of blockchain gaming."
						sx={{ flex: '0 0 calc(100% - 2 * 3.125rem) / 3' }}
					/>
					<CardsServices
						img={Over2}
						title="Unity 3D Game Development"
						text="60% of AR/VR content and 50% of mobile games are powered by Unity. We capitalize on the potential of Unity to create fantastic games that offer highly immersive 3D experiences."
						sx={{ flex: '0 0 calc(100% - 2 * 3.125rem) / 3' }}
					/>
					<CardsServices
						img={Over3}
						title="Unreal Engine 5 Games"
						text="Our team of blockchain game developers brings incredibly immersive and realistic interactive experiences to life by creating truly expansive worlds with greater freedom & flexibility."
						sx={{ flex: '0 0 calc(100% - 2 * 3.125rem) / 3' }}
					/>
					<CardsServices
						img={Over4}
						title="2D/3D Game Development"
						text="Combined with years of experience and expertise, our team of experienced blockchain game designers delivers 2D/3D games with amazing gameplay, art design, & graphics."
						sx={{ flex: '0 0 calc(100% - 2 * 3.125rem) / 3' }}
					/>
					<CardsServices
						img={Over5}
						title="Metaverse Game Development"
						text="We develop a wide range of games based on different themes for the expansive metaverse world such as play-to-earn, move-to-earn, player-vs-player, and a number of others."
						sx={{ flex: '0 0 calc(100% - 2 * 3.125rem) / 3' }}
					/>
					<CardsServices
						img={Over6}
						title="Game Maintenance Services"
						text="We offer comprehensive game maintenance and upgrade services to make sure that the developed games are able to run smoothly in an error-free manner without any interruption."
						sx={{ flex: '0 0 calc(100% - 2 * 3.125rem) / 3' }}
					/>
				</Box>
			</Stack>
		</Container>
	);
}
