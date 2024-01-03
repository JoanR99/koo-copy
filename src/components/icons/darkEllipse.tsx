import Box from '@mui/material/Box';
import DarkEllipseImg from '@/assets/Img/svg/dark_ellipse.svg';

type DarkEllipseProps = {
	icon: string;
};

export default function DarkEllipse(props: DarkEllipseProps) {
	return (
		<Box
			sx={{
				position: 'relative',
				minWidth: '180px',
			}}
		>
			<Box>
				<img src={DarkEllipseImg} alt="dark ellipse" />
			</Box>

			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<img src={props.icon} alt="icon" />
			</Box>
		</Box>
	);
}
