import { 
  Box, 
  Paper, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Chip
} from '@mui/material';

const skillLevels = {
  expert: { label: 'Expert', color: 'success' },
  advanced: { label: 'Advanced', color: 'info' },
  intermediate: { label: 'Intermediate', color: 'warning' },
  beginner: { label: 'Beginner', color: 'error' }
};

const mockData = [
  {
    employee: 'John Doe',
    technical: 'expert',
    communication: 'advanced',
    leadership: 'intermediate',
    problemSolving: 'expert'
  },
  // Add more employees...
];

export const SkillMatrix = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Skill Matrix</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Technical</TableCell>
              <TableCell>Communication</TableCell>
              <TableCell>Leadership</TableCell>
              <TableCell>Problem Solving</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.employee}</TableCell>
                <TableCell>
                  <Chip 
                    label={skillLevels[row.technical].label}
                    color={skillLevels[row.technical].color}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={skillLevels[row.communication].label}
                    color={skillLevels[row.communication].color}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={skillLevels[row.leadership].label}
                    color={skillLevels[row.leadership].color}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={skillLevels[row.problemSolving].label}
                    color={skillLevels[row.problemSolving].color}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
