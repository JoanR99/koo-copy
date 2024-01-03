import { Box, Typography, styled } from '@mui/material';

const ContainerCardsBottom = styled(Box)({
  display: 'flex',
  maxWidth: '380px',
  padding: '8px 16px',
  paddingBottom: '42px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  borderRadius: '0.625rem',
  background: '#C02327',
  boxShadow:
    '0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.16)',
});

export default function CardsProcess(props) {
  return (
    <ContainerCardsBottom>
      <Typography
        sx={{
          color: '#EAE8E8',
          textAlign: 'center',
          fontSize: {
            xs: '20px',
          },
          fontWeight: { xs: '600' },
        }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{
          color: '#EAE8E8',
          fontFamily: 'Inter',
          fontSize: {
            xs: '14px',
          },
          fontWeight: { xs: '400' },
        }}
      >
        {props.description}
      </Typography>
    </ContainerCardsBottom>
  );
}
