import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { CardsLorem } from '../individualCardTegnogoly/CardsLorem';
import ButtonPrimary from '@/components/buttons/buttonPrimary';

const lorem = [
  {
    title: 'NFT Marketplace Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'DeFi 2.0 Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Exchange Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Wallet Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Metaverse Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Blockchain Protocol Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Title',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Crypto Bank Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Smart Contract Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Smart Contract audit Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Coin & Token Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
  {
    title: 'Whitepaper Development',
    lorem:
      'Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc. Gravida tortor id sagittis arcu in leo quis. Pellentesque aliquet accumsan placerat sed fames vitae arcu habitant. Pellentesque eget id eget etiam pharetra posuere erat at eget.',
  },
];
const ContainerStyle = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  paddingBottom: '3rem',
});

const TypographyStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Inter',
  fontSize: '2rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
}));

export const Advantages = (props) => {
  return (
    <ContainerStyle
      sx={{
        display: 'flex',
        paddingTop: '3rem',
        flexDirection: 'column',
        alignItems: 'center',
        // gap: '3rem',
        maxWidth: '100vw',
      }}
    >
      <TypographyStyle variant="h2">{props.title}</TypographyStyle>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: '45px',
        }}
      >
        {lorem.map((lor) => {
          const { title, lorem } = lor;
          return <CardsLorem title={title} lorem={lorem} key={title} />;
        })}
      </Box>
      <ButtonPrimary>Contac Us</ButtonPrimary>
    </ContainerStyle>
  );
};
