import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type ModuleCardProps = {
	title: string;
	description: string;
};

export default function AssetModuleCard(props: ModuleCardProps) {
	return (
		<Card
			sx={{
				padding: '32px 24px 64px 24px',
				bgcolor: '#595959',
				maxWidth: {
					xs: '100%',
					md: '290px',
				},
			}}
		>
			<Stack spacing="32px">
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '22px',
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
							xs: '12px',
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
