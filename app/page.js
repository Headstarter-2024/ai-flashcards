import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {
  AppBar,
  Box,
  Button,
  Container,
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
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: "center", my: "4" }}>
        <Typography variant="h2">Welcome to Flascard Saas</Typography>
        <Typography variant="h5">
          The easiest way to create flashcards based on your notes!
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
