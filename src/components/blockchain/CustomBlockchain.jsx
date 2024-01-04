import { Box, Typography, styled, Container } from '@mui/material';
import BlockchainImg from '@/assets/Img/Blockchain.png';

export const TitleDevelopment = styled(Typography)({
	fontFamily: 'Inter',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: 'normal',
});

export const SubtitleDevelopment = styled(Typography)({
	textAlign: 'justify',
	fontFamily: 'Inter',
	fontSize: '1rem !important',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: 'normal',
});

export default function CustomBlockchain() {
	return (
		<>
			<Container>
				<Box
					sx={{
						display: 'flex',
						gap: '80px',
						alignItems: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Box
						component={'img'}
						src={BlockchainImg}
						sx={{
							width: '100%',
							maxWidth: { sm: '406px' },
							maxHeight: { sm: '406px' },
						}}
					/>
					<Box
						sx={{
							width: '100%',
							maxWidth: { lg: '620px' },
							gap: '1.31rem',
						}}
					>
						<Typography
							sx={{
								fontSize: '32px !important',
								fontWeight: '600',
								mb: '8px',
							}}
						>
							Custom Blockchain Development: Facilitate your Entry and
							Participation in the Market
						</Typography>
						<Typography
							sx={{
								fontSize: '14px !important',
								fontWeight: '500',
								textAlign: 'justify',
							}}
						>
							The global blockchain market, which stands at nearly USD 17
							billion, is anticipated to reach USD 163.83 billion by 2029. The
							enormous growth potential of the market resonates across
							businesses participating in the market.At Koolinart, we offer
							end-to-end custom Blockchain development and consulting services
							to help businesses tap into the burgeoning blockchain market and
							fuel their growth. Our seasoned cross-functional blockchain
							development team works closely with you to create a coherent
							roadmap to navigate your development journey. Whether you want to
							build a decentralized crypto exchange, an immersive metaverse
							platform for your fashion brand, or even a custom blockchain, our
							blockchain application development company offers customized
							solutions to help you achieve your business goals.
						</Typography>
					</Box>
				</Box>
			</Container>
		</>
	);
}
