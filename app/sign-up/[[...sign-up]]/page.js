import { SignUp } from "@clerk/nextjs";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth={false} disableGutters style={{ width: "100%" }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }}>
              QuizWhiz
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Typography variant="h4" sx={{ color: 'white' }}>Sign Up</Typography>
        <Typography variant="h4" sx={{ mt: 4 }}></Typography>
        <SignUp redirectUrl="/generate" />
      </Box>
    </Container>
  );
}
