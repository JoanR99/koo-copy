import { Box, Container, Typography, styled } from "@mui/material";

const CardContainer = styled(Box)({
  display: "flex",
  width: "33.75rem",
  height: "18.375rem",
  padding: "0 1.5rem .5rem 1.5rem",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.5rem",
  borderRadius: "0.625rem",
  background: "#C02327",
  boxShadow:
    "0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.16)",
});

export default function CardsServices(props) {
  return (
    <CardContainer>
      <Container>
        <Typography
          variant="h2"
          sx={{ color: "#EAE8E8", textAlign: "center", marginTop: ".8rem" }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="string"
          sx={{
            color: "#EAE8E8",
            textAlign: "justify",
            fontFamily: "Inter",
            fontSize: ".8rem",
          }}
        >
          {props.description}
        </Typography>
      </Container>
    </CardContainer>
  );
}
