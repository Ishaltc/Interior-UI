"use client"

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  minHeight: '500px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    minHeight: 'auto'
  }
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: '1.2',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '600px',
  maxHeight: '600px', 
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  [theme.breakpoints.down('md')]: {
    minHeight: '250px', 
  }
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
});

const ContentSection = styled(Box)(({ theme }) => ({
  flex: '1',
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  }
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.5rem',
  color: '#2c3e50',
  marginBottom: theme.spacing(1),
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem'
  }
}));

const ProjectSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#7f8c8d',
  fontWeight: 400,
  marginBottom: theme.spacing(3),
  letterSpacing: '0.02em'
}));

const InfoBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3)
}));

const InfoLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#34495e',
  marginBottom: theme.spacing(0.5),
  letterSpacing: '0.05em',
  textTransform: 'uppercase'
}));

const InfoValue = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#2c3e50',
  fontWeight: 500,
  marginBottom: theme.spacing(2)
}));

const OverviewSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const OverviewText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: 1.7,
  color: '#5a6c7d',
  marginBottom: theme.spacing(1)
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
  color: 'white',
  fontWeight: 600,
  fontSize: '0.8rem',
  padding: theme.spacing(0.5, 1),
  marginBottom: theme.spacing(1)
}));

const ProjectShowcase1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projectData = {
    title: "Project",
    subtitle: "PRIVATE VILLA- Classic Style",
    location: "DUBAI",
    area: "4000SQM",
    overview: "4000 SQM OF",
    description: [
      "of french and Italian classic designs had been smoothly mixed on that luxury project where it took a place in palm Jumeirah Dubai.",
      "each corner is filled with historical pieces of furniture, I concerned-",
      "ly focus on the color scheme and the arrangement to keep the areas more comfortable and aligned with the exterior landscape."
    ],
    image: "/images/photo-1627553002447-cb93a0010deb.avif"
  };

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <StyledPaper elevation={0}>
        <ImageSection>
          <ProjectImage
            src={projectData.image}
            alt={projectData.title}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDYwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwaDIwMHYyMDBIMjAweiIgZmlsbD0iI2UxZTVlOSIvPgo8cGF0aCBkPSJNMjUwIDIwMGw1MCA1MCA1MC01MHoiIGZpbGw9IiNhMWE5YjgiLz4KPGNpcmNsZSBjeD0iMjMwIiBjeT0iMTgwIiByPSIxMCIgZmlsbD0iI2ExYTliOCIvPgo8dGV4dCB4PSIzMDAiIHk9IjI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY4NzI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
            }}
          />
        </ImageSection>

        <ContentSection>
          <Box>
            <ProjectTitle variant="h1">
              {projectData.title}
            </ProjectTitle>
            <ProjectSubtitle variant="h2">
              {projectData.subtitle}
            </ProjectSubtitle>

            <Divider sx={{ my: 3, backgroundColor: '#e1e5e9' }} />

            <InfoBox>
              <InfoLabel>Location</InfoLabel>
              <InfoValue>{projectData.location}</InfoValue>
            </InfoBox>

            <InfoBox>
              <InfoLabel>Area</InfoLabel>
              <InfoValue>{projectData.area}</InfoValue>
            </InfoBox>

            <OverviewSection>
              <InfoLabel>Overview, Concept & Idea</InfoLabel>
              <StyledChip label={projectData.overview} />
              
              {projectData.description.map((text, index) => (
                <OverviewText key={index}>
                  {text}
                </OverviewText>
              ))}
            </OverviewSection>
          </Box>
        </ContentSection>
      </StyledPaper>
    </Container>
  );
};

export default ProjectShowcase1;