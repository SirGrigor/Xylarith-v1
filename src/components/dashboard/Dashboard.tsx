import { Grid, Paper, Typography, Box } from '@mui/material';
import { TeamStats } from './TeamStats';
import { PerformanceChart } from './PerformanceChart';
import { RecentActivity } from './RecentActivity';

export const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <PerformanceChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <TeamStats />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <RecentActivity />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
