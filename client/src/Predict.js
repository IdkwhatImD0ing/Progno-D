import React, {useState} from 'react';
import {Box, Button, Stack, Typography} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';

export default function Predict(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [drugs, setDrugs] = useState([]);
}
