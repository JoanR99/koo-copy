import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Ellipse from '@/assets/Img/svg/ellipse.svg';
import Box from '@mui/material/Box';

type AiOfferingCardProps = {
	title: string;
	description: string;
};

export default function AiOfferingCard(props: AiOfferingCardProps) {
	return (
		<Card
			sx={{
				padding: '32px',
				borderRadius: '20px',
				border: '2px solid #EAE8E8',
				maxWidth: '420px',
				backgroundColor: '#303030',
			}}
		>
			<Stack spacing="16px">
				<Box
					sx={{
						maxWidth: '80px',
					}}
				>
					<img src={Ellipse} alt="ellipse" />
				</Box>
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '25px',
						},
						fontWeight: {
							xs: '600',
						},
					}}
				>
					{props.title}
				</Typography>
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '16px',
						},
						fontWeight: {
							xs: '400',
						},
					}}
				>
					{props.description}
				</Typography>
			</Stack>
		</Card>
	);
}
