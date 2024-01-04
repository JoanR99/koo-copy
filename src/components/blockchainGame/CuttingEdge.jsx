import { Box, Container, Stack, Typography } from '@mui/material';
import CuttingEdgeImg from '@/assets/Img/CuttingEdge.png';

export default function CuttingEdge() {
	return (
		<Box
			sx={{
				backgroundImage: `url(${CuttingEdgeImg})`,
				width: {
					xs: '100vw',
					sm: '100%',
				},
				minHeight: '480px',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				position: 'relative',
				padding: {
					xs: '40px 20px',
					md: '20px 40px',
				},
			}}
		>
			<Box
				sx={{
					backgroundColor: '#C02327',
					mixBlendMode: 'color',
					position: 'absolute',
					top: 0,
					left: 0,
					height: '480px',
					width: '100%',
				}}
			></Box>
			<Container>
				<Stack spacing="26px">
					<Typography
						sx={{
							color: '#C02327',
							textAlign: 'left',
							zIndex: '999',

							fontSize: {
								xs: '32px',
							},
							fontWeight: { xs: '600' },
						}}
					>
						Blockchain Game Development at the Cutting Edge
					</Typography>
					<Typography
						variant="string"
						sx={{
							color: '#EAE8E8',
							textAlign: 'left',
							zIndex: '999',

							maxWidth: '440px',

							fontSize: { xs: '14px' },
							fontWeight: { xs: '600' },
						}}
					>
						Established for over a decade, we are a team with great ideas,
						skills, and real-world experience in creating great games with an
						unrivaled experience. We harness the latest blockchain tools to
						craft exhilarating games that help you disrupt the market.
						<br />
						<br />
						Whether you want to launch a console game, a desktop game, or invest
						in mobile game development instead, leverage our mission-driven
						blockchain game development services to accomplish your goals
					</Typography>
					<Typography
						sx={{
							color: '#EAE8E8',
							textAlign: 'left',
							zIndex: '999',

							maxWidth: '420px',
							fontSize: { xs: '20px' },
							fontWeight: { xs: '600' },
						}}
					>
						Conquer the gaming market with a powerful game built by our experts.
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}
