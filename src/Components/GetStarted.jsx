import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../assets/Vector-3.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Aren’t you ready to dominate with data
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#DBE5FF",
              fontWeight: "500",
              my: 3,
            }}
          >
            So what are you waiting for... Join us to day and start a new
            journey!
          </Typography>

          <CustomButton
            backgroundColor="linear-gradient(131deg, rgba(0,194,255,0) 0%, rgba(0,194,255,0.18531162464985995) 51%, rgba(0,194,255,0.6979166666666667) 100%)"
            color="#fff"
            buttonText="Contact Our Team"
            getStartedBtn={true}
          ></CustomButton>
        </Box>

        <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "50%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
