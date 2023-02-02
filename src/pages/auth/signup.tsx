import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AssetCard from "../../components/UiKit/AssetCards/AssetCard";
import CheckBox from "../../components/UI/CheckBox";
import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import EmailForm from "../../components/Pages/Auth/SignupPage/Forms/EmailForm";
import SocialLoginBox from "../../components/Partials/SocialLoginBox";

import styles from "../../components/Pages/Auth/SignupPage/Signup.module.scss";
import {
  AssetsBoxContainer,
  FooterContainer,
  LogoText,
  LeftContainer,
  StyledContainer,
  LogoContainer,
  MainContainer,
  RightContainer,
  Header,
  BackgroundDiv,
} from "../../components/Pages/Auth/styled";
import AuthHeader from "../../components/Pages/Auth/AuthHeader";
import { Box, Container, Grid, Typography } from "@mui/material";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const onNextStep = () => {
    setIsChecked(true);
    setCurrentStep(currentStep + 1);
  };
  return (
    <StyledContainer>
      <MainContainer>
        <Header>
          <AuthHeader />
        </Header>
        <Grid container>
          <Grid
            md={6}
            sx={{
              marginX: "auto",
              backgroundColor: "#e3e5e5",
              width: "-webkit-fill-available",
            }}
          >
            <LeftContainer>
              <LogoContainer>
                <Link href="/" passHref>
                  <Image
                    className={styles["logo"]}
                    src="/logo.svg"
                    width={35}
                    height={55}
                    alt="Logo"
                    id="btn"
                  />
                </Link>
                <LogoText>artcryption</LogoText>
              </LogoContainer>
              <AssetsBoxContainer>
                <AssetCard
                  name={"Canapé#2"}
                  image={"Egg4.svg"}
                  creator={"Jérémy Hervo"}
                />
              </AssetsBoxContainer>
              <div style={{ height: "50px", marginTop: "50px" }}>
                <Typography align="center" mb={3} color="#6F6F6F">
                  © Artcryption, 2022. All Rights Reserved.
                </Typography>
              </div>
            </LeftContainer>
          </Grid>
          <Grid md={6} sx={{ margin: "auto" }}>
            <RightContainer>
              {currentStep === 1 ? (
                <>
                  <p className={styles.joiningText}>Join Artcryption</p>
                  <EmailForm
                    onSuccess={onNextStep}
                    policyAccepted={isChecked}
                  />
                  <div className={styles.sectionBreakContainer}>
                    <div className={styles.line}></div>
                    <p className={styles.orText}>or</p>
                    <div className={styles.line}></div>
                  </div>
                  <SocialLoginBox />
                  <div className={styles.checkboxContainer}>
                    <CheckBox
                      value="Check"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                      label={
                        "By clicking “Continue with Google/Email/SAML” above, you acknowledge that you have read and understood, and agree to Artcryption’s Terms & Conditions, Privacy Policy, Artcryption IP Agreement, Terms of Sale and Artcryption Community Standards."
                      }
                      checked={isChecked}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p
                    className={styles.joiningText}
                    style={{ textAlign: "center" }}
                  >
                    Join Artcryption
                  </p>
                  <p className={styles.descriptionText}>
                    You have been register successfully , we have sent you an
                    email for verification
                  </p>
                </>
              )}
              <FooterContainer>
                <AuthenticationFooter />
              </FooterContainer>
            </RightContainer>
          </Grid>
        </Grid>
      </MainContainer>
    </StyledContainer>
  );
};

export default Signup;
