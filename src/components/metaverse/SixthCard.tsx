import { Box, CardMedia, Typography } from '@mui/material';

type CardData = {
	id: number;
	title: string;
	description: string;
	img: string;
};

interface Props {
	data: CardData;
}

const SixthCard: React.FC<Props> = ({ data }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				paddingY: '24px',
				paddingX: '32px',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '24px',
				borderRadius: '20px',
				backgroundColor: '#595959',
				width: {
					xs: '100%',
					md: '296px',
				},
				height: '376px',
				boxSizing: 'border-box',
				boxShadow:
					'0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.07), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.10), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.12), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.14), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.17), 0px 100px 80px 0px rgba(0, 0, 0, 0.24);',
			}}
		>
			<CardMedia
				component="img"
				src={data.img}
				alt={data.title}
				sx={{ width: '60px', height: '60px' }}
			/>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '232px',
					alignItems: 'center',
					gap: '4px',
				}}
			>
				<Typography
					sx={{
						color: '#EAE8E8',

						textAlign: 'center',
						fontFamily: 'Inter',
						fontSize: '16px !important',
						fontStyle: 'normal',
						fontWeight: 700,
						lineHeight: 'normal',
					}}
				>
					{data.title}
				</Typography>
				<Typography
					sx={{
						color: '#EAE8E8',
						textAlign: 'center',
						fontFamily: 'Inter',
						fontSize: '12px !important',
						fontStyle: 'normal',
						fontWeight: 400,
						lineHeight: 'normal',
						width: '202px',
					}}
				>
					{data.description}
				</Typography>
			</Box>
		</Box>
	);
};

export default SixthCard;
