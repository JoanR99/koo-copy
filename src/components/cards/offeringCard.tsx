import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import RedShapeIcon from '../icons/redShapeIcon';
import RedCheck from '@/assets/Img/svg/red_check.svg';

type OfferingCardProps = {
	title: string;
	icon: string;
	items: string[];
};

export default function OfferingCard(props: OfferingCardProps) {
	return (
		<Box
			sx={{
				pt: '95px',
				maxWidth: '360px',
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
					}}
				>
					<RedShapeIcon icon={props.icon} />
				</Box>
				<Card
					sx={{
						borderRadius: '10px',
						padding: '42px 24px 24px 24px',
						bgcolor: '#353535',
						boxShadow: '-10px 13px 4px 0px rgba(0, 0, 0, 0.40) !important',
					}}
				>
					<Stack spacing="16px">
						<Typography
							sx={{
								color: '#EAE8E8',
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
							{props.title}
						</Typography>
						<Stack>
							{props.items.map((item) => (
								<Stack
									direction="row"
									spacing="8px"
									alignItems="center"
									key={item}
								>
									<img src={RedCheck} alt="red-check" />
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
										{item}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Card>
			</Box>
		</Box>
	);
}
