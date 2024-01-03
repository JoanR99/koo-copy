import { Box, Typography, styled } from '@mui/material';
import backgroundImage from '../../assets/Img/jpg-jpeg/metaverse-1.jpeg';
import ButtonSecondary from '@/components/buttons/buttonSecondary';
import { UnstyledLink } from '../buttons/unstyledLink';

export default function FirstSection(): JSX.Element {
  const Filter = styled(Box)({
    width: '100%',
    height: '100%',
    mixBlendMode: 'multiply',
    backgroundColor: '#C02327',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  });

  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: {
          xs: 'auto',
          md: '442px',
        },
        position: 'relative',
        zIndex: 1,
        padding: {
          xs: '24px',
          md: 0,
        },
      }}
    >
      <Filter />

      <Box
        sx={{
          position: {
            xs: 'static',
            md: 'absolute',
          },
          left: '110px',
          top: '67px',
          width: {
            xs: '100%',
            md: '592px',
          },
          height: {
            xs: 'auto',
            md: '242px',
          },
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: '#EAE8E8',
            fontFamily: 'Inter',
            fontSize: '48px !important',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
          }}
        >
          Metaverse Development Company
        </Typography>
        <Typography
          component="p"
          sx={{
            color: '#EAE8E8',
            fontFamily: 'Inter',
            fontSize: '16px !important',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Push your boundaries of imagination in the virtual world with
          comprehensive Metaverse development services at Koolinart.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
          <ButtonSecondary>
            <UnstyledLink to="/contact">Contact us</UnstyledLink>
          </ButtonSecondary>
          <ButtonSecondary>Talk to our experts</ButtonSecondary>
        </Box>
      </Box>
    </Box>
  );
}
