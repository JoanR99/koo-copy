import { Box, Typography } from "@mui/material";
import { nineData } from "@/data/metaverse";

export default function ninthSection() {
  return (
    <>
      <Box
        sx={{
          px: "20px",
          py: 10,
          color: "#EAE8E8",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          background: "#C02327",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px !important",
              fontWeight: 600,
            }}
          >
            Metaverse Development: Shaping Industries of Tomorrow
          </Typography>
          <Typography
            sx={{
              fontSize: "18px !important",
              fontWeight: 400,
            }}
          >
            Our mission is to empower businesses like yours to tap into the
            metaverse's transformative power with our enterprise-focused
            solutionsregardless of industry verticals. Get a sneak peek at how
            we redefine what's possible in your industry with Metaverse
            development-
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "64px",
            justifyContent: "center",
          }}
        >
          {nineData.map((card) => (
            <Box
              key={card.id}
              sx={{
                width: "200px",
                height: "356px",
                bgcolor: "#EAE8E8",
                borderRadius: "20px",
                p: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px !important",
                  fontWeight: 600,
                  color: "#C02327",
                  textAlign: "center",
                }}
              >
                {card.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
