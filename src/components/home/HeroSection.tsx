import { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const taglines = [
  "Empower Your Workforce",
  "Drive Performance",
  "Build Great Teams"
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 4,
            }}
          >
            {taglines[currentTagline]}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
