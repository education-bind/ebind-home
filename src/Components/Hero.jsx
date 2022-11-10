import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import heroImg from "../assets/Vector-2.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "bolder",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#051344", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                color: "#DBE5FF",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to the
            </Typography>
            <Title variant="h1">Next Generation Education.</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "20px", color: "#DBE5FF", my: 4 }}
            >
              Everything your school needs to boost it's productivity and be
              ranked as the best school on top of the world
            </Typography>
            <CustomButton
              backgroundColor="linear-gradient(131deg, rgba(0,194,255,0) 0%, rgba(0,194,255,0.18531162464985995) 51%, rgba(0,194,255,0.6979166666666667) 100%)"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            >
              <HelpCenterIcon sx={{ mr: 2 }} />
            </CustomButton>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
