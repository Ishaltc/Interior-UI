"use client";

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  color: 'white',
  marginTop: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
    zIndex: 1
  }
}));

const FooterContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4)
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3)
  }
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: '#ecf0f1',
  letterSpacing: '-0.02em',
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50px',
    height: '3px',
    background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
    borderRadius: '2px'
  }
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#bdc3c7',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 400,
  display: 'block',
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    color: '#667eea',
    transform: 'translateX(5px)',
    textDecoration: 'none'
  }
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#95a5a6',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: theme.spacing(1)
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#bdc3c7',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#667eea',
    color: 'white',
    transform: 'translateY(-2px)'
  }
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: '#bdc3c7'
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: '#667eea',
  display: 'flex',
  alignItems: 'center'
}));

const BottomSection = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: theme.spacing(3),
  marginTop: theme.spacing(4),
  textAlign: 'center'
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: '#95a5a6',
  fontSize: '0.9rem',
  fontWeight: 400
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const footerSections = {
    aboutUs: {
      title: "About Us",
      links: [
        "Our Story",
        "Mission & Vision",
        "Team",
        "Awards & Recognition",
        "Sustainability"
      ]
    },
    services: {
      title: "Services",
      links: [
        "Interior Design",
        "Architecture",
        "Consultation",
        "Project Management",
        "3D Visualization"
      ]
    },
    portfolio: {
      title: "Portfolio",
      links: [
        "Residential Projects",
        "Commercial Spaces",
        "Luxury Villas",
        "Hospitality Design",
        "Public Spaces"
      ]
    },
    career: {
      title: "Career",
      links: [
        "Current Openings",
        "Internships",
        "Work Culture",
        "Benefits",
        "Apply Now"
      ]
    },
    art: {
      title: "Art",
      links: [
        "Art Collection",
        "Featured Artists",
        "Gallery",
        "Art Consultation",
        "Custom Pieces"
      ]
    }
  };

  const partnerLogos = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"];

  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <FooterContent>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={4} justifyContent="space-between">
              {Object.values(footerSections).map((section, index) => (
                <Grid item xs={12} sm={6} md key={index}>
                  <FooterSection>
                    <FooterTitle>{section.title}</FooterTitle>
                    {section.links.map((link, idx) => (
                      <FooterLink key={idx}>{link}</FooterLink>
                    ))}
                  </FooterSection>
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md>
                <FooterSection>
                  <FooterTitle>Contact Us</FooterTitle>
                  <ContactItem>
                    <ContactIcon><LocationOn /></ContactIcon>
                    <FooterText>123 Design Street<br />Dubai, UAE</FooterText>
                  </ContactItem>
                  <ContactItem>
                    <ContactIcon><Phone /></ContactIcon>
                    <FooterText>+971 50 123 4567</FooterText>
                  </ContactItem>
                  <ContactItem>
                    <ContactIcon><Email /></ContactIcon>
                    <FooterText>info@designstudio.com</FooterText>
                  </ContactItem>
                </FooterSection>
              </Grid>
            </Grid>
          </Box>

          {/* Our Partners */}
          <Box sx={{ mt: 6, mb: 4 }}>
            <FooterTitle sx={{ textAlign: 'center', mb: 3 }}>
              Our Partners
            </FooterTitle>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              {partnerLogos.map((partner, index) => (
                <Grid item xs={6} sm={4} md={2} key={index}>
                  <Box
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: '#bdc3c7', fontWeight: 500, fontSize: '0.9rem' }}
                    >
                      {partner}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Social Media */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <FooterTitle sx={{ textAlign: 'center', mb: 3 }}>
              Follow Us
            </FooterTitle>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <SocialIconButton><Facebook /></SocialIconButton>
              <SocialIconButton><Instagram /></SocialIconButton>
              <SocialIconButton><Twitter /></SocialIconButton>
              <SocialIconButton><LinkedIn /></SocialIconButton>
            </Box>
          </Box>

          {/* Bottom Line */}
          <BottomSection>
            <CopyrightText>
              © 2024 Design Studio. All rights reserved. | Privacy Policy | Terms of Service
            </CopyrightText>
          </BottomSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
