import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters style={{ width: "100%" }}>
      <Head>
        <title>Flashcard SaaS App</title>
        <meta
          name="description"
          content="Create flashcards based on your notes!"
        />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS App
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Flascard Saas
        </Typography>
        <Typography variant="h5" gutterBottom>
          The easiest way to create flashcards based on your notes!
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} and md={4}>
            <Typography variant="h6" gutterBottom>
              Effortless Note Entry
            </Typography>
            <Typography variant="h6">
              Easily enter your notes, and let our software transform
              them—creating flashcards has never been simpler or more intuitive!
            </Typography>
          </Grid>
          <Grid item xs={12} and md={4}>
            <Typography variant="h6" gutterBottom>
              Intelligent Flashcard Generation
            </Typography>
            <Typography variant="h6">
              Input your notes, and watch as our ChatGPT-4o powered AI crafts
              intelligent flashcards—turning study material into personalized
              learning tools with ease!
            </Typography>
          </Grid>
          <Grid item xs={12} and md={4}>
            <Typography variant="h6" gutterBottom>
              Study Anywhere, Anytime
            </Typography>
            <Typography variant="h6">
              Access your notes from anywhere, and let our software seamlessly
              create flashcards—ensuring your study materials are always at your
              fingertips!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} and md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5/month
              </Typography>
              <Typography variant="h6">
                Access to basic flashcard features and limited storage!
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} and md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10/month
              </Typography>
              <Typography variant="h6">
                Unlimited flashcard features and storage, with priority support
                included!
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
