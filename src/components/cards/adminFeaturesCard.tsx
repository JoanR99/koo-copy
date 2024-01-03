import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Check from '@/assets/Img/svg/red_check.svg';

type AdminFeaturesCardProps = {
	title: string;
	subtitle: string;
	items: string[];
};

export default function AdminFeaturesCard(props: AdminFeaturesCardProps) {
	return (
		<Card
			sx={{
				borderRadius: '10px',
				boxShadow: 'none !important',
				bgcolor: '#303030',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					bgcolor: '#C02327',
					borderRadius: '10px 10px 0px 0px',
					py: '10px',
				}}
			>
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '20px',
						},
						fontWeight: {
							xs: '600',
						},
						textAlign: 'center',
					}}
				>
					{props.title}
				</Typography>
			</Box>
			<Box
				sx={{
					bgcolor: (theme) => theme.palette.background.paper,
					py: '10px',
					px: '40px',
				}}
			>
				<Typography
					sx={{
						color: '#C02327',
						fontSize: {
							xs: '20px',
						},
						fontWeight: {
							xs: '600',
						},
						textAlign: 'center',
					}}
				>
					{props.subtitle}
				</Typography>
			</Box>
			<Box
				sx={{
					borderRadius: '0px 0px 10px 10px',
					border: '5px solid #C02327',
					bgcolor: (theme) => theme.palette.background.default,
					color: (theme) => theme.palette.text.primary,
					flexGrow: 1,
					py: '10px',
					px: '20px',
				}}
			>
				<Stack spacing="0px">
					{props.items.map((item, index) => (
						<Stack direction="row" spacing="14px">
							<img src={Check} alt="check" />
							<Typography
								key={index}
								sx={{
									fontSize: {
										xs: '16px',
									},
									fontWeight: {
										xs: '400',
									},
									textAlign: 'center',
									padding: '10px 0px',
								}}
							>
								{item}
							</Typography>
						</Stack>
					))}
				</Stack>
			</Box>
		</Card>
	);
}
