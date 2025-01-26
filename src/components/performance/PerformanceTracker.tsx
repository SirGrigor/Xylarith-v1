import { Box, Paper, Typography, Grid, Rating } from '@mui/material';

export const PerformanceTracker = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Performance Tracking</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Skills Assessment</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography component="legend">Technical Skills</Typography>
              <Rating value={4} readOnly />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography component="legend">Communication</Typography>
              <Rating value={5} readOnly />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography component="legend">Leadership</Typography>
              <Rating value={3} readOnly />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Goals Progress</Typography>
            {/* Add goals progress implementation */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
