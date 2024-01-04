import {
	Box,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
	styled,
} from '@mui/material';
import logo1 from '../../../assets/Img/svg/ri_nft-fill.svg';
import logo2 from '../../../assets/Img/svg/logo2About.svg';
import logo3 from '../../../assets/Img/svg/material-symbols_wall-art-outline-sharp.svg';

export const AboutUs = () => {
	const BoxComponentStyle = styled(Box)({
		display: 'flex',
		padding: {
			xs: '3rem 0 3rem 0',
			md: '3rem',
		},
		flexDirection: 'column',
		alignItems: 'center',
		gap: '3rem',
		background: '#C02327',
	});
	const GridCard = styled(Grid)({
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		padding: '3rem',
		gap: '3rem',
	});
	const TypographyTitleStyle = styled(Typography)({
		color: '#EAE8E8',
		fontFamily: 'Poppins',
		fontSize: '1.5625rem !important',
		fontStyle: 'normal',
		fontWeight: 800,
		lineHeight: 'normal',
	});
	const TypographyTextStyle = styled(Typography)({
		color: '#EAE8E8',
		fontFamily: 'Poppins',
		fontSize: '1.25rem !important',
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: 'normal',
	});
	return (
		<Box
			sx={{
				bgcolor: '#C02327',
				width: '100vw',
				py: '40px',
			}}
		>
			<Container>
				<Stack justifyContent="center" alignItems="center" spacing="80px">
					<Stack
						direction={{
							xs: 'column',
							md: 'row',
						}}
						alignItems="center"
						spacing="60px"
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',

								gap: '1.5rem',
							}}
						>
							<TypographyTitleStyle
								sx={{
									maxWidth: { md: '14.0625rem' },
									fontSize: {
										xs: '20px',
									},
								}}
							>
								What is an NFT?
							</TypographyTitleStyle>
							<CardMedia
								image={logo1}
								component="logo1"
								sx={{
									width: '6.525rem',
									height: '6.525rem',
								}}
							/>
						</Box>
						<Box>
							<TypographyTextStyle
								sx={{
									// width: '40.25rem',
									maxWidth: {
										sm: '28rem',
										lg: '40.25rem',
									},
								}}
							>
								An NFT, or non-fungible token, is a unique digital asset that
								can be used to represent a wide range of objects, such as
								artwork, music, videos, collectibles and more. NFTs are unique
								and unrepeatable.
							</TypographyTextStyle>
						</Box>
					</Stack>

					<Stack
						direction={{
							xs: 'column-reverse',
							md: 'row',
						}}
						alignItems="center"
						spacing="60px"
					>
						<TypographyTextStyle
							sx={{
								// width: '40.4375rem',

								maxWidth: {
									sm: '28rem',
									lg: '40.4375rem',
								},
							}}
						>
							NFTs are based on blockchain technology, which is a decentralized
							database that resembles a public ledger. The blockchain records
							the ownership of each NFT, ensuring its authenticity and security.{' '}
							<br />
							<br />
							When a user purchases an NFT, the blockchain is updated to reflect
							the new ownership of the NFT. This means that the owner of the NFT
							can prove his or her ownership of the asset, even if it is
							transferred to someone else.
						</TypographyTextStyle>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1.5rem',
							}}
						>
							<TypographyTitleStyle
								sx={{
									fontSize: {
										xs: '20px',
									},
								}}
							>
								How does an NFT work?
							</TypographyTitleStyle>
							<CardMedia
								image={logo2}
								component="logo1"
								sx={{
									width: '6.125rem',
									height: '6.125rem',
								}}
							/>
						</Box>
					</Stack>
					<Stack
						direction={{
							xs: 'column',
							md: 'row',
						}}
						alignItems="center"
						spacing="60px"
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								flexWrap: 'wrap',
								alignItems: 'center',
								gap: '1.5rem',
							}}
						>
							<TypographyTitleStyle
								sx={{
									maxWidth: { md: '14.0625rem' },

									textAlign: 'center',
									fontSize: {
										xs: '20px',
									},
								}}
							>
								Art market
							</TypographyTitleStyle>
							<CardMedia
								image={logo3}
								component="logo1"
								sx={{
									width: '6.525rem',
									height: '6.525rem',
								}}
							/>
						</Box>
						<Box>
							<TypographyTextStyle
								sx={{
									maxWidth: {
										sm: '28rem',
										lg: '38.8125rem',
									},
								}}
							>
								An NFT Art Marketplace provides a new and secure way to buy and
								sell digital artwork.
								<br />
								<br />
								NFTs allow artists to create and sell their artwork digitally,
								which opens up a global collector marketplace for them.
								<br />
								<br />
								NFTs are also changing the way art collectors interact with the
								market. Collectors can buy and sell NFTs quickly and easily, and
								can track the ownership history of each NFT.
							</TypographyTextStyle>
						</Box>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
