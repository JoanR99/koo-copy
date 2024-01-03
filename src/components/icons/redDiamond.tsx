import Box from "@mui/material/Box";
import Ellipse from "@/assets/Img/svg/ellipse.svg";
import DarkEllipse from "@/assets/Img/svg/dark_ellipse.svg";
import { Typography, useTheme } from "@mui/material";
import RedDiamondIcon from "@/assets/Img/red_diamond_icon.png";

type RedDiamondProps = {
  title: string;
};

export default function RedDiamond(props: RedDiamondProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "fit-content",
        minHeight: "250px",
      }}
    >
      <Box
        sx={{
          width: "150px",
          height: "250px",
        }}
      >
        <img src={RedDiamondIcon} alt="red diamond" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "70%",
          left: "55%",
          width: "90px",
          height: "90px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90px",
            height: "90px",
          }}
        >
          {theme.palette.mode === "dark" ? (
            <img
              src={Ellipse}
              alt="ellipse"
              style={{
                width: "90px",
                height: "90px",
              }}
            />
          ) : (
            <img
              src={DarkEllipse}
              alt="ellipse"
              style={{
                width: "90px",
                height: "90px",
              }}
            />
          )}

          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#C02327",
              fontSize: {
                xs: "15px",
              },
              fontWeight: {
                xs: "700",
              },

              textAlign: "center",
              width: "80px",
            }}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
