import { Box, Typography, styled } from '@mui/material';
import borderShape from '@/assets/Img/svg/border_shape.svg';
import microship from '@/assets/Img/svg/Microship.svg';

const CardGameChanging2 = (props) => {
  return (
    <Box
  sx={{
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }}
>
  <img
    sx={{
      position: 'relative',
      width: '5.42rem',
      height: '8.02rem',
      objectFit: 'cover',
    }}
    alt=""
    src={microship}
  />
  <Box
    sx={{
      display: 'flex',
          width: '100%',
          padding: '1rem 1.5rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          borderRadius: '1.25rem',
          border: '8px solid #C02327',
          background: '#303030',
          color: '#ECE9E8',
    }}
  >
    <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'justify',
            fontFamily: 'Poppins',
            fontSize: {
              lg: '1.25rem',
            },
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          Asset Tokenization
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            flexShrink: 0,
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: {
              lg: '0.875rem',
            },
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          Blockchain will empower businesses to unlock liquidity and fractional
      ownership by tokenization of real-world assets such as real estate,
      commodities, and intellectual property.
        </Typography>
  </Box>
</Box>

  );
};

export default CardGameChanging2;