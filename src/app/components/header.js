"use client"
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Home,
  Info,
  Build,
  Work,
  Palette,
  ContactMail,
  People,
  AccountCircle
} from '@mui/icons-material';
import SchizoLogo from './Logo';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(52, 73, 94, 0.95) 100%)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '80px',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    minHeight: '70px',
    padding: theme.spacing(0, 1),
  }
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  }
}));

const LogoIcon = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
  [theme.breakpoints.down('md')]: {
    width: '40px',
    height: '40px',
    marginRight: theme.spacing(1),
  }
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: '1.8rem',
  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.4rem',
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: '#ecf0f1',
  fontSize: '1rem',
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  borderRadius: '25px',
  textTransform: 'none',
  letterSpacing: '0.02em',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '0',
    height: '2px',
    background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    color: '#667eea',
    transform: 'translateY(-2px)',
    '&::before': {
      width: '80%',
    }
  }
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(52, 73, 94, 0.95) 100%)',
    backdropFilter: 'blur(20px)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    marginTop: theme.spacing(1),
    minWidth: '200px',
  }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: '#ecf0f1',
  padding: theme.spacing(1.5, 2),
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    color: '#667eea',
    transform: 'translateX(5px)',
  }
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '45px',
  height: '45px',
  border: '2px solid transparent',
  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
  }
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#ecf0f1',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    transform: 'scale(1.05)',
  }
}));

const pages = [
  { name: 'Home', icon: Home },
  { name: 'About Us', icon: Info },
  { name: 'Services', icon: Build },
  { name: 'Portfolio', icon: Work },
  { name: 'Art', icon: Palette },
  { name: 'Career', icon: People },
  { name: 'Contact', icon: ContactMail }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          {/* Logo Section */}
          <LogoContainer sx={{ display: { xs: "none", md: "flex" } }}>
            <SchizoLogo />
            {/* <LogoIcon>
              <Home sx={{ color: 'white', fontSize: '24px' }} />
            </LogoIcon>
            <LogoText variant="h6" component="a" href="/">
              DESIGN
            </LogoText> */}
          </LogoContainer>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MobileMenuButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </MobileMenuButton>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              TransitionComponent={Fade}
            >
              {pages.map((page) => {
                const IconComponent = page.icon;
                return (
                  <StyledMenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <IconComponent sx={{ mr: 2, fontSize: "20px" }} />
                    <Typography>{page.name}</Typography>
                  </StyledMenuItem>
                );
              })}
            </StyledMenu>
          </Box>

          {/* Mobile Logo */}
          <LogoContainer
            sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}
          >
            <LogoIcon>
              <Home sx={{ color: "white", fontSize: "20px" }} />
            </LogoIcon>
            <LogoText variant="h5" component="a" href="/">
              DESIGN
            </LogoText>
          </LogoContainer>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <NavButton key={page.name} onClick={handleCloseNavMenu}>
                {page.name}
              </NavButton>
            ))}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings" arrow>
              <Box>
                <StyledAvatar
                  onClick={handleOpenUserMenu}
                  alt="User Profile"
                  src="/static/images/avatar/2.jpg"
                />
              </Box>
            </Tooltip> */}

            <Tooltip title="Open settings" arrow>
              <IconButton onClick={handleOpenUserMenu}>
                <AccountCircle sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <StyledMenu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              TransitionComponent={Fade}
            >
              {settings.map((setting) => (
                <StyledMenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography>{setting}</Typography>
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;