import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, Typography} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';

export default function Predict(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    if (params.condition === undefined) {
      navigate('/');
    }
    console.log(params.condition);
    fetch(`https://prognodserver.hop.sh/predict/${params.condition}`)
      .then((res) => res.json())
      .then((data) => {
        setDrugs(data.drugs.drugName);
      });
  }, []);

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
        {Object.keys(drugs).map((drug, index) => (
          <Typography variant="h4" align="center" key={index}>
            {drugs[drug]}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
