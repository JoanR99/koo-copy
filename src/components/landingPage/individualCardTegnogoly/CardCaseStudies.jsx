import { Box, CardContent, CardMedia, Typography, styled } from '@mui/material';

export const CardCaseStudies = (props) => {
	const img = props.image;
	const title = props.title;
	const lorem = props.lorem;
	console.log(img);

	const CardImageStyle = styled(CardMedia)({
		component: { img },
		display: 'flex',
		width: '19.625rem',
		height: '11.9375rem',
		borderRadius: '0.625rem',
		boxShadow: '2px 20px 20px 0px rgba(0, 0, 0, 0.2)',
	});
	const CardContainer = styled(CardContent)({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: '8px',
		padding: '0 !important',
	});
	return (
		<Box
			sx={{
				width: '22rem',
				display: 'flex',
				padding: '1rem 1rem 3rem 1rem',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '32px',
				borderRadius: '1.25rem',
				background: '#595959',
				boxShadow: '2px 20px 20px 0px rgba(0, 0, 0, 0.2)',
			}}
		>
			<CardImageStyle image={img} />
			<CardContainer>
				<Typography
					width="13rem"
					sx={{
						color: '#FFF',
						fontFamily: 'Poppins',
						fontSize: {
							xs: '20px',
						},
						fontStyle: 'normal',
						fontWeight: {
							xs: '700',
						},
						lineHeight: 'normal',
					}}
				>
					{title}
				</Typography>
				<Typography
					width="19.625rem"
					height="7.875rem"
					sx={{
						color: '#FFF',
						fontFamily: 'Poppins',
						fontSize: {
							xs: '14px',
						},
						fontStyle: 'normal',
						fontWeight: { xs: 400 },
						lineHeight: 'normal',
					}}
				>
					{lorem}
				</Typography>
			</CardContainer>
		</Box>
	);
};
