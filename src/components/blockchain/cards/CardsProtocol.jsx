import { Box, Typography, styled } from "@mui/material";

const ContainerCard = styled(Box)({
  display: "flex",
  flexGrow:{
    xs:'1',
  },
  width: "20.9375rem",
  height: "31.9375rem",
  padding: "0.5rem 1rem",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "1.5rem",
  alignItems: "center",
  gap: "1rem",
  borderRadius: "0.625rem",
  background: "#C02327",
  boxShadow:
    "0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.16)",
  mx:'auto'
});

export default function CardsProtocol(props) {
  return (
    <ContainerCard>
      <Typography variant="h2" sx={{ color: "#EAE8E8", textAlign: "center" }}>
        {props.title}
      </Typography>
      <Typography
        variant="string"
        sx={{
          color: "#EAE8E8",
          textAlign: "justify",
          fontFamily: "Inter",
          fontSize: "1rem",
        }}
      >
        {props.description}
      </Typography>
    </ContainerCard>
  );
}
