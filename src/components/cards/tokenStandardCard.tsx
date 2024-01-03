import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RedDiamond from '../icons/redDiamond';
import Card from '@mui/material/Card';

type TokenStandardCardProps = {
	title: string;
	description: string;
};

export default function TokenStandardCard(props: TokenStandardCardProps) {
	return (
		<Box
			sx={{
				pt: '290px',
				maxWidth: '390px',
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
						transform: 'translate(-50%, -110%)',
					}}
				>
					<RedDiamond title={props.title} />
				</Box>
				<Card
					sx={{
						borderRadius: '10px',
						padding: '24px',
						bgcolor: '#595959',
						boxShadow:
							'0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.05), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.07), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.09), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.17) !important',
						minHeight: '228px',
					}}
				>
					<Stack spacing="16px">
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '15px',
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
				</Card>
			</Box>
		</Box>
	);
}
