import { useState } from "react";
import {
  Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel
} from "@mui/material";
import { scrapeProduct } from "../services/scrapeService";
import ProductTable from "../../../components/ProductTable";

const ScrapePage = () => {
  const [producto, setProducto] = useState("");
  const [plataforma, setPlataforma] = useState("alibaba");
  const [resultados, setResultados] = useState([]);

  const handleScrape = async () => {
    try {
      const data = await scrapeProduct({ producto, plataforma });
      setResultados(data);
    } catch (err) {
      console.error("Error en scraping:", err);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Scrapear producto</Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Tienda</InputLabel>
        <Select value={plataforma} label="Tienda" onChange={(e) => setPlataforma(e.target.value)}>
          <MenuItem value="alibaba">Alibaba</MenuItem>
          <MenuItem value="aliexpress">AliExpress</MenuItem>
          <MenuItem value="temu">Temu</MenuItem>
          <MenuItem value="madeinchina">Made-in-China</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={handleScrape}>Buscar</Button>

      {resultados.length > 0 && <ProductTable productos={resultados} />}
    </Container>
  );
};

export default ScrapePage;
