import { Box, Typography } from '@mui/material';
import borderShape from '@/assets/Img/svg/border_shape.svg';

const CardGameChanging = (props) => {
  const { iconUrl, iconTitle, title, description } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: '100%',
          md: '22.5625rem',
        },
        height: 'auto',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          gap: '1rem',
          width: 'auto',
          height: '8rem',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              width: '5rem',
              height: 'auto',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                padding: '0.4rem 0.3rem',
                position: 'absolute',
                top: '56.5%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                justifyContent: 'center',
                alignItems: 'center',
                width: '3.5rem',
              }}
            >
              <img
                style={{
                  objectFit: 'cover',
                }}
                alt=""
                src={iconUrl}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '25%',
                  left: '32.5%',
                }}
              >
                {iconTitle ? iconTitle : ''}
              </Box>
            </Box>
            <img
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                width: 'auto',
                objectFit: 'cover',
              }}
              alt=""
              src={borderShape}
            />
          </Box>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '34.29%',
              width: '9.23%',
              borderRight: '8px solid #c02327',
              boxSizing: 'border-box',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '12rem',
          padding: '1rem 1.5rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          borderRadius: '1.25rem',
          border: '8px solid #C02327',
          background: '#303030',
          color: '#ECE9E8',
          mx: 'auto',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: {
              lg: '1.25rem',
            },
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          {title ? title : ''}
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
          {description ? description : ''}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardGameChanging;
