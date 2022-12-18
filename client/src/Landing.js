import {Box, Button, Stack, Typography} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Landing(props) {
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
      }}
    >
      <Stack
        direction="column"
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" align="center">
          Progno-D
        </Typography>
        <Typography variant="h4" align="center">
          Your one stop for fast medical recommendations
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'green',

            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
          onClick={() => navigate('/select')}
        >
          Get Started
        </Button>
      </Stack>
    </Box>
  );
}
