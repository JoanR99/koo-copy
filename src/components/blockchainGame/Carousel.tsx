import {
	Box,
	CardMedia,
	Container,
	Stack,
	Typography,
	styled,
	useTheme,
} from '@mui/material';
import ellipse from '@/assets/Img/svg/Ellipse_27.svg';
import ellipse1 from '@/assets/Img/svg/Ellipse_29.svg';
import ellipse3 from '@/assets/Img/svg/Ellipse_30.svg';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import I992 from '@/assets/Img/992.png';
import I993 from '@/assets/Img/993.png';
import I994 from '@/assets/Img/994.png';
import I995 from '@/assets/Img/995.png';
import I996 from '@/assets/Img/996.png';
import I997 from '@/assets/Img/997.png';
import I998 from '@/assets/Img/998.png';
import I999 from '@/assets/Img/999.png';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1300 },
		items: 4,
	},
	laptop: {
		breakpoint: { max: 1300, min: 920 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 920, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CardMediaStyle = styled(CardMedia)({
	// width: '13.3125rem',
	// height: '24.5625rem',
	borderRadius: '2.5rem',
});

const DotButton = styled('button')({
	border: 'none',
	paddingX: '10px',
	backgroundColor: 'transparent',
});

const CustomDot = (props: any) => {
	const {
		onMove,
		index,
		active,
		carouselState: { currentSlide, deviceType },
	} = props;
	const theme = useTheme();
	const themeEllipse = theme.palette.mode === 'dark' ? ellipse1 : ellipse3;

	// onMove means if dragging or swiping in progress.
	// active is provided by this lib for checking if the item is active or not.
	return (
		<DotButton onClick={() => props.onClick()}>
			<img src={active ? ellipse : themeEllipse} alt="ellipse" />
		</DotButton>
	);
};

export default function Carousel() {
	return (
		<Container>
			<ReactCarousel
				responsive={responsive}
				showDots={true}
				arrows={false}
				customDot={<CustomDot />}
			>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I993}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I994}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I995}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I996}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I997}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I998}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I999}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
				<Box
					sx={{
						display: 'inline-flex',
						padding: '1.5rem',
						alignItems: 'flex-start',
						gap: '0.5rem',
						borderRadius: '3.125rem',
						background: '#595959',
						boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
						my: '40px',
					}}
				>
					<CardMediaStyle
						image={I992}
						sx={{
							width: '13.3125rem',
							height: '24.5625rem',
						}}
					/>
				</Box>
			</ReactCarousel>
		</Container>
	);
}
