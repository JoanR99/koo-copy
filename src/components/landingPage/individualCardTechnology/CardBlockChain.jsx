import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	styled,
} from '@mui/material';

export const CardBlockChain = (props) => {
	const image = props.image;
	const title = props.title;
	const lorem = props.lorem;

	const cardStyle = {
		display: 'flex',
		padding: '.5rem .1rem 3rem .1rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '3rem',
		borderRadius: '1.25rem',
		background: '#595959',
		boxShadow: '2px 20px 20px 0px rgba(0, 0, 0, 0.2)',
	};
	const CardConteiner = styled(CardContent)({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.5rem',
		padding: '0 !important',
	});
	const CardImageStyle = styled(CardMedia)({
		component: { image },
		display: 'flex',
		width: '100%',
		borderRadius: '0.625rem',
		boxShadow: '2px 20px 20px 0px rgba(0, 0, 0, 0.2)',
	});
	return (
		<Box
			sx={{
				display: 'flex',
				padding: {
					xs: '16px 16px 48px 16px',
				},
				flexDirection: 'column',
				alignItems: 'center',
				gap: '3rem',
				borderRadius: '1.25rem',
				background: '#595959',
				boxShadow: '2px 20px 20px 0px rgba(0, 0, 0, 0.2)',
				width: '100%',
				maxWidth: { md: '16.4375rem' },
				minHeight: { md: '32rem' },
				maxHeight: {
					xs: '38rem',
					md: '32rem',
				},
				mx: 'auto',
			}}
		>
			<CardImageStyle
				image={image}
				sx={{
					height: {
						xs: '10.375rem',
						md: '8.375rem',
					},
				}}
			/>
			<CardConteiner>
				<Typography
					variant="h4"
					sx={{
						color: '#FFF',
						textAlign: 'center',
						fontFamily: 'Poppins',
						fontSize: {
							xs: '16px',
						},
						fontStyle: 'normal',
						fontWeight: {
							xs: 700,
						},
						lineHeight: 'normal',
						overflow: 'hidden',
						whiteSpace: 'normal',
						wordWrap: 'break-word',
					}}
				>
					{title}
				</Typography>
				<Typography
					variant="body2"
					sx={{
						color: '#FFF',
						alignItems: 'center',
						textAlign: 'center',
						fontFamily: 'Poppins',
						fontSize: {
							xs: '14px',
						},
						fontStyle: 'normal',
						fontWeight: {
							xs: 400,
						},
						lineHeight: 'normal',
					}}
				>
					{lorem}
				</Typography>
			</CardConteiner>
		</Box>
	);
};
