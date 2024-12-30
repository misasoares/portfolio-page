import { Box, Typography } from "@mui/material";
import Me from "../../assets/me.jpg";
import "./style.css";

export default function MyInfos() {
  return (
    <>
      <Box display="flex">
        <Box
          sx={{
            backgroundColor: "rgb(200,200,200)",
            width: "80vw",
            minHeight: "700px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 5,
              marginBottom: 6,
              padding: 3,
            }}
          >
            falta adicionar os elementos que baixei
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography
                width="30%"
                variant="h4"
                fontFamily="monospace"
                fontWeight={900}
                marginLeft={5}
              >
                Misael Soares
              </Typography>
            </div>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "50%",
                  marginLeft: 15,
                  marginTop: 12,
                }}
              >
                <Typography
                  variant="h3"
                  fontFamily="monospace"
                  fontWeight={900}
                >
                  DESENVOLVEDOR FRONTEND
                </Typography>

                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus corrupti, dolorum incidunt voluptates sunt quam
                  hic laboriosam consectetur asperiores deserunt blanditiis
                  soluta in, sit voluptatum ea, eos alias et corporis?
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: 7, width: "30%" }}>
              <Box
                sx={{
                  width: "25%",
                  position: "absolute",
                  right: "8%",
                  top: "20%",
                }}
              >
                <img src={Me} alt="Portrait of Misael" className="myself" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgb(250,250,250)",
            width: "20vw",
            minHeight: "700px",
          }}
        >
          <Box sx={{ marginTop: 5, marginBottom: 6, padding: 3 }}></Box>
        </Box>
      </Box>
    </>
  );
}
