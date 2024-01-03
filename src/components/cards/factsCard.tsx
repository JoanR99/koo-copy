import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Ellipse from '@/assets/Img/svg/ellipse.svg';

type FactsCardProps = {
	title: string;
	description: string;
	maxWidth: string;
};

export default function FactsCard(props: FactsCardProps) {
	return (
		<Stack
			spacing="8px"
			sx={{
				maxWidth: props.maxWidth,
			}}
		>
			<Box>
				<img src={Ellipse} alt="ellipse" />
			</Box>

			<Stack>
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
