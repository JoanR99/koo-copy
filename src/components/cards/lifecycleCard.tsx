import BorderShape from '@/assets/Img/svg/border_shape.svg';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type LifecycleCardProps = {
	title: string;
	description: string;
	step: number;
};

export default function LifecycleCard(props: LifecycleCardProps) {
	return (
		<Box
			sx={{
				position: 'relative',
				width: 'fit-content',
				color: (theme) => theme.palette.text.primary,
			}}
		>
			<Box>
				<img src={BorderShape} alt="border shape" />
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -60%)',
					width: '80%',
				}}
			>
				<Stack
					spacing={{
						xs: '4px',
						md: '8px',
					}}
				>
					<Typography
						sx={{
							fontSize: {
								xs: '30px',
								sm: '50px',
							},
							fontWeight: {
								xs: '700',
							},
							textAlign: 'center',
						}}
					>
						{props.step}
					</Typography>
					<Typography
						sx={{
							fontSize: {
								xs: '16px',
								sm: '30px',
							},
							fontWeight: {
								xs: '700',
							},
							textAlign: 'center',
							lineHeight: '1.2',
						}}
					>
						{props.title}
					</Typography>
					<Typography
						sx={{
							fontSize: {
								xs: '10px',
								sm: '16px',
							},
							fontWeight: {
								xs: '400',
							},
						}}
					>
						{props.description}
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
}
