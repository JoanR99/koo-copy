import { Box, Typography, styled, Container } from '@mui/material';

const CardsProcesss = styled(Box)({
  display: 'flex',
  width: {
    xs: '100%',
    lg: '25.3125rem',
  },
  height: '10.625rem',
  padding: '0.5rem 1rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: '0.625rem',
  background: '#C02327',
  boxShadow:
    '0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.16)',
});

export default function CardsProcess(props) {
  return (
    <Container>
      <CardsProcesss>
        <Typography variant="h5" sx={{ color: '#EAE8E8', textAlign: 'center' }}>
          {props.title}
        </Typography>
        <Typography
          variant="string"
          sx={{
            color: '#EAE8E8',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '1rem',
          }}
        >
          {props.description}
        </Typography>
      </CardsProcesss>
    </Container>
  );
}
