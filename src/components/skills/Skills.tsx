import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Skills() {
  const skills = [
    "JavaScript, TypeScript",
    "React, React Native",
    "Node.js, NestJS",
    "PostgreSQL, MongoDB",
    "Docker, Kubernetes",
    "HTML, CSS, Sass",
  ];

  return (
    <Box sx={{ marginY: 5, width: "80%" }}>
      <Typography variant="h4" fontFamily="monospace" fontWeight={700}>
        Habilidades
      </Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
