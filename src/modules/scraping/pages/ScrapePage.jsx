import { useState } from 'react';
import {
  Container, Typography, TextField, Button,
  MenuItem, Select, FormControl, InputLabel, CircularProgress, Box
} from '@mui/material';
import { scrapeProduct } from '../services/scrapeService';
import ProductTable from '../../../components/ProductTable';
import Layout from '../../../components/Layout';

const ScrapePage = () => {
  const [producto, setProducto] = useState('');
  const [plataforma, setPlataforma] = useState('alibaba');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    setLoading(true);
    try {
      const data = await scrapeProduct({ producto, plataforma });
      setResultados(data);
    } catch (err) {
      console.error('Error en scraping:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          🔎 Buscar productos
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Tienda</InputLabel>
            <Select
              value={plataforma}
              label="Tienda"
              onChange={(e) => setPlataforma(e.target.value)}
            >
              <MenuItem value="alibaba">Alibaba</MenuItem>
              <MenuItem value="aliexpress">AliExpress</MenuItem>
              <MenuItem value="temu">Temu</MenuItem>
              <MenuItem value="madeinchina">Made-in-China</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Nombre del producto"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={handleScrape}
            disabled={loading}
            sx={{ whiteSpace: 'nowrap' }}
          >
            {loading ? <CircularProgress size={24} /> : 'Buscar'}
          </Button>
        </Box>

        {resultados.length > 0 && <ProductTable productos={resultados} />}
      </Container>
    </Layout>
  );
};

export default ScrapePage;
