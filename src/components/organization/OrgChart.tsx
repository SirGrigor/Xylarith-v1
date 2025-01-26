import { Box, Paper, Typography } from '@mui/material';
import { Tree, TreeNode } from 'react-organizational-chart';
import { styled } from '@mui/material/styles';

const StyledNode = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  minWidth: 200,
  textAlign: 'center'
}));

export const OrgChart = () => {
  return (
    <Box sx={{ p: 3, overflowX: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Organization Chart</Typography>
      <Paper sx={{ p: 4 }}>
        <Tree
          lineWidth={'2px'}
          lineColor={'#bbb'}
          lineBorderRadius={'10px'}
          label={<StyledNode>CEO</StyledNode>}
        >
          <TreeNode label={<StyledNode>CTO</StyledNode>}>
            <TreeNode label={<StyledNode>Engineering Manager</StyledNode>} />
            <TreeNode label={<StyledNode>Product Manager</StyledNode>} />
          </TreeNode>
          <TreeNode label={<StyledNode>HR Director</StyledNode>}>
            <TreeNode label={<StyledNode>HR Manager</StyledNode>} />
            <TreeNode label={<StyledNode>Recruitment Lead</StyledNode>} />
          </TreeNode>
        </Tree>
      </Paper>
    </Box>
  );
};
