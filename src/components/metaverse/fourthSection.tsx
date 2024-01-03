import { Box, Typography } from "@mui/material";
import image from "../../assets/Img/png/metaverse-4.png";

export default function FourthSection(): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#C02327",
        paddingY: "80px",
        paddingX: {
          xs: "12px",
          md: 0,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: {
          xs: "16px",
          md: "48px",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "78px",
          height: "90px",
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "8px",
          width: "701px",
          height: "85px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "#EAE8E8",
            fontFamily: "Inter",
            fontSize: "32px !important",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          DID YOU KNOW!
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "#EAE8E8",
            fontFamily: "Inter",
            fontSize: "16px !important",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          By 2026, 25% of people will spend at least 1 hour a day in a Metaverse
          for work, shopping, education, social media, and/orentertainment.
        </Typography>
      </Box>
    </Box>
  );
}
