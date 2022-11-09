import * as React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Home() {
  const [age, setAge] = React.useState("");

  return (
    <>
      <Container maxWidth="xl">Welcone to education bind</Container>
    </>
  );
}
