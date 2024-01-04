import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type AiFactCardProps = {
	title: string;
	img: string;
};

export default function AiFactCard(props: AiFactCardProps) {
	return (
		<Card
			sx={{
				padding: '16px',
				borderRadius: '20px',
				boxShadow:
					'-6px 21px 24.3px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important',
				maxWidth: '405px',
				bgcolor: '#c02327',
			}}
		>
			<Stack spacing="20px">
				<Box
					sx={{
						maxWidth: '55px',
					}}
				>
					<img src={props.img} alt={props.title} />
				</Box>
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
					{props.title}
				</Typography>
			</Stack>
		</Card>
	);
}
