import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Ellipse from '@/assets/Img/svg/ellipse.svg';

type TechStackSevenCardProps = {
	title: string;
};

export default function TechStackSevenCard(props: TechStackSevenCardProps) {
	return (
		<Card
			sx={{
				padding: '24px',
				borderRadius: '20px',
				border: '2px solid #EAE8E8',
				backgroundColor: '#303030',
			}}
		>
			<Stack spacing="22px" alignItems="center">
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '20px',
						},
						fontWeight: {
							xs: '500',
						},
						textAlign: 'center',
					}}
				>
					{props.title}
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							sm: '1fr 1fr',
							md: '1fr 1fr 1fr',
						},

						columnGap: '48px',
						rowGap: '32px',
					}}
				>
					<Box
						sx={{
							maxWidth: '80px',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
					<Box
						sx={{
							maxWidth: '80px',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
					<Box
						sx={{
							maxWidth: '80px',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
					<Box
						sx={{
							maxWidth: '80px',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
					<Box
						sx={{
							maxWidth: '80px',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
					<Box
						sx={{
							maxWidth: '80px',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
					<Box
						sx={{
							maxWidth: '80px',
							gridColumn: '2',
							gridRow: '3',
						}}
					>
						<img src={Ellipse} alt="ellipse" />
					</Box>
				</Box>
			</Stack>
		</Card>
	);
}
