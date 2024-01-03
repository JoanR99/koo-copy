import { Box, Container, Typography } from '@mui/material';
import img1 from '@/assets/Img/svg/ind1.svg';
import img2 from '@/assets/Img/svg/ind2.svg';
import img3 from '@/assets/Img/svg/ind3.svg';
import img4 from '@/assets/Img/svg/ind4.svg';
import img5 from '@/assets/Img/svg/ind5.svg';
import img6 from '@/assets/Img/svg/ind6.svg';
import img7 from '@/assets/Img/svg/ind7.svg';
import img8 from '@/assets/Img/svg/ind8.svg';
import img9 from '@/assets/Img/svg/ind9.svg';
import img10 from '@/assets/Img/svg/ind10.svg';

export default function Industries() {
  const img = [
    {
      img: img1,
      title: 'Healthcare',
    },
    {
      img: img2,
      title: 'Real Estate',
    },
    {
      img: img3,
      title: 'Entertainment',
    },
    {
      img: img4,
      title: 'Agriculture',
    },
    {
      img: img5,
      title: 'Logistics',
    },
    {
      img: img6,
      title: 'Retail',
    },
    {
      img: img7,
      title: 'BFSI',
    },
    {
      img: img8,
      title: 'Travel and Tourism',
    },
    {
      img: img9,
      title: 'Education',
    },
    {
      img: img10,
      title: 'Energy',
    },
  ];
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          width: '100%',
          marginTop: '2rem',
          marginBottom: '42px',
        }}
      >
        Industries We Serve
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '7.75rem',
          mx: 'auto',
        }}
      >
        {img.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              width: '120px',
            }}
          >
            <Box
              sx={{
                height: '120px',
                width: '120px',
                bgcolor: (theme) => theme.palette.background.paper,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={item.img} alt={item.title} />
            </Box>
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="string"
                sx={{
                  fontSize: '20px !important',
                  textAlign: 'center',
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
