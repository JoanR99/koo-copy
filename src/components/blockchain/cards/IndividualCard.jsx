import { CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export const IndividualCard = (props) => {
	const image = props.image;
	const Width = props.width;
	const Height = props.height;
	const cardContentStyle = {
		background: '#595959',
		display: 'flex',
		width: {
			xs: '6.375rem',
			sm: '7.375rem',
			md: '8.375rem',
			lg: '9.375rem',
		},
		height: {
			xs: '6.375rem',
			sm: '7.375rem',
			md: '8.375rem',
			lg: '9.375rem',
		},
		padding: '0.5rem',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.5rem',
		flexShrink: '0',
		borderRadius: '1.25rem',
		boxShadow: '2px 20px 20px 0px rgba(0, 0, 0, 0.2)',
	};
	const cardImageStyle = {
		component: { image },
		// width: '5.0625rem',
		// height: '5.0625rem'
		width: Width,
		height: Height,
	};
	return (
		<CardContent sx={cardContentStyle}>
			<CardMedia component="img" src={image} sx={cardImageStyle} />
		</CardContent>
	);
};
