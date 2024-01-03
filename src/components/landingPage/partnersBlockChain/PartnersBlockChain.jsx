import { Box, Typography, styled } from '@mui/material';
import { ContainerPartners } from './ContainerPartners';

const ContainerStyle = styled(Box)({
  display: 'flex',
  marginTop: '4rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
  maxWidth: '100vw',
});

export const PartnersBlockChain = () => {
  return (
    <ContainerStyle>
      <Typography
        variant="h2"
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontFamily: 'Inter',
          fontSize: '2rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
        }}
      >
        Partners in Blockchain
      </Typography>
      <ContainerPartners />
    </ContainerStyle>
  );
};
