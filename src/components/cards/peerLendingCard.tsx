import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import DarkEllipse from '../icons/darkEllipse';

type PeerLendingCardProps = {
	title: string;
	icon: string;
	description: string;
	isCompleted?: boolean;
};

export default function PeerLendingCard(props: PeerLendingCardProps) {
	return (
		<Box
			sx={{
				pt: '120px',
				maxWidth: '420px',
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
						top: '0',
						left: '50%',
						transform: 'translate(-50%, -60%)',
						maxWidth: '180px',
					}}
				>
					{props.isCompleted ? (
						<img src={props.icon} alt="icon" />
					) : (
						<DarkEllipse icon={props.icon} />
					)}
				</Box>
				<Card
					sx={{
						borderRadius: '10px',
						padding: '120px 45px 66px 45px',
						bgcolor: '#EAE8E8',
						boxShadow:
							'0px 3.957px 2.186px 0px rgba(0, 0, 0, 0.03), 0px 9.51px 5.254px 0px rgba(0, 0, 0, 0.04), 0px 17.906px 9.892px 0px rgba(0, 0, 0, 0.05), 0px 31.941px 17.646px 0px rgba(0, 0, 0, 0.06), 0px 59.742px 33.004px 0px rgba(0, 0, 0, 0.07), 0px 143px 79px 0px rgba(0, 0, 0, 0.10) !important',
						minHeight: '560px',
					}}
				>
					<Stack spacing="16px">
						<Typography
							sx={{
								color: '#C02327',
								fontSize: {
									xs: '30px',
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
								color: '#000',
								fontSize: {
									xs: '20px',
								},
								fontWeight: {
									xs: '600',
								},
								lineHeight: { sx: 'normal' },
								textAlign: 'center',
							}}
						>
							{props.description}
						</Typography>
					</Stack>
				</Card>
			</Box>
		</Box>
	);
}
