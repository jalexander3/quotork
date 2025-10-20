import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Box, Button } from '@mui/material';
import { IconArrowRight } from '@tabler/icons-react';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | QuoTork </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to <Logo hideLogo hideTagline sx={{ display: 'inline-block' }} mainFontSize="1.75rem" />
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary" fontStyle="italic">
              QuoTork is a concept application demonstrating smart heavy-haul quoting capabilities for the
              transportation industry. It is for evaluation and demonstration purposes only.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                disableRipple
                component={Link}
                href="/dashboard/quote"
                variant="standard"
                size="small"
                endIcon={<IconArrowRight size={20} />}
                sx={{
                  textTransform: 'none',
                  pl: 0,
                  '&:hover': { backgroundColor: 'transparent', color: 'text.secondary' },
                  '&:active': { backgroundColor: 'transparent', boxShadow: 'none' },
                }}
              >
                Proceed to the Application
              </Button>
            </Box>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
