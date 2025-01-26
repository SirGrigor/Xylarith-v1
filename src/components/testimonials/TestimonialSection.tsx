import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director',
    company: 'Tech Corp',
    content: 'TalentPulse has transformed how we manage our workforce. The insights and analytics are invaluable.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'People Operations',
    company: 'Growth Startup',
    content: 'The best HR management system we've used. Intuitive and powerful.',
    avatar: 'MC'
  }
];

export const TestimonialSection = () => {
  return (
    <Box sx={{ py: 8, px: 3, bgcolor: 'grey.50' }}>
      <Typography variant="h4" align="center" sx={{ mb: 6 }}>
        What HR Leaders Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar sx={{ width: 64, height: 64, mb: 2 }}>
                    {testimonial.avatar}
                  </Avatar>
                  <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role} at {testimonial.company}
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
