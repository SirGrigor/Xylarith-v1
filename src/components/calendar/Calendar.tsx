import { useState } from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';

export const Calendar = () => {
  const [currentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Calendar</Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={1}>
          {[...Array(daysInMonth)].map((_, index) => (
            <Grid item xs={1.7} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                {index + 1}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
