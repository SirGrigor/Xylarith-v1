import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const features = [
  {
    title: 'Employee Management',
    description: 'Comprehensive employee profiles and management tools',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Performance Analytics',
    description: 'Real-time insights and performance tracking',
    icon: <InsightsIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Time-Off Management',
    description: 'Streamlined leave management and calendar',
    icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Organization Chart',
    description: 'Interactive company structure visualization',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />
  }
];

export const FeatureShowcase = () => {
  return (
    <Box sx={{ py: 8, px: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 6 }}>
        Features
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
