import { Box, Container } from '@mui/material';
import { TitleDevelopment } from './Title';

import CardGameChanging from './cards/CardGameChanging';
import microship from '../../assets/Img/svg/Microship.svg';
import token from '../../assets/Img/svg/ic_outline-generating-tokens.svg';
import cbdc from '../../assets/Img/svg/cbdc.svg';
import hands from '../../assets/Img/svg/la_hands.svg';
import contract from '../../assets/Img/svg/ri_contract-line.svg';
import protect from '../../assets/Img/svg/lock.svg';
const gameCardData = [
  {
    iconUrl: microship,
    iconTitle: 'AI ',
    title: 'AI & IoT Integration',
    description:
      'Combining Blockchain with AI & IoT will help businesses provide custom AI Blockchain development services with enhanced automation, data integrity, and smart contract execution.',
  },
  {
    iconUrl: token,
    iconTitle: '',
    title: 'Asset Tokenization',
    description:
      'Blockchain will empower businesses to unlock liquidity and fractional ownership by tokenization of real-world assets such as real estate, commodities, and intellectual property.',
  },
  {
    iconUrl: cbdc,
    iconTitle: '',
    title: 'CBDCs',
    description:
      'Many central banks explored the concept of issuing their CBDCs(Central Bank Digital Currencies). This trend could reshape the way traditional financial systems interact with blockchain.',
  },
  {
    iconUrl: hands,
    iconTitle: '',
    title: 'Sustainability Practices',
    description:
      "Blockchain's traceability will play a significant role in promoting sustainable practices across various industries such as supply chain, manufacturing, mining, and many more.",
  },
  {
    iconUrl: contract,
    iconTitle: '',
    title: 'Smart Contract Advancements',
    description:
      'Enhanced smart contract capabilities with oracles will enable secure transactions between external data sources and participants in the Blockchain network.',
  },
  {
    iconUrl: protect,
    iconTitle: '',
    title: 'Privacy Enhancements',
    description:
      'Private Blockchain networks and Zero-knowledge proofs will enable B2B entities to securely share sensitive data while preserving confidentiality.',
  },
];

export default function GameChanging() {
  return (
    <Box
      sx={{
        bgcolor: '#303030',
        py: '40px',
        color: '#EAE8E8',
      }}
    >
      <Container>
        <Box sx={{ marginBottom: '3rem' }}>
          <TitleDevelopment
            variant="h5"
            sx={{
              color: '#EAE8E8 !important',
            }}
          >
            Game Changing Blockchain Development Company
          </TitleDevelopment>
        </Box>
        <Box
          sx={{
            marginBottom: '4rem',
            gap: '1rem',
            display: 'grid',
            gridTemplateColumns: {
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
          }}
        >
          {gameCardData.map((data) => (
            <CardGameChanging key={data.title} {...data} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
