import React, {useState, useEffect} from 'react';
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {conditions} from './conditions';

export default function Select(props) {
  const [currentConditions, setConditions] = useState(conditions);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('None');

  useEffect(() => {
    const results = conditions.filter((condition) =>
      condition.toLowerCase().includes(search),
    );
    setConditions(results.sort());
  }, [search]);
  return (
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
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" align="center">
          Select your Condition from the list below
        </Typography>
        <Typography variant="h5" align="center">
          Currently Selected: {selected}
        </Typography>
        <Paper
          sx={{
            backgroundColor: 'white',
          }}
        >
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            InputProps={{
              endAdornment:
                search === '' ? (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setSearch('');
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
            }}
          ></TextField>
          <List
            sx={{
              width: 400,
              height: 400,
              overflow: 'auto',
            }}
          >
            {currentConditions.map((condition) => (
              <ListItem
                key={condition}
                onClick={() => {
                  setSelected(condition);
                }}
              >
                <ListItemText primary={condition}>{condition}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Button
          variant="contained"
          href={`/predict/${selected}`}
          sx={{
            backgroundColor: 'green',

            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
