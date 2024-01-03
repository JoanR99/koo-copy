import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type AiSolutionsCardProps = {
	title: string;
	icon: string;
};

export default function AiSolutionsCard(props: AiSolutionsCardProps) {
	return (
		<Card
			sx={{
				padding: '18px',
				borderRadius: '20px',
				boxShadow:
					'0px 1.19px 4.981px 0px rgba(0, 0, 0, 0.08), 0px 2.86px 11.97px 0px rgba(0, 0, 0, 0.12), 0px 5.384px 22.539px 0px rgba(0, 0, 0, 0.14), 0px 9.605px 40.205px 0px rgba(0, 0, 0, 0.17), 0px 17.964px 75.2px 0px rgba(0, 0, 0, 0.21), 0px 43px 180px 0px rgba(0, 0, 0, 0.29) !important',
				backgroundColor: '#C02327',
			}}
		>
			<Stack spacing="8px">
				<Box
					sx={{
						maxWidth: '40px',
					}}
				>
					<img src={props.icon} alt="icon" />
				</Box>
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '13px',
							sm: '15px',
						},
						fontWeight: {
							xs: '700',
						},
					}}
				>
					{props.title}
				</Typography>
			</Stack>
		</Card>
	);
}
