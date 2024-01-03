import { Box, Container, Typography } from '@mui/material';
import ButtonSecondary from '../buttons/buttonSecondary';
import { UnstyledLink } from '@/components/buttons/unstyledLink';

export default function Unlock() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        pb: '40px',
        pt: '80px',
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: '700',
            color: '#C02327',
          }}
        >
          Unlock the power of decentralization:
          <br />
          Start your development blockchain journey today!
        </Typography>
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            marginTop: '2rem',
          }}
        >
          <ButtonSecondary>
            <UnstyledLink to="/contact">Contact us</UnstyledLink>
          </ButtonSecondary>
        </Box>
      </Container>
    </Box>
  );
}
