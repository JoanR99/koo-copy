import { Box, CardMedia, Divider, Typography, styled } from '@mui/material';
import logoUser from '../../../assets/Img/svg/mdi_user-outline.svg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import img from '@/assets/Img/Spiderman.png';

const style = {
	// 4
	img: img,
	title: 'NTF #123U2Y3...',
	email: '@UserUser',
	user: '',
	tamañoUser: {
		width: '6.10138rem',
		height: '2.15981rem',
		fontSizeUser: '0.9375rem !important',
	},
	dividerWidth: {
		widthDiv: '9.94713rem',
	},
	minDidTamaño: {
		widthMin: '8.06125rem',
		heightMin: '2.15981rem',
		letra: '0.8125rem !important',
	},
	minDid: 'Min bid: 0 KNRT',
	buyNow: 'Buy Now: 5 KNRT',
	width: '10.87594rem',
	height: '9.564rem',
	widthCont: '13.12263rem',
	heightCont: '21.56888rem',
	flexShrink: 0,
	fontSize: '1rem !important',
	widthImgUser: '1.62706rem',
	heightImgUser: '1.6385rem',
	widthCardUser: '2.52125rem',
	heightCardUser: '2.56731rem',
};

export const CardMartketPlace = (props) => {
	const width = style.width;
	const height = style.height;
	const fontSize = style.fontSize;
	const widthCont = style.widthCont;
	const heightCont = style.heightCont;
	const heightImgUser = style.heightImgUser;
	const widthImgUser = style.widthImgUser;
	const heightCardUser = style.heightCardUser;
	const widthCardUser = style.widthCardUser;
	const { widthUser, heightUser, fontSizeUser } = style.tamañoUser;
	const { widthDiv } = style.dividerWidth;
	const { widthMin, heightMin, letra } = style.minDidTamaño;

	const BoxStyle = styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '10px',
		justifyContent: 'center',
		// gap: '.09rem',
		flexShrink: 0,
		borderRadius: '1.25rem',
		background: '#595959',
		boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.1)',
	});
	const TypographyStyle = styled(Typography)({
		color: '#FFF',
		textAlign: 'center',
		fontStyle: 'normal',
		fontFamily: 'Poppins',
		lineHeight: 'normal',
		fontWeight: 800,
	});
	const BoxUser = styled(Box)({
		width: widthUser,
		height: heightUser,
		display: 'flex',
		// width: '6.10138rem',
		// height: '2.15981rem',
		padding: '0.625rem',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.625rem',
		flexShrink: 0,
	});

	const size =
		props.size == 1
			? 'scale(1)'
			: props.size == 2
			? 'scale(0.8)'
			: props.size == 3
			? 'scale(0.7)'
			: 'scale(0.6)';

	const widthSize =
		props.size == 1
			? '185px'
			: props.size == 2
			? '148px'
			: props.size == 3
			? '129.5px'
			: '111px';

	return (
		<Box
			sx={{
				width: { xs: '100%', md: widthSize },
				padding: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<BoxStyle
				sx={{
					transform: { md: size },
					// flex: '1 1 0',
				}}
			>
				<CardMedia
					src={img}
					component="img"
					sx={{
						width: { xs: '300px', md: '175px' },
						height: { xs: '300px', md: '175px' },
						borderRadius: '1.25rem',
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						gap: '0.625rem',
						padding: '0.625rem',
					}}
				>
					<TypographyStyle
						variant="h6"
						component="p"
						sx={{
							fontSize: fontSize,
						}}
					>
						{style.title}
					</TypographyStyle>
				</Box>
				<Box
					sx={{
						display: 'flex',
						width: '8.06125rem',
						height: '2.15981rem',
						padding: '0.625rem',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '0.625rem',
						flexShrink: 0,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: widthCardUser,
							height: heightCardUser,
							borderRadius: '0.9375rem',
							background: '#414141',
							flexShrink: 0,
							boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.1)',
						}}
					>
						{/* <CardMedia image={logoUser} component='user' sx={{
                        width: widthImgUser,
                        height: heightImgUser,
                        background: '#414141',
                        borderRadius: '0.9375rem',
                        objectFit: 'cover',
                        backgroundPosition: 'center',
                        // flexShrink: 0,
                    }} /> */}
						<PersonOutlineIcon sx={{ color: '#EAE8E8' }} />
					</Box>
					<BoxUser>
						<TypographyStyle
							variant="h6"
							component="span"
							sx={{
								fontSize: fontSizeUser,
							}}
						>
							@UserUser
						</TypographyStyle>
					</BoxUser>
				</Box>
				<Divider
					sx={{
						padding: '.4rem',
						width: widthDiv,
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						width: widthMin + 1,
						height: heightMin,
						padding: '0.1rem',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '0.625rem',
						flexShrink: 0,
					}}
				>
					<TypographyStyle
						sx={{
							padding: '.4rem',
							fontSize: letra,
						}}
					>
						{style.minDid}
					</TypographyStyle>
				</Box>
				<TypographyStyle
					sx={{
						fontSize: letra,
					}}
				>
					{style.buyNow}
				</TypographyStyle>
			</BoxStyle>
		</Box>
	);
};
