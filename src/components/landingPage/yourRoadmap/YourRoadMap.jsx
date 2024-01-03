import { Box, Container, Typography, styled } from '@mui/material';
import { ContainerYourRoadMap } from './ContainerYourRoadMap';

export const YourRoadMap = (props) => {
  const ContainerStyle = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    color: theme.palette.text.primary,
  }));

  return (
    <ContainerStyle>
      <Box
        sx={{
          margin: {
            xs: '4rem 5rem 1rem',
            lg: '6rem 1rem 1rem',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: (theme) => theme.palette.text.primary,
            fontFamily: 'Inter',
            fontSize: '2rem',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <ContainerYourRoadMap />
    </ContainerStyle>
  );
};
