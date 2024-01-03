import { Box, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const TitleDevelopment = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '2.5rem !important',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}));

export const SubtitleDevelopment = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'justify',
  fontFamily: 'Inter',
  fontSize: '1.5rem !important',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
}));

export default function Title() {
  return (
    <Container
      sx={{
        mb: '0px !important',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <Typography
          sx={{
            fontSize: '32px !important',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Blockchain Development:
          <br />
          Revolutionizing Industries Through Trust and Transparency
        </Typography>

        <Typography
          sx={{
            textAlign: 'justify',
            maxWidth: '1026px',
            fontSize: '16px !important',
            fontWeight: '400',
          }}
        >
          By providing unparalleled trust and transparency, Blockchain
          revolutionizes business operations, eliminates intermediaries, drives
          growth, and fosters secure & efficient collaboration. As a top-tier
          Blockchain app development company, Antier harnesses the power of
          decentralized technology to unlock new opportunities and transform
          your business operations. Our seasoned team of Blockchain development
          services providers excels in crafting tailor-made custom blockchain
          solutions for diverse industry verticals.
        </Typography>
      </Box>
    </Container>
  );
}
