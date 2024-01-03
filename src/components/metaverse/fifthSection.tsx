import { Box, Typography } from '@mui/material';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import ButtonSecondary from '@/components/buttons/buttonSecondary';
import { hexagonData } from '../../data/metaverse';
import HexagonInfo from './hexagon/HexagonInfo';

export default function FifthSection(): JSX.Element {
  const HexagonContainer = (firtsIndex: number, secondIndex: number) => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: {
            xs: '24px',
            sm: '42px',
          },
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {hexagonData.slice(firtsIndex, secondIndex).map((hexagon) => (
          <HexagonInfo key={hexagon.id} hexagon={hexagon} />
        ))}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingY: '80px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            width: {
              xs: '90%',
              lg: '1024px',
            },
            textAlign: 'center',
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontFamily: 'Inter',
              fontSize: '32px !important',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            What Our Metaverse Development Solutions Offer?
          </Typography>
          <Typography
            component="p"
            sx={{
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '16px !important',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            At Koolinart, we understand the evolving landscape of the Metaverse
            and leverage its power to push your business to get an edge in this
            competitive era.Our innovative Metaverse development solutions let
            you:
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '42px',
          }}
        >
          {HexagonContainer(0, 3)}
          {HexagonContainer(3, 6)}
          {HexagonContainer(6, 7)}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: {
            xs: 'center',
            sm: 'center',
          },
          gap: '24px',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <ButtonPrimary>Contact User</ButtonPrimary>
        <ButtonSecondary>Connect on WhatsApp</ButtonSecondary>
        <ButtonSecondary>Connect on Telegram</ButtonSecondary>
      </Box>
    </Box>
  );
}
