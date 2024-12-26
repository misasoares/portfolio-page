import "./style.css";
import Me from "../../assets/me.jpg";
import { Box, Divider, Typography } from "@mui/material";

export default function MyInfos() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            //   fontFamily="fantasy"
            //   fontWeight={100}
            fontFamily="monospace"
            fontWeight={900}
          >
            MISAEL
          </Typography>
          <Typography
            variant="h3"
            fontFamily="monospace"
            //   fontFamily="fantasy"
            //   fontWeight={100}
            fontWeight={900}
            marginTop={-2.3}
            marginLeft={5}
          >
            SOARES
          </Typography>
        </Box>
        <img src={Me} alt="Portrait of Misael" className="myself" />
        <div
          style={{
            display: "flex",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" fontFamily="monospace" fontWeight={900}>
            WEB DEVELOPER
          </Typography>
        </div>
      </Box>

      <Divider
        sx={{
          marginTop: 10,
          border: 1,
          marginX: 5,
          color: "#dadada",
          boxShadow: "0px 0px 2px rgba(50,50,50,0.5)",
        }}
      />
    </Box>
  );
}
