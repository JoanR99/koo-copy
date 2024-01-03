import { Box, Container, Typography, styled } from '@mui/material';
import { ContainerCard } from './ContainerCardCaseStudies';

const ContainerStyle = styled(Container)({
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
  maxWidth: '100vw',
});
const typographyStyle = {
  fontFamily: 'Inter',
  fontSize: '2rem',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
};

export const CaseStudies = (props) => {
  const title = props.title;

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
        <Typography variant="h2" sx={typographyStyle}>
          {title}
        </Typography>
      </Box>
      <ContainerCard />
    </ContainerStyle>
  );
};
