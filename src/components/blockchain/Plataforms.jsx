import { Box, Container, Typography } from '@mui/material';
import CardsPlataforms from './cards/CardsPlataforms';

export const Plataforms = () => {
  const typographyStyle = {
    fontFamily: 'Inter',
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    textAlign: 'center',
    marginBottom: '2rem',
  };
  return (
    <Container>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '3rem',
        }}
      >
        <Typography variant="h1" sx={typographyStyle}>
          Blockchain Development Platforms we Support
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: 'normal',
            textAlign: 'center',
            width: '100%',
          }}
        >
          As a leading blockchain software development company, we leverage
          different blockchain networks to provide you with the best solutions
          aligned with your needs.
        </Typography>
      </Box>
      <CardsPlataforms />
    </Container>
  );
};
