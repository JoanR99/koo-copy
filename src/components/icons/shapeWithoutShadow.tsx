import Box from '@mui/material/Box';
import RedShape from '@/assets/Img/svg/shape_whithout_shadow.svg';

type ShapeWithoutShadowProps = {
	icon: string;
};

export default function ShapeWithoutShadow(props: ShapeWithoutShadowProps) {
	return (
		<Box
			sx={{
				position: 'relative',
				width: 'fit-content',
			}}
		>
			<Box>
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
