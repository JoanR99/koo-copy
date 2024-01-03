import { Box, Typography, styled } from '@mui/material';

export const ContainerYourRoadMap = () => {
  const boxStyle = {
    display: 'flex',
    width: '5.6875rem',
    height: '5.6875rem',
    padding: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: 0,
    borderRadius: '1.25rem',
    background: '#C02327',
    boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
  };
  const TypographyStyle = styled(Typography)({
    component: 'span',
    color: '#EAE8E8',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  });
  const Box1 = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    // height: '30.5rem',
    width: '12rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  });
  const Box2 = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    // height: '30.5rem',
    width: '12rem',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '2rem',
  });
  const TypographyTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  }));
  const TypographyLorem = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontFamily: 'Inter',
    // fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  }));
  return (
    <Box
      sx={{
        display: 'flex',
        // alignItems: 'flex-start',
        flexWrap: 'wrap',
        alignItems: {
          xs: 'center',
          sm: 'flex-start',
        },

        justifyContent: 'center',
        gap: '2.5rem',
      }}
    >
      {/* BOX 1 */}

      <Box1
        sx={{
          width: {
            // xs: '4rem',
            sm: '5rem',
            md: '8rem',
            lg: '12rem',
          },
        }}
      >
        <Box sx={boxStyle}>
          <TypographyStyle
            variant="h1"
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '3rem',
                md: '3rem',
                lg: '3rem',
              },
            }}
          >
            1
          </TypographyStyle>
        </Box>
        <TypographyTitle
          width="12rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.075rem',
            },
          }}
        >
          Evaluate Blockchain Oportunities
        </TypographyTitle>
        <TypographyLorem
          width="11.75rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.025rem',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc.
          Gravida tortor id sagittis arcu in leo quis.
        </TypographyLorem>
      </Box1>

      {/* BOX 2 */}

      <Box2
        sx={{
          width: {
            // xs: '4rem',
            sm: '5rem',
            md: '8rem',
            lg: '12rem',
          },

          justifyContent: {
            xs: 'flex-start',
            ms: 'flex-end',
            md: 'flex-end',
            lg: 'flex-end',
          },
        }}
        // xs={{
        //     justifyContent: 'flex-start',
        // }}
        // sm={{
        //     justifyContent: 'flex-start',
        // }}
      >
        <Box sx={boxStyle}>
          <TypographyStyle
            variant="h1"
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '3rem',
                md: '3rem',
                lg: '3rem',
              },
            }}
          >
            2
          </TypographyStyle>
        </Box>
        <TypographyTitle
          width="12rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.075rem',
            },
          }}
        >
          Evaluate Blockchain Use-case
        </TypographyTitle>
        <TypographyLorem
          width="11.75rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.025rem',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc.
          Gravida tortor id sagittis arcu in leo quis.
        </TypographyLorem>
      </Box2>

      {/* BOX 3 */}

      <Box1
        sx={{
          width: {
            // xs: '4rem',
            sm: '5rem',
            md: '8rem',
            lg: '12rem',
          },
        }}
      >
        <Box sx={boxStyle}>
          <TypographyStyle
            variant="h1"
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '3rem',
                md: '3rem',
                lg: '3rem',
              },
            }}
          >
            3
          </TypographyStyle>
        </Box>
        <TypographyTitle
          width="12rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.075rem',
            },
          }}
        >
          Test and Blockchain Solution
        </TypographyTitle>
        <TypographyLorem
          width="11.75rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.025rem',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc.
          Gravida tortor id sagittis arcu in leo quis.
        </TypographyLorem>
      </Box1>

      {/* BOX 4 */}

      <Box2
        sx={{
          width: {
            // xs: '4rem',
            sm: '5rem',
            md: '8rem',
            lg: '12rem',
          },

          justifyContent: {
            xs: 'flex-start',
            ms: 'flex-end',
            md: 'flex-end',
            lg: 'flex-end',
          },
        }}
      >
        <Box sx={boxStyle}>
          <TypographyStyle
            variant="h1"
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '3rem',
                md: '3rem',
                lg: '3rem',
              },
            }}
          >
            4
          </TypographyStyle>
        </Box>
        <TypographyTitle
          width="12rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.075rem',
            },
          }}
        >
          Integrate Networks and Partners
        </TypographyTitle>
        <TypographyLorem
          width="11.75rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.025rem',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc.
          Gravida tortor id sagittis arcu in leo quis.
        </TypographyLorem>
      </Box2>

      {/* BOX 5 */}

      <Box1
        sx={{
          width: {
            // xs: '4rem',
            sm: '5rem',
            md: '8rem',
            lg: '12rem',
          },
        }}
      >
        <Box sx={boxStyle}>
          <TypographyStyle
            variant="h1"
            sx={{
              fontSize: {
                xs: '3rem',
                sm: '3rem',
                md: '3rem',
                lg: '3rem',
              },
            }}
          >
            5
          </TypographyStyle>
        </Box>
        <TypographyTitle
          width="12rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.075rem',
            },
          }}
        >
          Implement Blockchain Network
        </TypographyTitle>
        <TypographyLorem
          width="11.75rem"
          sx={{
            fontSize: {
              xs: '1.075rem',
              sm: '1.5',
              lg: '1.025rem',
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Urna mi in fermentum nunc.
          Gravida tortor id sagittis arcu in leo quis.
        </TypographyLorem>
      </Box1>
    </Box>
  );
};
