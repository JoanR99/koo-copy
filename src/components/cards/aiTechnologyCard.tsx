import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Ellipse from '@/assets/Img/svg/ellipse.svg';
import Check from '@/assets/Img/svg/check.svg';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

type AiTechnologyCardProps = {
	title: string;
};

const CheckIcon = styled('img')({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	padding: '0px',
	maxWidth: '16px',
	maxHeight: '11px',
});

export default function AiTechnologyCard(props: AiTechnologyCardProps) {
	return (
		<Card
			sx={{
				padding: '8px 32px 8px 8px',
				borderRadius: '50px',
				border: '2px solid #C02327',
				bgcolor: '#323232',
			}}
		>
			<Stack direction="row" spacing="8px">
				<Box
					sx={{
						position: 'relative',
						maxWidth: '26px',
						maxHeight: '26px',

						padding: '0px',
					}}
				>
					<img src={Ellipse} alt="ellipse" />

					<CheckIcon src={Check} alt="check" />
				</Box>
				<Typography
					sx={{
						color: '#EAE8E8',
						fontSize: {
							xs: '16px',
						},
						fontWeight: {
							xs: '500',
						},
						textAlign: 'center',
					}}
				>
					{props.title}
				</Typography>
			</Stack>
		</Card>
	);
}
