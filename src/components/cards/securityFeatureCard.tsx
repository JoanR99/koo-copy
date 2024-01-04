import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ShapeWithoutShadow from '../icons/shapeWithoutShadow';

type SecurityFeatureCardProps = {
	title: string;
	icon: string;
	description: string;
};

export default function SecurityFeatureCard(props: SecurityFeatureCardProps) {
	return (
		<Box
			sx={{
				pt: '180px',
				maxWidth: {
					xs: '100%',
					md: '320px',
				},
				color: (theme) => theme.palette.text.primary,
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
						transform: 'translate(-50%, -100%)',
						maxWidth: '160px',
					}}
				>
					<ShapeWithoutShadow icon={props.icon} />
				</Box>
				<Card
					sx={{
						borderRadius: '20px',
						padding: '17px 32px',
						bgcolor: 'transparent',
						boxShadow: 'none !important',
						minHeight: '280px',
						border: '8px solid #C02327;',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Stack spacing="24px" justifyItems="center">
						<Typography
							sx={{
								fontSize: {
									xs: '25px',
								},
								fontWeight: {
									xs: '700',
								},
								lineHeight: { sx: 'normal' },
								textAlign: 'center',
							}}
						>
							{props.title}
						</Typography>
						<Typography
							sx={{
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
				</Card>
			</Box>
		</Box>
	);
}
