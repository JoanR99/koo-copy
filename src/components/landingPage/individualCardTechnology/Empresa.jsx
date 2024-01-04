import styled from '@emotion/styled';
import { Card, CardMedia, Typography } from '@mui/material';

export const Empresa = (props) => {
	const image = props.image;

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
				bgcolor: '#EAE8E8',
			}}
		>
			<CardMedia
				component="img"
				src={image}
				alt={props.title}
				sx={{
					width: 'auto',
					height: 'auto',
				}}
			/>
			<Typography
				sx={{
					color: '#303030',
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
