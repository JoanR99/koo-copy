import { Box, Typography } from "@mui/material";
import { twelveData } from "@/data/metaverse";

export default function TwelfthSection() {
  return (
    <>
      <Box
        sx={{
          py: "80px",
          backgroundColor: "#C02327",
          color: "#EAE8E8",
          px: "20px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: "60px",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px !important",
              fontWeight: 600,
            }}
          >
            How our Metaverse Developers Pave your Way to Virtual Realms?
          </Typography>
          <Typography
            sx={{
              fontSize: "18px !important",
              fontWeight: 400,
            }}
          >
            We follow a coherent roadmap to steer and expedite your journey to
            the metaverse.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "104px",
            justifyContent: "center",
            maxWidth: "1260px",
            mx: "auto",
          }}
        >
          {twelveData.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: "325px",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Box
                component={"img"}
                sx={{
                  width: "auto",
                  height: "216px",
                  position: "absolute",
                  right: "0px",
                  zIndex: 1,
                }}
                src={item.image}
              ></Box>
              <Box
                sx={{
                  width: "104px",
                  height: "104px",
                  borderRadius: "20px",
                  background: "#EAE8E8",
                  mb: "12px",
                  zIndex: 2,
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "24px !important",
                  fontWeight: 600,
                  zIndex: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px !important",
                  fontWeight: 400,
                  width: "55%",
                  lineHeight: "normal",
                  zIndex: 2,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
