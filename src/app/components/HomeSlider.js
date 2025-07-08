"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ChevronLeft,
  ChevronRight,
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";

const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  borderRadius: "30px",
  overflow: "hidden",
  boxShadow: "0 25px 80px rgba(0, 0, 0, 0.15)",
  background:
    "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  [theme.breakpoints.down("md")]: {
    borderRadius: "20px",
    margin: "0 16px",
  },
}));

const SlideContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "700px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "400px",
  },
}));

const SlideImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.8s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const SlideVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.8s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "60px",
  height: "60px",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#2c3e50",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
  },
}));

const DotsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "16px",
  padding: "16px 24px",
  background: "rgba(0, 0, 0, 0.7)",
  backdropFilter: "blur(20px)",
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  maxWidth: "90%",
  overflowX: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    bottom: "20px",
    gap: "12px",
    padding: "12px 20px",
  },
}));

const DotThumbnail = styled(Paper)(({ theme, active }) => ({
  width: "70px",
  height: "45px",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  border: `2px solid ${active ? "#667eea" : "rgba(255, 255, 255, 0.3)"}`,
  transition: "all 0.3s ease",
  transform: active ? "scale(1.1)" : "scale(1)",
  boxShadow: active ? "0 8px 25px rgba(102, 126, 234, 0.4)" : "none",
  "&:hover": {
    transform: "scale(1.05)",
    border: "2px solid #667eea",
  },
  [theme.breakpoints.down("md")]: {
    width: "60px",
    height: "40px",
  },
}));

const DotImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const VideoDot = styled(Box)(({ theme, active }) => ({
  width: "100%",
  height: "100%",
  background: active
    ? "linear-gradient(135deg, #0d47a1, #1976d2)"
    : "linear-gradient(135deg, #667eea, #764ba2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  transition: "all 0.3s ease",
}));

const SlideOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)",
  zIndex: 1,
}));

const VideoControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "100px",
  right: "30px",
  zIndex: 10,
  display: "flex",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    bottom: "80px",
    right: "20px",
  },
}));

const VideoControlButton = styled(IconButton)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.7)",
  color: "white",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.9)",
    transform: "scale(1.1)",
  },
  transition: "all 0.3s ease",
}));

const SlideTitle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "50px",
  color: "white",
  fontWeight: 700,
  fontSize: "2.5rem",
  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
  zIndex: 5,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    top: "30px",
    left: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    top: "20px",
    left: "20px",
  },
}));

const sliderItems = [
  {
    type: "image",
    src: "/images/industrial-rustic-living-room-in-earthy-tones.jpg",
    alt: "Rustic Living Room",
    title: "Industrial Rustic Design",
  },
  {
    type: "image",
    src: "/images/gettyimages-1149822847-612x612.jpg",
    alt: "Modern Interior",
    title: "Contemporary Spaces",
  },
  {
    type: "video",
    src: "/videos/modern-house-interior.mp4",
    title: "Modern House Interior",
  },
  {
    type: "image",
    src: "/images/gettyimages-1266156392-1024x1024.jpg",
    alt: "Luxury Villa",
    title: "Luxury Villa Design",
  },
];

const StyledMUISlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && sliderItems[currentSlide].type !== "video") {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentSlide]);

  // Handle video play/pause
  useEffect(() => {
    if (sliderItems[currentSlide].type === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current
          .play()
          .then(() => {
            setVideoPlaying(true);
          })
          .catch((e) => {
            console.log("Video autoplay failed:", e);
          });
      } else {
        videoRef.current.pause();
        setVideoPlaying(false);
      }
    }
  }, [currentSlide, isPlaying]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderItems.length) % sliderItems.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const currentItem = sliderItems[currentSlide];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <SliderContainer>
        <SlideContainer>
          <SlideOverlay />

          <Fade in={true} timeout={800} key={currentSlide}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              {currentItem.type === "image" ? (
                <SlideImage
                  src={currentItem.src}
                  alt={currentItem.alt}
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMCIgaGVpZ2h0PSI3MDAiIHZpZXdCb3g9IjAgMCAxNDAwIDcwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik02MDAgMjUwaDIwMHYyMDBINjAweiIgZmlsbD0iI2UxZTVlOSIvPgo8cGF0aCBkPSJNNjUwIDMwMGw1MCA1MCA1MC01MHoiIGZpbGw9IiNhMWE5YjgiLz4KPGNpcmNsZSBjeD0iNjMwIiBjeT0iMjgwIiByPSIxMCIgZmlsbD0iI2ExYTliOCIvPgo8dGV4dCB4PSI3MDAiIHk9IjM2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY4NzI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0Ij5TbGlkZSBJbWFnZTwvdGV4dD4KPC9zdmc+Cg==";
                  }}
                />
              ) : (
                <>
                  <SlideVideo
                    ref={videoRef}
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={currentItem.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </SlideVideo>

                  <VideoControls>
                    <VideoControlButton onClick={togglePlayPause}>
                      {videoPlaying ? <Pause /> : <PlayArrow />}
                    </VideoControlButton>
                    <VideoControlButton onClick={toggleMute}>
                      {isMuted ? <VolumeOff /> : <VolumeUp />}
                    </VideoControlButton>
                  </VideoControls>
                </>
              )}
            </Box>
          </Fade>

          <SlideTitle variant="h2">{currentItem.title}</SlideTitle>
        </SlideContainer>

        {/* Navigation Arrows */}
        <NavigationButton onClick={handlePrevSlide} sx={{ left: "30px" }}>
          <ChevronLeft fontSize="large" />
        </NavigationButton>

        <NavigationButton onClick={handleNextSlide} sx={{ right: "30px" }}>
          <ChevronRight fontSize="large" />
        </NavigationButton>

        {/* Dots Navigation */}
        <DotsContainer>
          {sliderItems.map((item, index) => (
            <Zoom in={true} timeout={300} key={index}>
              <DotThumbnail
                active={index === currentSlide}
                onClick={() => handleDotClick(index)}
                elevation={index === currentSlide ? 8 : 2}
              >
                {item.type === "image" ? (
                  <DotImage
                    src={item.src}
                    alt={item.alt}
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA3MCA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjQ1IiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0yNSAxNWgxMHYxMEgyNXoiIGZpbGw9IiNlMWU1ZTkiLz4KPGNpcmNsZSBjeD0iMjgiIGN5PSIxOCIgcj0iMiIgZmlsbD0iI2ExYTliOCIvPgo8L3N2Zz4K";
                    }}
                  />
                ) : (
                  <VideoDot active={index === currentSlide}>
                    <PlayArrow />
                  </VideoDot>
                )}
              </DotThumbnail>
            </Zoom>
          ))}
        </DotsContainer>
      </SliderContainer>
    </Container>
  );
};

export default StyledMUISlider;
