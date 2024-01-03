import { Box, Container, Typography, styled } from '@mui/material';
import React from 'react';
import ButtonPrimary from '../../buttons/buttonPrimary';

export const ConnectOur = () => {
  const TypographyStyled = styled(Typography)({
    color: '#C02327',
    fontFamily: 'Poppins',
    fontSize: '2rem !important',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  });
  const ContainerBotton = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '1.5rem',
  });
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <TypographyStyled
          sx={{
            width: {
              xs: '.9',
            },
          }}
        >
          Connect with our subject matter experts to discuss your business use
          case
        </TypographyStyled>
        <ContainerBotton>
          <ButtonPrimary
            color="#EAE8E8"
            backgroundColor="#C02327"
            font-family="Inter"
            fontStyle="normal"
            font-weight="700"
            line-height="normal"
          >
            <Typography
              sx={{
                fontSize: '1.25rem !important',
              }}
            >
              Contact User
            </Typography>
          </ButtonPrimary>
          <ButtonPrimary
            color="#C02327"
            backgroundColor="#EAE8E8"
            font-family="Inter"
            font-size="1.25rem"
            fontStyle="normal"
            font-weight="700"
            line-height="normal"
          >
            <Typography
              sx={{
                fontSize: '1.25rem !important',
              }}
            >
              Connect on WhatsApp
            </Typography>
          </ButtonPrimary>
          <ButtonPrimary
            color="#C02327"
            backgroundColor="#EAE8E8"
            font-family="Inter"
            font-size="1.25rem"
            fontStyle="normal"
            font-weight="700"
            line-height="normal"
          >
            <Typography
              sx={{
                fontSize: '1.25rem !important',
              }}
            >
              Connect on Telegram
            </Typography>
          </ButtonPrimary>
        </ContainerBotton>
      </Box>
    </Container>
  );
};
