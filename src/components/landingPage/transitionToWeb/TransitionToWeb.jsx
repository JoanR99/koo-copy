import { Box, CardMedia, Container, Typography, styled } from '@mui/material';
import imgTrans from '../../../assets/Img/svg/mundoLandingPage.svg';

export const TransitionToWeb = () => {
  const BoxContainerStyle = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  });
  const CardMediaStyle = styled(CardMedia)({
    // width: '55.96875rem',
    // height: '45.75rem',
    alignItems: 'flex-start',
    flexShrink: 0,
  });
  const BoxStyled = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  });
  const TypographyStyled = styled(Typography)({
    color: '#EAE8E8',
    fontFamily: 'Inter',
    maxWidth: '32rem',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  });
  const TypographyLorem = styled(Typography)({
    maxWidth: '28.125rem',
    color: '#EAE8E8',
    fontFamily: 'Inter',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  });
  return (
    <BoxContainerStyle
      sx={{
        maxWidth: '100vw',
        gap: { xs: '1.5rem', sm: '4rem', lg: '9.75rem' },
        flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap', lg: 'inherit' },
        backgroundColor: '#303030',
        py: '40px',
      }}
    >
      <CardMediaStyle
        sx={{
          maxWidth: {
            xs: '90%',
            md: '45.3rem',
            lg: '55.96875rem',
          },
        }}
        component="img"
        image={imgTrans}
      />
      <BoxStyled>
        <Box>
          <TypographyStyled
            variant="h1"
            sx={{
              fontSize: {
                xs: '1.8rem !important',
                sm: '2rem !important',
                md: '2.3rem !important',
                lg: '2.5rem !important',
              },
            }}
          >
            Transition to web3
          </TypographyStyled>
          <TypographyStyled
            variant="h1"
            sx={{
              // fontSize: '2.5rem !important',
              fontSize: {
                xs: '1.8rem !important',
                sm: '2rem !important',
                md: '2.3rem !important',
                lg: '2.5rem !important',
              },
            }}
          >
            Transition to the future
          </TypographyStyled>
        </Box>
        <TypographyLorem>
          Lorem ipsum dolor sit amet consectetur. Blandit in id sed pulvinar.
          Libero porta erat quam tincidunt aliquet et.
        </TypographyLorem>
      </BoxStyled>
    </BoxContainerStyle>
  );
};
