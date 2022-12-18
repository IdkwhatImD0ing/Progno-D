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
        maxWidth="80%"
        direction="column"
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" align="center">
          Here are some drugs that may be useful for you based on user reviews,
          ranked from most to least effective:
        </Typography>
        {Object.keys(drugs).map((drug, index) => (
          <Button
            key={'button' + index}
            sx={{
              textTransform: 'none',
              color: 'black',
            }}
            onClick={() => {
              navigate(`/details/${drugs[drug]}`);
            }}
          >
            <Typography variant="h5" align="center" key={index}>
              {drugs[drug]}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
