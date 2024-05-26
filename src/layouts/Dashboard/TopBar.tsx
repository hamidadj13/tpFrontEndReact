import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const TopBar = () : JSX.Element => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      await logout();
      navigate('/login');
    };

    const appBarBarStyle = {
      background: 'linear-gradient(90deg, #8360c3, #2ebf91)',
    };
    return (
        <AppBar 
            position="sticky" 
            sx={appBarBarStyle}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  flexGrow: 1
                }}
              >
                STUDGEST
              </Typography>
              <Button
                color="error"
                variant="contained"
                onClick={handleLogout}
              >
               Logout
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
)};

export default TopBar;