import { styled, Grid, Typography, Stack } from '@mui/material';

const GridStyle = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
});
const TypographyStyle1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Inter',
  width: '14rem',
  fontSize: '1rem !important',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
}));
const TypographyStyle2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Inter',
  fontSize: '0.875rem !important',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
}));

export const CardsLorem = (props) => {
  const title = props.title;
  const lorem = props.lorem;

  return (
    <Stack
      spacing="16px"
      sx={{
        maxWidth: 'min(310px, 100%)',
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '16px',
          },
          fontWeight: {
            xs: '700',
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: '14px',
          },
          fontWeight: {
            xs: '400',
          },
        }}
      >
        {lorem}
      </Typography>
    </Stack>
  );
};
