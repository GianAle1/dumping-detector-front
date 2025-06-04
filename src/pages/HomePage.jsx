import React from 'react';
import { Typography, Container } from '@mui/material';
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <Container>
      <Typography variant="h4" gutterBottom>Bienvenido a Dumping Detector</Typography>
      <Typography>Selecciona una opción del menú para comenzar.</Typography>
    </Container>
  </Layout>
);

export default HomePage;
