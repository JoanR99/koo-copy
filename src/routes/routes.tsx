import * as React from 'react';
import { Grid, CircularProgress, Box, CardMedia } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Logo from '@/assets/Img/svg/logotipo_koolinart_v1.svg';

import NavbarDrawer from '@/components/navBar/navBarDrawer';
import AlertGlobal from '@/components/alert/alert';
import ModalGlobal from '@/components/modal/modal';
import { Footer } from '@/components/footer/Footer';

const Home = React.lazy(() => import('@/screens/home'));
const NotFoundPage = React.lazy(() => import('@/screens/notFoundPage'));
const SmartContract = React.lazy(() => import('@/screens/smartContract'));
const AssetTokenization = React.lazy(
	() => import('@/screens/assetTokenization')
);
const P2pLending = React.lazy(() => import('@/screens/p2pLending'));
const AiMlSolutions = React.lazy(() => import('@/screens/aiMlSolutions'));
const Blockchain = React.lazy(() => import('@/screens/blockchain'));
const NftMarketplace = React.lazy(() => import('@/screens/NftMarketplace'));
const Metaverse = React.lazy(() => import('@/screens/metaverse'));
const BlockchainGame = React.lazy(() => import('@/screens/blockchainGame'));
const ContactUs = React.lazy(() => import('@/screens/contactUsView'));

export default function Navigator() {
	return (
		<React.Suspense
			fallback={
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{
						backgroundColor: 'common.tree',
						width: '100%',
						height: '100vh',
					}}
				>
					<CardMedia
						component="img"
						src={Logo}
						alt="Koolinart"
						sx={{
							width: {
								xs: '150px',
								md: '200px',
							},
							height: 'auto',
							objectFit: 'contain',
						}}
					/>
					<CircularProgress
						style={{ color: '#C02327' }}
						sx={{ m: 2 }}
						size="68px"
					/>
				</Grid>
			}
		>
			<NavbarDrawer>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/smart-contract" element={<SmartContract />} />
					<Route path="/asset-tokenization" element={<AssetTokenization />} />
					<Route path="/p2p-lending" element={<P2pLending />} />
					<Route path="/ai-ml" element={<AiMlSolutions />} />
					<Route path="/blockchain" element={<Blockchain />} />
					<Route path="/marketplace" element={<NftMarketplace />} />
					<Route path="/metaverse" element={<Metaverse />} />
					<Route path="/blockchain-game" element={<BlockchainGame />} />
					<Route path="/contact" element={<ContactUs />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</NavbarDrawer>
			{/*other tools */}
			<AlertGlobal />
			<ModalGlobal />
			<Box
				sx={{
					background: '#C02327',
					// width: '100%',
				}}
			>
				<Footer />
			</Box>
		</React.Suspense>
	);
}
