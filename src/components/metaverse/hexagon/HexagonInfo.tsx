import { Box, CardMedia, Typography } from '@mui/material';
import Hexagon from './Hexagon';

type HexagonData = {
	id: number;
	title: string;
	description: string;
	img: string;
};

interface Props {
	hexagon: HexagonData;
}

const HexagonInfo: React.FC<Props> = ({ hexagon }) => {
	return (
		<Box
			sx={{
				width: { xs: '337px', sm: '426px' },
				height: { xs: '380px', sm: '460px' },
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Hexagon />

			<Box
				sx={{
					display: 'flex',
					height: '265px',
					width: '286px',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '16px',
					position: 'absolute',
				}}
			>
				<CardMedia
					component="img"
					src={hexagon.img}
					alt={hexagon.title}
					sx={{
						width: {
							xs: '80px',
							sm: '119px',
						},
						height: {
							xs: '80px',
							sm: '119px',
						},
					}}
				/>
				<Typography
					component="h5"
					sx={{
						textAlign: 'justify',
						fontFamily: 'Inter',
						fontSize: '20px !important',
						fontStyle: 'normal',
						fontWeight: 700,
						lineHeight: 'normal',
					}}
				>
					{hexagon.title}
				</Typography>
				<Typography
					component="p"
					sx={{
						textAlign: 'center',
						fontFamily: 'Inter',
						fontSize: '12px !important',
						fontStyle: 'normal',
						fontWeight: 400,
						lineHeight: 'normal',
					}}
				>
					{hexagon.description}
				</Typography>
			</Box>
		</Box>
	);
};

export default HexagonInfo;
