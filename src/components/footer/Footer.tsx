import {
	Box,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import img from '@/assets/Img/Isologo Blanco.png';
import { Link } from 'react-router-dom';

const ContainerStyle = styled(Box)({
	background: '#C02327',
	height: '100%',
	maxWidth: '100vw',
});

const CardMediaContainer = styled(CardMedia)({
	width: '5.5625rem',
	height: '7.0625rem',
	flexShrink: 0,
});
const TypographyText = styled(Typography)({
	color: '#FFF',
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '1.8rem',
	width: '10.6875rem',
	height: '2.5rem',
});

const Title = styled(Typography)({
	color: '#FFF',
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '800',
	fontSize: '25px',
});

const LinkStyled = styled(Link)({
	textDecoration: 'none',
	color: '#FFF',
	fontFamily: 'Poppins',
	fontStyle: 'normal',
	fontWeight: '800',
	fontSize: '20px',
});

export const Footer = () => {
	return (
		<ContainerStyle
			sx={{
				padding: {
					xs: '24px',
					lg: '48px',
				},
			}}
		>
			<Container>
				<Stack
					direction={{ xs: 'column', lg: 'row' }}
					justifyContent="space-between"
					spacing="24px"
					alignItems={{
						xs: 'center',
						md: 'flex-start',
					}}
				>
					<CardContent
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '2rem',
							padding: '0',
						}}
					>
						<CardMediaContainer image={img} />
						<Typography
							variant="h6"
							sx={{
								color: '#FFF',
								fontFamily: 'Poppins',
								fontSize: '1.5625rem',
								fontStyle: 'normal',
								fontWeight: 400,
								lineHeight: 'normal',
							}}
						>
							Impact & Purpose
						</Typography>
					</CardContent>

					<Stack
						spacing="10px"
						alignItems={{
							xs: 'center',
							md: 'flex-start',
						}}
					>
						<Title
							sx={{
								fontSize: {
									xs: '25px',
								},
								fontWeight: {
									xs: '500',
								},
								textAlign: {
									xs: 'center',
									md: 'left',
								},
							}}
						>
							Quick Links
						</Title>
						<Stack spacing="8px">
							<LinkStyled
								to="/marketplace"
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: {
										xs: 'center',
										md: 'left',
									},
								}}
							>
								NFT Marketplace
							</LinkStyled>
							<LinkStyled
								to="/blockchain"
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: {
										xs: 'center',
										md: 'left',
									},
								}}
							>
								Blockchain
							</LinkStyled>

							<LinkStyled
								to="/ai-ml"
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: {
										xs: 'center',
										md: 'left',
									},
								}}
							>
								AI
							</LinkStyled>

							<LinkStyled
								to="/metaverse"
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: {
										xs: 'center',
										md: 'left',
									},
								}}
							>
								Metaverse
							</LinkStyled>

							<LinkStyled
								to="/"
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: {
										xs: 'center',
										md: 'left',
									},
								}}
							>
								Consulting
							</LinkStyled>

							<LinkStyled
								to="/"
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: {
										xs: 'center',
										md: 'left',
									},
								}}
							>
								Solutions
							</LinkStyled>
						</Stack>
					</Stack>
					<Stack
						spacing="10px"
						alignItems={{
							xs: 'center',
							md: 'flex-start',
						}}
						sx={{
							height: '175px',
							maxWidth: '200px',
						}}
					>
						<Title
							sx={{
								fontSize: {
									xs: '25px',
								},
								fontWeight: {
									xs: '500',
								},
								textAlign: {
									xs: 'center',
									md: 'left',
								},
							}}
						>
							Join Newsletter
						</Title>
						<Typography
							sx={{
								fontSize: {
									xs: '16px',
									md: '18px',
								},
								fontWeight: {
									xs: '500',
								},
								color: '#FFF',
								lineHeight: '2',
								textAlign: {
									xs: 'center',
									md: 'left',
								},
							}}
						>
							Sign Up to our newsletter to get the latest news sent to you.
						</Typography>
					</Stack>
					<Stack
						spacing="10px"
						sx={{
							maxWidth: '250px',
							minHeight: '260px',
						}}
						alignItems={{
							xs: 'center',
							md: 'flex-start',
						}}
					>
						<Title
							sx={{
								fontSize: {
									xs: '25px',
								},
								fontWeight: {
									xs: '500',
								},
								textAlign: {
									xs: 'center',
									md: 'left',
								},
							}}
						>
							Contact Us
						</Title>
						<TypographyText
							sx={{
								fontSize: {
									xs: '16px',
									md: '18px',
								},
								fontWeight: {
									xs: '500',
								},
								color: '#FFF',
								lineHeight: '2',
								textAlign: {
									xs: 'center',
									md: 'left',
								},
							}}
						>
							Please contact us if you have any specific ideas or requests.
							<br />
							<br />
							ejemplo@ejemplo.com
						</TypographyText>
					</Stack>
				</Stack>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Divider
						sx={{
							padding: '1.9rem',
							width: '90%',
						}}
					/>
				</Box>
				<Box
					sx={{
						marginTop: {
							xs: '.5rem',
							lg: '1rem',
						},
					}}
				>
					<Typography
						sx={{
							color: '#FFF',
							fontFamily: 'Poppins',
							fontSize: '1.25rem',
							fontStyle: 'normal',
							fontWeight: 400,
							lineHeight: 'normal',
							textAlign: 'center',
						}}
					>
						Copyright © 2023 koolinart. All Rights Reserved
					</Typography>
				</Box>
			</Container>
		</ContainerStyle>
	);
};
