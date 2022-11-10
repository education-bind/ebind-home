import { Button, styled } from "@mui/material";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
  children,
}) => {
  const CustomButton = styled(Button)`
    ${({ theme }) => `
    background: ${backgroundColor};
    color: ${color};
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    padding: 0.5rem 1.25rem;
    border-radius: 10px;
    text-transform: none;
    display: flex;
    border: 2px solid rgb(0 194 255 / 36%);
    transition: ${theme.transitions.create(["transform"], {
      duration: 800,
    })};
    &:hover {
      transform: scale(1.1);
    };
    ${[theme.breakpoints.down("md")]}: {
      margin: ${
        (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto")
      };
      width: ${(heroBtn || getStartedBtn) && "90%"};
    };
    ${[theme.breakpoints.down("sm")]}: {
      marginTop: ${guideBtn && theme.spacing(3)};
      width: ${guideBtn && "90%"};
    };
  `}
  `;

  return (
    <CustomButton>
      {children}
      {buttonText}
    </CustomButton>
  );
};

export default CustomButton;
