import { Box, Button, styled, Typography } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import React from "react";

const System = ({ img, name, details, headerColor, buttonColor }) => {
  const SystemBox = styled(Box)`
    ${({ theme }) => `
  border: 5px solid #fff;
    overflow: hidden;
    color: #616161;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #fff;
    border-radius: 20px;
  text-transform: none;
  max-width:350px;
  border: 2px solid rgb(0 194 255 / 36%);
  margin: ${theme.spacing(0, 2, 0, 2)};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: ${theme.transitions.create(["transform"], {
    duration: 500,
  })};
  &:hover {
    transform: scale(1.1);
  };
  ${[theme.breakpoints.down("md")]}: {
    margin: ${theme.spacing(20, 0, 20, 0)};
  };
`}
  `;
  const CardHeader = styled(Box)`
    ${({ theme }) => `
    height: 200px;
    width: 100%;
    background: red;
    border-radius:100% 0% 100% 0% / 0% 50% 50% 100%;
    display: grid;
    place-items: center;
  background:${headerColor}
`}
  `;
  const CardContent = styled(Box)`
    ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`}
  `;

  return (
    <SystemBox>
      <CardHeader>
        {name === "E-Learning" ? (
          <LaptopMacRoundedIcon
            sx={{ color: "white", width: "4em", height: "4em" }}
          />
        ) : name === "Community" ? (
          <ConnectWithoutContactRoundedIcon
            sx={{ color: "white", width: "4em", height: "4em" }}
          />
        ) : (
          <SchoolRoundedIcon
            sx={{ color: "white", width: "4em", height: "4em" }}
          />
        )}
      </CardHeader>
      <CardContent>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#000339",
            mt: "10px",
            mb: "20px",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: "center",
            fontSize: "19px",
            color: "#002E59",
            mb: "20px",
          }}
        >
          {details}
        </Typography>
        <Button
          sx={{
            border: "none",
            bordeRadius: "100px",
            padding: "5px 30px",
            color: "#fff",
            marginBottom: "15px",
            background: buttonColor,
            textTransform: "uppercase",
          }}
        >
          Learn more
        </Button>
      </CardContent>
    </SystemBox>
  );
};

export default System;
