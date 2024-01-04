import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type FactsCardProps = {
	title: string;
	description: string;
	maxWidth: string;
	img: string;
};

export default function FactsCard(props: FactsCardProps) {
	return (
		<Stack
			spacing="8px"
			sx={{
				maxWidth: {
					xs: '100%',
					md: props.maxWidth,
				},
			}}
		>
			<Box>
				<img src={props.img} alt={props.title} />
			</Box>

			<Stack spacing="5px">
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '25px',
						},
						fontWeight: {
							xs: '600',
						},
						lineHeight: { sx: 'normal' },
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
					}}
				>
					{props.description}
				</Typography>
			</Stack>
		</Stack>
	);
}
