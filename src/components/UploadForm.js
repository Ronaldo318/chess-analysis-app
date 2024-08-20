import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const UploadForm = ({ onUpload }) => {
  const [pgn, setPgn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload(pgn);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        label="Enter PGN or FEN"
        value={pgn}
        onChange={(e) => setPgn(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Analyze
      </Button>
    </Box>
  );
};

export default UploadForm;