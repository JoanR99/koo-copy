import { Box, Container, Typography, styled } from '@mui/material';
import { MarketPlaceContainer } from './MarketPlaceContainer';
import ButtonPrimary from '@/components/buttons/buttonPrimary';

const BoxStyle = styled(Container)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '3rem',
});
const TypographyStyle = styled(Typography)({
	color: '#C02327',
	fontFamily: 'Poppins',
	fontSize: '2.8125rem',
	fontStyle: 'normal',
	fontWeight: 800,
	lineHeight: 'normal',
});

const UnstyledAnchor = styled('a')({
	textDecoration: 'none',
	color: 'inherit',
});

export const MarketPlace = () => {
	return (
		<BoxStyle>
			<Typography
				sx={{
					fontSize: {
						xs: '32px',
						md: '45px',
					},
					fontWeight: {
						xs: '800',
					},
					color: '#C02327',
					textAlign: 'center',
				}}
			>
				NFT Marketplace
			</Typography>
			<MarketPlaceContainer />
			<ButtonPrimary
				color="#EAE8E8"
				backgroundColor="#C02327"
				font-family="Inter"
				fontStyle="normal"
				font-weight="700"
				line-height="normal"
			>
				<UnstyledAnchor href="https://market.koolinart.com" target="_blank">
					Join to NFT Market
				</UnstyledAnchor>
			</ButtonPrimary>
		</BoxStyle>
	);
};
