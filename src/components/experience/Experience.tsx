import { Box, Typography } from "@mui/material";

export default function Experience() {
  return (
    <Box sx={{ marginY: 5, width: "80%" }}>
      <Typography variant="h4" fontFamily="monospace" fontWeight={700}>
        Experiência
      </Typography>
      <Typography marginTop={2}>
        <strong>Fullstack Developer</strong> - Growdev (2023 - Atual)
        <br />
        Desenvolvendo aplicações web modernas com React e NestJS, focando em
        soluções escaláveis.
      </Typography>
      <Typography marginTop={2}>
        <strong>Freelancer</strong> (2022 - 2023)
        <br />
        Desenvolvimento de sistemas sob demanda para empresas locais.
      </Typography>
    </Box>
  );
}
