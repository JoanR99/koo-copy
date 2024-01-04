import styled from '@emotion/styled';
import { Card, CardMedia, Typography } from '@mui/material';

export const Empresa = (props) => {
	const image = props.image;
	const CardImageStyle = styled(CardMedia)({
		component: { image },
		width: '5rem',
		height: '5rem',
	});
	return (
		<Card
			sx={{
				display: 'flex',
				padding: '3rem',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'none',
				gap: '1.5rem',
				borderRadius: '0.625rem',
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: (theme) => theme.palette.text.primary,
			}}
		>
			<CardImageStyle image={image} />
			<Typography
				sx={{
					color: (theme) => theme.palette.text.primary,
					fontFamily: 'Inter',
					fontSize: '1.25rem',
					fontStyle: 'normal',
					fontWeight: 600,
					lineHeight: 'normal',
				}}
			>
				{props.title}
			</Typography>
		</Card>
	);
};
