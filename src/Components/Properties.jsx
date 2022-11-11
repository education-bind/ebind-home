import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import System from "./System";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Features
          </Typography>
          <Typography sx={{ color: "#002E59", fontSize: "20px", mt: 1 }}>
            Systems we created for your school in order to achieve our goal to
            make your school perfect.
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {properties.map((property) => (
            <System
              key={property.id}
              img={property.img}
              name={property.name}
              details={property.details}
              buttonColor={property.buttonColor}
              headerColor={property.headerColor}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
