import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ChessboardComponent from './components/Chessboard';
import AnalysisPanel from './components/AnalysisPanel';
import UploadForm from './components/UploadForm';
import axios from 'axios';

function App() {
  const [analysis, setAnalysis] = useState(null);
  const [position, setPosition] = useState(null);

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const handleUpload = async (pgn) => {
    try {
      const response = await axios.post('http://localhost:5000/analyze', { pgn });
      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error('Error analyzing game:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Chess Game Analysis App
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <ChessboardComponent onPositionChange={handlePositionChange} />
        <UploadForm onUpload={handleUpload} />
      </Box>
      <AnalysisPanel analysis={analysis} />
    </Container>
  );
}

export default App;