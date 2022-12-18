import React, {useState, useEffect} from 'react';
import {Box, Button, List, ListItem, Stack, Typography} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

export default function Details(props) {
  const params = useParams();
  const drug = params.drug;
  const [details, setDetails] = useState(undefined);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
      params: {drug: drug},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Box
        width="100%"
        height="100vh"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flexstart',
          alignItems: 'center',
          backgroundColor: 'lightgreen',
          paddingTop: '10%',
          overflow: 'auto',
        }}
      >
        <Stack
          maxWidth="80%"
          direction="column"
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h2" align="center">
            Details for {drug}
          </Typography>
          {details && (
            <>
              <List
                sx={{
                  width: 400,
                  maxHeight: 400,
                  overflow: 'auto',
                }}
              >
                <Typography variant="h5" align="center">
                  Active Ingredients:
                </Typography>

                {Object.keys(details[0].active_ingredients).map(
                  (ingredient, index) => (
                    <ListItem
                      key={'li' + index}
                      sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="h5" align="center" key={index}>
                        Name: {details[0].active_ingredients[ingredient].name}{' '}
                        Strength:{' '}
                        {details[0].active_ingredients[ingredient].strength}
                      </Typography>
                    </ListItem>
                  ),
                )}
              </List>
              <Typography variant="h5" align="center">
                Brand Name: {details[0].brand_name}
              </Typography>
              <Typography variant="h5" align="center">
                Generic Name: {details[0].generic_name}
              </Typography>
              <Typography variant="h5" align="center">
                Manufacturer Name: {details[0].labeler_name}
              </Typography>
              <Typography variant="h5" align="center">
                Dosage Form: {details[0].dosage_form}
              </Typography>

              <List
                sx={{
                  width: 400,
                  maxHeight: 400,
                  overflow: 'auto',
                }}
              >
                <Typography variant="h5" align="center">
                  Application Routes:
                </Typography>

                {Object.keys(details[0].route).map((index) => (
                  <ListItem
                    key={'lir' + index}
                    sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h5" align="center" key={index}>
                      {details[0].route[index]}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography variant="h7" align="center">
                Product ID: {details[0].product_id}
              </Typography>
              <Typography variant="h7" align="center">
                Product NDC: {details[0].product_ndc}
              </Typography>
              <Typography variant="h7" align="center">
                Product Type: {details[0].product_type}
              </Typography>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
}
