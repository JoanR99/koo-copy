import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RedEllipse from '@/assets/Img/svg/red_ellipse.svg';
import Box from '@mui/material/Box';

type AiFeatureCardProps = {
	title: string;
	description: string;
};

export default function AiFeatureCard(props: AiFeatureCardProps) {
	return (
		<Card
			sx={{
				padding: '16px',
				borderRadius: '20px',
				boxShadow: '0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.05) !important',
				maxWidth: {
					xs: '100%',
					md: '290px',
				},
				backgroundColor: '#EAE8E8',
				height: '100%',
				paddingBottom: '60px',
			}}
		>
			<Stack spacing="20px">
				<Box
					sx={{
						maxWidth: '55px',
					}}
				>
					<img src={RedEllipse} alt="ellipse" />
				</Box>
				<Stack spacing="8px">
					<Typography
						sx={{
							color: '#C02327',
							fontSize: {
								xs: '28px',
							},
							fontWeight: {
								xs: '600',
							},
							lineHeight: {
								xs: '1.1',
							},
						}}
					>
						{props.title}
					</Typography>
					<Typography
						sx={{
							color: '#353435',
							fontSize: {
								xs: '12px',
							},
							fontWeight: {
								xs: '400',
							},
						}}
					>
						{props.description}
					</Typography>
				</Stack>
			</Stack>
		</Card>
	);
}
