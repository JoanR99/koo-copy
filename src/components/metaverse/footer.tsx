import { Box, Divider, Grid, Typography } from "@mui/material";
import logo from "../../assets/Img/Isologo Blanco.png";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 6,
        color: "white",
        bgcolor: "#C02327",
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "fit-content",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              sx={{
                width: "88px",
                height: "auto",
              }}
              src={logo}
            ></Box>
            Impact & Purpose
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            sx={{
              fontSize: "25px !important",
              fontWeight: "800 !important",
              mb: 2,
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              fontSize: "20px !important",
              fontWeight: "600 !important",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography>NFT Marketplace</Typography>
            <Typography>Blockchain</Typography>
            <Typography>AI</Typography>
            <Typography>Metaverse</Typography>
            <Typography>Consulting</Typography>
            <Typography>Solutions</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            sx={{
              fontSize: "25px !important",
              fontWeight: "800 !important",
              mb: 2,
            }}
          >
            Quick Links
          </Typography>
          <Typography>
            Sign Up to our newsletter to get the latest news sent to you.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            sx={{
              fontSize: "25px !important",
              fontWeight: "800 !important",
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography>
            Please contact us if you have any specific ideas or requests.
            <br />
            <br />
            ejemplo@ejemplo.com
          </Typography>
        </Grid>
      </Grid>
      <Divider
        sx={{
          my: 5,
          color: "#EAE8E8",
        }}
      />
      <Typography align="center">
        Copyright © 2023 Koolinart. All Rights Reserved
      </Typography>
    </Box>
  );
}
