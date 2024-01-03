import { Box } from '@mui/material';
import GameTop from '../components/blockchainGame/GameTop';
import CuttingEdge from '../components/blockchainGame/CuttingEdge';
import Conect from '@/components/blockchain/Conect';
import WhyChooce from '@/components/blockchain/WhyChooce';
import Bottom from '../components/blockchain/Bottom';
import Services from '../components/blockchainGame/Services';
import Web3Game from '../components/blockchainGame/Web3Game';
import CarouselSection from '../components/blockchainGame/CarouselSection';

export default function BlockchainGame() {
  return (
    <Box
      sx={{
        maxWidth: '100vw',
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <GameTop />
      <CuttingEdge />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          pt: '80px',
        }}
      >
        <Services />
        <Web3Game />
        <CarouselSection />
        <Conect />
        <WhyChooce />
        <Bottom />
      </Box>
    </Box>
  );
}
