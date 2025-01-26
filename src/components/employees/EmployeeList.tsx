import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box
} from '@mui/material';

const mockEmployees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' },
];

export const EmployeeList = () => {
  const [search, setSearch] = useState('');

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        label="Search Employees"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
