import Link from "next/link";
import Image from "next/image";
import AssetCard from "../../components/UiKit/AssetCards/AssetCard";

import styles from "../../components/Pages/Auth/LoginPage/LoginPage.module.scss";
import AuthenticationFooter from "../../components/UiKit/Layout/Footer/AuthenticationFooter";
import LoginForm from "../../components/Pages/Auth/LoginPage/Forms/LoginForm";
import SocialLoginBox from "../../components/Partials/SocialLoginBox";
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
import { Box, Typography, Container, Grid } from "@mui/material";

function Login() {
  return (
    <Box>
      <StyledContainer>
        <MainContainer>
          <Header>
            <AuthHeader />
          </Header>
          <Grid container spacing={0}>
            <Grid 
              item 
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
                <Typography align="center" mb={3} color="#6F6F6F">
                  © Artcryption, 2022. All Rights Reserved.
                </Typography>
              </LeftContainer>
            </Grid>
            <Grid item lg={6}>
              <Container>
                <RightContainer>
                  <p className={styles.joiningText}>
                    Welcome Back to Artcryption
                  </p>
                  <LoginForm />
                  <div className={styles.sectionBreakContainer}>
                    <div className={styles.line}></div>
                    <p className={styles.orText}>or</p>
                    <div className={styles.line}></div>
                  </div>
                  <SocialLoginBox />
                  <div className={styles.sectionBreakContainer}>
                    <div className={styles.line}></div>
                    <p className={styles.orText}>or</p>
                    <div className={styles.line}></div>
                  </div>
                  <Link href="/auth/login-otp">
                    <a className={styles.otpText}>Login with OTP</a>
                  </Link>
                  <FooterContainer>
                    <AuthenticationFooter />
                  </FooterContainer>
                </RightContainer>
              </Container>
            </Grid>
          </Grid>
        </MainContainer>
      </StyledContainer>
    </Box>
  );
}

export default Login;
