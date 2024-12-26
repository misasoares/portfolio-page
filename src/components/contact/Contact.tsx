import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ marginY: 5, width: "80%", textAlign: "center" }}>
      <Typography variant="h4" fontFamily="monospace" fontWeight={700}>
        Contato
      </Typography>
      <Box component="form" sx={{ marginTop: 3 }}>
        <TextField label="Nome" fullWidth variant="outlined" margin="normal" />
        <TextField
          label="E-mail"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Mensagem"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={() => alert("Mensagem enviada!")}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
