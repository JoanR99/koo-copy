import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Ellipse from '@/assets/Img/svg/ellipse.svg';

type TechStackFourCardProps = {
	title: string;
};

export default function TechStackFourCard(props: TechStackFourCardProps) {
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
						},

						columnGap: '96px',
						rowGap: '56px',
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
				</Box>
			</Stack>
		</Card>
	);
}
