import { useState } from 'react';

function App() {
  const [producto, setProducto] = useState('');
  const [plataforma, setPlataforma] = useState('alibaba');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarProductos = async () => {
    setLoading(true);
    setResultados([]);

    try {
      const res = await fetch('http://localhost:5000/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ producto, plataforma }),
      });

      const data = await res.json();

      if (data.success) {
        setResultados(data.productos);
      } else {
        alert('No se encontraron productos');
      }
    } catch (error) {
      console.error('Error al buscar:', error);
      alert('Error al conectar con el backend');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Detector de Dumping</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <select
          value={plataforma}
          onChange={(e) => setPlataforma(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        >
          <option value="alibaba">Alibaba</option>
          <option value="aliexpress">AliExpress</option>
          <option value="temu">Temu</option>
          <option value="madeinchina">Made-in-China</option>
        </select>
        <button onClick={buscarProductos} style={{ marginLeft: '1rem' }}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando productos...</p>}

      {resultados.length > 0 && (
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>Título</th>
              <th>Precio Mín</th>
              <th>Precio Máx</th>
              <th>Promedio</th>
              <th>Moneda</th>
              <th>Proveedor</th>
              <th>Ventas</th>
              <th>Rating</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((item, index) => (
              <tr key={index}>
                <td>{item.titulo}</td>
                <td>{item.precio_min}</td>
                <td>{item.precio_max}</td>
                <td>{item.precio_promedio}</td>
                <td>{item.moneda}</td>
                <td>{item.proveedor}</td>
                <td>{item.ventas}</td>
                <td>{item.rating}</td>
                <td>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Ver
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
