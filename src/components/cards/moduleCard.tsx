import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type ModuleCardProps = {
	title: string;
	description: string;
};

export default function ModuleCard(props: ModuleCardProps) {
	return (
		<Card
			sx={{
				padding: '24px',
				bgcolor: '#C02327',
				maxWidth: '400px',
			}}
		>
			<Stack spacing="16px">
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '23px',
						},
						fontWeight: {
							xs: '600',
						},
						textAlign: 'center',
					}}
				>
					{props.title}
				</Typography>
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '15px',
						},
						fontWeight: {
							xs: '600',
						},
					}}
				>
					{props.description}
				</Typography>
			</Stack>
		</Card>
	);
}
