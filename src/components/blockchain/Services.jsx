import { Box, Typography } from '@mui/material';

const thirteenData = [
  {
    title: 'Cryptocurrency Development',
    description:
      'Let our team of experienced engineers handle your cryptocurrency development needs. We specialize in creating a wide range of crypto tokens, bitcoins, altcoins, NFTs, and custom smart contracts with robust security features that ensure safe and secure trading within a decentralized blockchain network.',
  },
  {
    title: 'Centralized / Decentralized Exchange Development',
    description:
      'We offer flexibility in exchange system development, tailoring our services to your needs. We can develop a fully centralized exchange system with admin control or a decentralized platform without an intermediary, depending on your business needs.',
  },
  {
    title: 'Crypto Wallet Development',
    description:
      'Our team has the expertise to develop highly secure crypto wallets that provide users to safely secure and transfer their crypto assets. Our wallet designs feature simple layouts and easy-to-use functions that are user-friendly and intuitive.',
  },
  {
    title: 'NFT Marketplace Development',
    description:
      'With our years of eCommerce development experience, we can create NFT marketplaces that prioritize security and safety for digital collectors. Our solutions prevent duplication and ensure secure buying and selling of tokens on the market.',
  },
  {
    title: 'Smart Contract Development',
    description:
      'Our seasoned blockchain engineers are equipped to develop and deploy smart contracts on blockchain platforms, streamlining the process and reducing delays and legal complications caused by manual paperwork. ',
  },
  {
    title: 'ICO and IEO Development',
    description:
      'Partner with us for expert ICO and IEO development services that will yield impressive results. Our team specializes in developing fundraising platforms based on tokens, with countless untapped use cases to help you stand out in the competitive token sale market.',
  },
  {
    title: 'Decentralized App (dApp)  Development',
    description:
      'We specialize in building robust dApps on advanced public blockchains like Ethereum that make crypto exchanges open, transparent, and permissionless, removing third-party involvement.',
  },
  {
    title: 'Metaverse Development',
    description:
      'Our team possesses extensive knowledge in blockchain, NFTs, and crypto development tools, which enables us to provide Metaverse development services to various projects, including NFT marketplaces, social media, and 3D gaming.',
  },
  {
    title: 'Blockchain Consultation',
    description:
      'Our experts provide consultations to help you achieve blockchain success, from initial steps to focus areas, giving you the confidence to embark on your blockchain journey.',
  },
];

export default function Services() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        alignItems: 'center',
        px: '24px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          gap: '0.5rem',
          p: '0.5rem',
        }}
      >
        <Typography
          sx={{
            fontSize: '32px !important',
            fontWeight: 600,
          }}
        >
          Our Blockchain Development Services
        </Typography>
        <Typography
          sx={{
            fontSize: '14px !important',
            fontWeight: 500,
          }}
        >
          Our complete spectrum of blockchain software development solutions
          help you harness the potential of blockchain.
        </Typography>
      </Box>

      <Box
        sx={{
          gap: '1.75rem',
          justifyContent: 'center',
          display: 'grid',
          gridTemplateColumns: {
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          color: '#EAE8E8',
        }}
      >
        {thirteenData.map((card) => (
          <Box
            key={card.title}
            sx={{
              width: {
                xs: '100%',
                sm: '380px',
              },
              height: {
                xs: 'auto',
                sm: '198px',
              },
              bgcolor: '#C02327',
              borderRadius: '20px',
              p: '0.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '18px !important',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                fontSize: '12px !important',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
