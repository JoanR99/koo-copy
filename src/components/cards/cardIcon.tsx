import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type CardIconProps = {
	icon: string;
	title: string;
	description: string;
};

export default function CardIcon(props: CardIconProps) {
	return (
		<Box
			sx={{
				pt: '95px',
				maxWidth: '540px',
			}}
		>
			<Box
				sx={{
					position: 'relative',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						top: {
							xs: '-20%',
							sm: '-50%',
						},
						left: '75%',
						maxWidth: '144px',
					}}
				>
					<img src={props.icon} alt={props.title} />
				</Box>
				<Box
					sx={{
						borderRadius: '20px',
						border: {
							xs: '4px solid #EAE8E8',
							sm: '6px solid #EAE8E8',
						},
						padding: '32px',
					}}
				>
					<Stack>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '25px',
								},
								fontWeight: {
									xs: '700',
								},
								lineHeight: { sx: 'normal' },
								maxWidth: {
									xs: '80%',
									sm: '100%',
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
								lineHeight: { sx: 'normal' },
							}}
						>
							{props.description}
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}
