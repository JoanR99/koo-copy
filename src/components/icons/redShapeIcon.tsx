import Box from '@mui/material/Box';
import RedShape from '@/assets/Img/svg/red_shape.svg';

type RedShapeIconProps = {
	icon: string;
};	

export default function RedShapeIcon(props: RedShapeIconProps) {
	return (
		<Box
			sx={{
				position: 'relative',
				width: 'fit-content',
			}}
		>
			<Box
				sx={{
					width: '100px',
					height: '100px',
				}}
			>
				<img src={RedShape} alt="red shape" />
			</Box>

			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<img src={props.icon} alt="red shape" />
			</Box>
		</Box>
	);
}
