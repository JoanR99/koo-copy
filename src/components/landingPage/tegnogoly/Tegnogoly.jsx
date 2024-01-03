import { Box, Container, Typography } from '@mui/material';
import { CardsTegnogoly } from './CardsTegnogoly';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '.5rem',
  maxWidth: '100vw',
};

export const Tegnogoly = (props) => {
  return (
    <Container sx={containerStyle}>
      <Box>
        <Typography
          variant="h2"
          sx={{
            margin: '4rem',
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
      <CardsTegnogoly />
    </Container>
  );
};
