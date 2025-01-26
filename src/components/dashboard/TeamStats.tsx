import { Box, Typography, LinearProgress } from '@mui/material';

export const TeamStats = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>Team Performance</Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2">Productivity</Typography>
        <LinearProgress variant="determinate" value={75} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2">Engagement</Typography>
        <LinearProgress variant="determinate" value={85} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2">Satisfaction</Typography>
        <LinearProgress variant="determinate" value={90} />
      </Box>
    </Box>
  );
};
