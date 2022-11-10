import { Box, styled, Typography } from "@mui/material";
import React from "react";

const House = ({ img, name, details }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <img src={img} alt="housePhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: "700", fontSize: "18px", color: "#002E59" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ my: 2, fontSize: "18px", color: "#002E59" }}
        >
          {details}
        </Typography>
      </Box>
    </HouseBox>
  );
};

export default House;
