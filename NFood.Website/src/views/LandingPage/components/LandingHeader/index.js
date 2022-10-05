import React from "react";
import './landing-header.scss'
import Container from '@mui/material/Container';
import { FilledButton, OutlineButton } from "@components/Button";
import { useNavigate } from "react-router-dom";

const LandingHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-header">
      <Container fixed>
        <div className="contain">
          <div className="logo-contain">
            <h1>NFOOD</h1>
          </div>
          <FilledButton
            className="become-partner"
            text="Become a Partner"
            onClick={() => navigate(`./merchant/register`)}
          />

          <OutlineButton
            className="login-button"
            text="Login"
            onClick={() => navigate(`./order-food/login`)}
          />
        </div>
      </Container>
    </div>
  )
}

export default LandingHeader;