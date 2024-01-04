import { Box, Container, Typography } from '@mui/material';
import { sixthData } from '../../data/metaverse';
import SixthCard from './SixthCard';

export default function SixthSection(): JSX.Element {
	return (
		<Box
			sx={{
				display: 'flex',
				paddingY: '80px',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '32px',
				backgroundColor: '#C02327',
				width: '100%',
			}}
		>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '32px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: {
							xs: '90%',
							lg: '1024px',
						},
						gap: '24px',
					}}
				>
					<Typography
						component="h3"
						sx={{
							color: '#EAE8E8',

							fontFamily: 'Inter',
							fontSize: '32px !important',
							fontStyle: 'normal',
							fontWeight: 600,
							lineHeight: 'normal',
							textAlign: 'center',
						}}
					>
						Metaverse Use Cases: A Closer Look At
					</Typography>
					<Typography
						component="p"
						sx={{
							color: '#EAE8E8',
							textAlign: 'center',
							fontFamily: 'Inter',
							fontSize: '16px !important',
							fontStyle: 'normal',
							fontWeight: 400,
							lineHeight: 'normal',
						}}
					>
						Koolinart's business model is centered on the following captivating
						Metaverse use cases, which transform industries by opening up
						exciting opportunities for individuals and businesses alike.-
					</Typography>
				</Box>

				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '54px',
						flexDirection: {
							xs: 'column',
							lg: 'row',
						},
					}}
				>
					{sixthData.map((data) => (
						<SixthCard key={data.id} data={data} />
					))}
				</Box>
			</Container>
		</Box>
	);
}
