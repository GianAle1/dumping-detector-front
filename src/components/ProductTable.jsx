// src/components/ProductTable.jsx
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const ProductTable = ({ productos }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Precio Min</TableCell>
            <TableCell>Precio Max</TableCell>
            <TableCell>Promedio</TableCell>
            <TableCell>Moneda</TableCell>
            <TableCell>Proveedor</TableCell>
            <TableCell>Ventas</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.titulo}</TableCell>
              <TableCell>{item.precio_min}</TableCell>
              <TableCell>{item.precio_max}</TableCell>
              <TableCell>{item.precio_promedio}</TableCell>
              <TableCell>{item.moneda}</TableCell>
              <TableCell>{item.proveedor}</TableCell>
              <TableCell>{item.ventas}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
