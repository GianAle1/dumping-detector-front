import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { supabase } from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password
    });

    if (error) {
      setMessage(error.message);
    } else {
      navigate('/'); // o /perfil
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4">Iniciar Sesión</Typography>
        <TextField label="Email" fullWidth margin="normal" name="email" onChange={handleChange} />
        <TextField label="Contraseña" fullWidth margin="normal" name="password" type="password" onChange={handleChange} />
        <Button fullWidth variant="contained" onClick={handleLogin}>Ingresar</Button>
        {message && <Typography mt={2} color="error">{message}</Typography>}
      </Box>
    </Container>
  );
};

export default LoginPage;
