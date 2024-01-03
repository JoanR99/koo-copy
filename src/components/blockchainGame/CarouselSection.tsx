import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import 'react-multi-carousel/lib/styles.css';
import Carousel from './Carousel';

export default function CarouselSection() {
  return (
    <Container>
      <Stack spacing="32px" alignItems="center">
        <Stack
          spacing="16px"
          sx={{
            maxWidth: '750px',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '32px',
              },
              fontWeight: {
                xs: '700',
              },
              textAlign: 'center',
            }}
          >
            Best Games made by the Best Game Developers
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '16px',
              },
              fontWeight: {
                xs: '500',
              },
              textAlign: 'center',
            }}
          >
            The following games are just the tip of the iceberg.
            <br /> We possess the expertise to build any and every game for the
            web, mobile, and console.
          </Typography>
        </Stack>
        <Stack
          spacing="48px"
          sx={{
            // height: '200px',
            width: '100%',
            py: '20px',
          }}
        >
          <Carousel />
        </Stack>
      </Stack>
    </Container>
  );
}
