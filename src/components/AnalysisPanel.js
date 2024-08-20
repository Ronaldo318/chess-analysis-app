import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const AnalysisPanel = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6">Analysis</Typography>
      <List>
        {analysis.map((move, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${move.move} (${move.classification})`}
              secondary={move.explanation}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AnalysisPanel;