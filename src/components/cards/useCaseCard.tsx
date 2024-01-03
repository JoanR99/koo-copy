import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type UseCaseCardProps = {
	img: string;
	title: string;
	description: string;
};

export default function UseCaseCard(props: UseCaseCardProps) {
	return (
		<Card
			sx={{
				maxWidth: '350px',
				padding: '32px 32px 64px 32px',
				bgcolor: '#595959',
			}}
		>
			<Stack spacing="32px">
				<CardMedia
					component="img"
					src={props.img}
					alt={props.title}
					sx={{
						borderRadius: '20px',
						objectFit: 'cover',
						maxHeight: '150px',
					}}
				/>

				<Stack>
					<Typography
						sx={{
							color: '#EAE8E8',
							fontSize: {
								xs: '22px',
							},
							fontWeight: {
								xs: '600',
							},
							lineHeight: { sx: 'normal' },
							textAlign: 'center',
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
							lineHeight: { sx: 'normal' },
							textAlign: 'center',
						}}
					>
						{props.description}
					</Typography>
				</Stack>
			</Stack>
		</Card>
	);
}
