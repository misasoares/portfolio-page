import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      description: "Aplicação completa de e-commerce com carrinho e pagamento.",
      image: "path-to-image1.jpg",
    },
    {
      title: "Sistema de Baterias Automotivas",
      description:
        "Sistema web integrado para recomendação e venda de baterias.",
      image: "path-to-image2.jpg",
    },
  ];

  return (
    <Box sx={{ marginY: 5, width: "80%" }}>
      <Typography variant="h4" fontFamily="monospace" fontWeight={700}>
        Projetos
      </Typography>
      {projects.map((project, index) => (
        <Card key={index} sx={{ marginTop: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={project.image}
            alt={project.title}
          />
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography>{project.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
