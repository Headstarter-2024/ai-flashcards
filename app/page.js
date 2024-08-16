"use client";

import Image from "next/image";
import React from "react";
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
import { Paper, Avatar } from "@mui/material";
import LoginIcon from "@mui/icons-material/ArrowForward";
import SignUpIcon from "@mui/icons-material/PersonAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        origin: "http://localhost:3000 ",
      },
    });

    const checkoutSessionJson = await checkoutSession.json();

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            QuizWhiz
          </Typography>
          <Button sx={{ color: "white" }} href="#testimonials">
            Testimonials
          </Button>
          <Button sx={{ color: "white" }} href="#pricing">
            Pricing
          </Button>

          {/* User Account Icon */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Login and Sign Up buttons when signed out */}
          <SignedOut>
            <Button
              sx={{ color: "white" }}
              href="/sign-in"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
            <Button
              sx={{ color: "white" }}
              href="/sign-up"
              startIcon={<SignUpIcon />}
            >
              Sign Up
            </Button>
          </SignedOut>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ textAlign: "center", py: 5 }}>
        {/* Hero Section */}
        <Box sx={{ py: 10 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "white" }}
          >
            Effortless Learning with QuizWhiz
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{ color: "white" }}
          >
            Boost your knowledge and ace your exams with our cutting-edge
            AI-powered quiz app!
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{ mr: 2, backgroundColor: "#ff4437", color: "#ffffff" }}
              startIcon={<LoginIcon />}
              href="/sign-in"
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ mr: 2, backgroundColor: "#ffc107", color: "#ffffff" }}
              startIcon={<SignUpIcon />}
              href="/sign-up"
            >
              Sign Up
            </Button>
          </Box>
        </Box>

        {/* Testimonials Section */}
        <Box
          id="testimonials"
          sx={{
            backgroundImage: 'url("/images/fc.png")', // Replace with the correct path to your image
            backgroundSize: "cover", // Ensures the image covers the entire section
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            py: 10,
            color: "white", // Adjust text color if needed for better visibility
            position: "relative", // Ensures the effect is properly positioned
            overflow: "hidden", // Prevents overflow issues
          }}
        >
          {/* Semi-transparent Background for Text */}
          <Box
            sx={{
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              What Our Users Say
            </Typography>
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              Hear from our satisfied customers and see how QuizWhiz has
              transformed their learning experience!
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            {/* Testimonials */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{ p: 3, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <Avatar
                  src="/images/mz.jpg" // Replace with the correct path to your image
                  alt="Mark Zuckerberg"
                  sx={{ width: 56, height: 56 }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mt: 2, color: "white" }}
                >
                  &quot;QuizWhiz is a game-changer!&quot;
                </Typography>
                <Typography component="p" sx={{ mt: 1, color: "white" }}>
                  &quot;I&rsquo;ve used QuizWhiz for my college courses and it
                  made studying so much more efficient. The adaptive learning
                  algorithms really helped me focus on the areas I needed to
                  improve.&quot;
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ mt: 2, color: "white" }}
                >
                  Mark Zuckerberg
                </Typography>
                <Typography variant="subtitle2" color="white">
                  Founder and CEO at Meta
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{ p: 3, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <Avatar
                  src="/images/tc.jpg" // Replace with the correct path to your image
                  alt="Tim Cook"
                  sx={{ width: 56, height: 56 }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mt: 2, color: "white" }}
                >
                  &quot;Aced my exams with QuizWhiz!&quot;
                </Typography>
                <Typography component="p" sx={{ mt: 1, color: "white" }}>
                  &quot;As a busy professional, I was struggling to find time to
                  study for my certification exams. QuizWhiz made it easy to
                  learn on-the-go and helped me focus on the areas I needed to
                  improve.&quot;
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{ mt: 2, color: "white" }}
                >
                  Tim Cook
                </Typography>
                <Typography variant="subtitle2" color="white">
                  CEO of Apple
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Pricing Section */}
        <Box id="pricing" sx={{ backgroundColor: "#ffc107", py: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Affordable Plans for Every Learner
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Choose the plan that fits your needs and budget, and start your
            journey to mastering any subject!
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item xs={12} sm={8} md={5}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                  Basic
                </Typography>
                <Typography variant="h4" component="p" sx={{ mb: 2 }}>
                  $0/month
                </Typography>
                <Typography component="p" sx={{ mb: 2 }}>
                  Perfect for individual learners.
                </Typography>
                <Typography component="p">
                  ✔ Access to all quiz decks
                </Typography>
                <Typography component="p">
                  ✔ Personalized study plans
                </Typography>
                <Typography component="p">
                  ✔ Basic analytics and progress tracking
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 3, backgroundColor: "#ff4437", color: "#ffffff" }}
                  href="/sign-in"
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={5}>
              <Paper
                elevation={3}
                sx={{ p: 3, backgroundColor: "#003c3e", borderRadius: 2 }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 1, color: "#ffffff" }}
                >
                  Pro
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  sx={{ mb: 2, color: "#ffffff" }}
                >
                  $5/month
                </Typography>
                <Typography component="p" sx={{ mb: 2, color: "#ffffff" }}>
                  Unlock advanced features for serious learners.
                </Typography>
                <Typography component="p" sx={{ color: "#ffffff" }}>
                  ✔ Everything in Basic, plus:
                </Typography>
                <Typography component="p" sx={{ color: "#ffffff" }}>
                  ✔ Unlimited quiz decks
                </Typography>
                <Typography component="p" sx={{ color: "#ffffff" }}>
                  ✔ Advanced analytics and progress tracking
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 3, backgroundColor: "#ff4437", color: "#ffffff" }}
                  onClick={handleSubmit}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Section */}
        <Box sx={{ backgroundColor: "#ff4437", py: 5, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            © 2024 QuizWhiz. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
