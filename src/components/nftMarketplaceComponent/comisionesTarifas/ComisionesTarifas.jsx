import { Box, CardMedia, Container, Typography, styled } from '@mui/material';
import back from '../../../assets/Img/svg/material-symbols_arrow-back-ios-new.svg';
import next from '../../../assets/Img/svg/material-symbols_arrow-back-ios-new (1).svg';

export const ComisionesTarifas = () => {
  const BoxComponent = styled(Box)({
    display: 'flex',
    width: '100vw',
    padding: '3rem 2rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    background: '#C02327',
  });
  const BoxText = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
  });
  const CardMediaStyle = styled(CardMedia)({
    width: '1.5195rem',
    height: '1.5rem',
    flexShrink: 0,
  });
  const ContainerTextstyle = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
  });
  return (
    <BoxComponent>
      <CardMediaStyle image={back} component="back" />
      <BoxText
        sx={{
          width: {
            xs: '16.5rem',
            ms: '32rem',
            sm: '85rem',
            lg: '90rem',
          },
        }}
      >
        <ContainerTextstyle
          sx={{
            width: {
              xs: '12rem',
              sm: '25rem',
              md: '30rem',
              lg: '40rem',
            },
          }}
        >
          <Typography
            sx={{
              color: '#EAE8E8',
              fontFamily: 'Poppins',
              fontSize: {
                xs: '1.5525rem !important',
                sm: '2.8125rem !important',
                md: '2.8125rem !important',
                lg: '2.8125rem !important',
              },
              width: {
                xs: '10rem',
                ms: '24rem',
                md: '30rem',
                lg: '33rem',
              },
              fontStyle: 'normal',
              fontWeight: 800,
              lineHeight: 'normal',
            }}
          >
            Comisiones y tarifas
          </Typography>
          <Typography
            sx={{
              color: '#EAE8E8',
              fontFamily: 'Poppins',
              fontSize: {
                xs: '1.5rem !important',
                sm: '1.5rem !important',
                md: '2rem !important',
                lg: '2rem !important',
              },
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            Artista
          </Typography>
          <Typography
            sx={{
              width: {
                xs: '10rem',
                ms: '22rem',
                md: '30rem',
                lg: '33rem',
              },
              color: '#EAE8E8',
              fontFamily: 'Poppins',
              fontSize: {
                xs: '.9rem !important',
                sm: '1.12rem !important',
                md: '1.25rem !important',
                lg: '1.25rem !important',
              },
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Orci massa orci diam orci
            tellus. Lorem a praesent accumsan sed rhoncus elit.
          </Typography>
        </ContainerTextstyle>
        <Container
          sx={{
            width: '38.9375rem',
            height: '17.3125rem',
            borderRadius: '0.625rem',
            background: '#D9D9D9',
          }}
        ></Container>
      </BoxText>
      <CardMediaStyle image={next} component="back" />
    </BoxComponent>
  );
};
