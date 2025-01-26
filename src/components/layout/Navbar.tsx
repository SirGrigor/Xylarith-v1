import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Logo = styled('div')`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Logo>TalentPulse</Logo>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2, ml: 4 }}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Solutions</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Button color="inherit">Login</Button>
        <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
