import { Box, CardMedia, Container, Typography, styled } from '@mui/material';
import img1 from '../../../assets/Img/svg/material-symbols_arrow-back-ios-new.svg';
import img2 from '../../../assets/Img/svg/material-symbols_arrow-back-ios-new (1).svg';
import imgGroup from '../../../assets/Img/svg/completo.svg';

export const ForDecentralized = () => {
	const CardMediaStyle = styled(CardMedia)({
		color: '#FFFFFF',
		width: '2rem',
	});
	const CardMediaImg = styled(CardMedia)({
		flexShrink: 0,
	});
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				flexShrink: 0,
				background: '#C02327',
				height: {
					xs: '39.75rem',
					sm: '40.70rem',
					md: '41rem',
					lg: '37.5rem',
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexWrap: {
						xs: 'wrap',
						md: 'wrap',
						lg: 'nowrap',
					},
					alignItems: 'center',
					justifyContent: {
						xs: 'center',
						md: 'space-between',
						lg: 'space-between',
					},
					width: {
						xs: '18rem',
						sm: '50rem',
						md: '55rem',
						lg: '100%',
					},
					height: {
						xs: '45rem',
					},
					gap: {
						xs: '1rem',
						sm: '1rem',
						md: '.5rem',
						lg: '5rem',
					},
					pl: {
						lg: '12rem',
					},

					mx: 'auto',
				}}
			>
				<Box
					sx={{
						width: {
							xs: '12rem',
							sm: '27rem',
							md: '30rem',
							lg: 'full',
						},
					}}
				>
					<Typography
						variant="h1"
						sx={{
							color: '#EAE8E8',
							fontFamily: 'Inter',
							alignItems: 'center',
							justifyContent: 'center',
							fontStyle: 'normal',
							fontWeight: 700,
							lineHeight: 'normal',
							// fontSize: '2.5rem !important',
							fontSize: {
								xs: '1.4rem !important',
								sm: '2rem !important',
								md: '2rem !important',
								lg: '2.5rem !important',
							},
							width: {
								xs: '14rem',
								sm: '22rem',
								md: '20rem',
								lg: '30rem',
							},
							paddingBottom: '1rem',
						}}
					>
						For a decentralized World
					</Typography>
					<Typography
						sx={{
							color: '#EAE8E8',
							fontFamily: 'Inter',
							// fontSize: '1.25rem',
							fontStyle: 'normal',
							fontWeight: 500,
							lineHeight: 'normal',
							fontSize: {
								xs: '1.1rem !important',
								sm: '1.4rem !important',
								md: '1rem !important',
								lg: '1.25rem',
							},
							width: {
								xs: '12rem',
								sm: '22rem',
								md: '20rem',
								lg: '32rem',
							},
						}}
					>
						Use the power of blockchain to adapt to change, improve your ability
						to innovate and increase your growth.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'flex-end',
						justifyContent: 'flex-end',
						height: {
							xs: '18.8rem',
							sm: '22rem',
							md: '29rem',
							lg: '37.5rem',
						},
						width: {
							xs: '66rem',
						},
					}}
				>
					<CardMediaImg
						image={imgGroup}
						sx={{
							objectFit: 'cover',

							width: {
								xs: '35rem',
								sm: '45rem',
								md: '45rem',
								lg: '70rem',
							},
							height: {
								xs: '20rem',
								sm: '20rem',
								md: '26rem',
								lg: '37.5rem',
							},
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};
