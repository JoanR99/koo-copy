import { Box } from '@mui/material';
import { MarketPlace } from '../components/nftMarketplaceComponent/NtfMarketPlace/MarketPlace';
import { TiposArte } from '../components/nftMarketplaceComponent/tiposArte/TiposArte';
import { ProcesoCompra } from '../components/nftMarketplaceComponent/procesoCompra/ProcesoCompra';
import { ComisionesTarifas } from '../components/nftMarketplaceComponent/comisionesTarifas/ComisionesTarifas';
import { CrearNft } from '../components/nftMarketplaceComponent/crearNft/CrearNft';
import { CompraSegura } from '../components/nftMarketplaceComponent/compraSegura/CompraSegura';
import { AboutUs } from '../components/nftMarketplaceComponent/aboutUs/AboutUs';

export default function NftMarketplace() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: '100%',
				alignItems: 'center',
				gap: '5rem',
				background: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
				overflow: 'hidden',
				py: '40px',
			}}
		>
			<MarketPlace />
			<AboutUs />
			<TiposArte />
			{/* <ConnectOur /> */}
			<ProcesoCompra />

			<CrearNft />
			<CompraSegura />
		</Box>
	);
}
