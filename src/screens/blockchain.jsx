import { Box } from '@mui/material';
import ContainerTop from '../components/blockchain/ContainerTop';
import Title from '../components/blockchain/Title';
import WhyChooce from '../components/blockchain/WhyChooce';
import CustomBlockchain from '../components/blockchain/CustomBlockchain';
import Services from '../components/blockchain/Services';
import Conect from '../components/blockchain/Conect';
import TechnologyStack from '../components/blockchain/Stack';
import GameChanging from '../components/blockchain/Game-Changing';
import { Plataforms } from '../components/blockchain/Plataforms';
import Protocol from '../components/blockchain/Protocol';
import Industries from '../components/blockchain/Industries';
import Unlock from '../components/blockchain/Unlock';
import Process from '../components/blockchain/Process';
import Bottom from '../components/blockchain/Bottom';

export default function Blockchain() {
  return (
    <Box
      sx={{
        maxWidth: '100vw',
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
      }}
    >
      <ContainerTop />
      <Title />
      <CustomBlockchain />
      <Services />
      <Conect />
      <GameChanging />
      <Plataforms />
      <Protocol />
      <Industries />
      <Box>
        <Unlock />
        <Process />
      </Box>

      <TechnologyStack />
      <WhyChooce />
      <Bottom />
    </Box>
  );
}
