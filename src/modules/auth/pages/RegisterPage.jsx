import { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { supabase } from '../../../supabaseClient';

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    });

    setMessage(error ? error.message : 'Revisa tu correo para confirmar tu cuenta.');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4">Crear Cuenta</Typography>
        <TextField label="Email" fullWidth margin="normal" name="email" onChange={handleChange} />
        <TextField label="Contraseña" fullWidth margin="normal" name="password" type="password" onChange={handleChange} />
        <Button fullWidth variant="contained" onClick={handleRegister}>Registrarse</Button>
        {message && <Typography mt={2}>{message}</Typography>}
      </Box>
    </Container>
  );
};

export default RegisterPage;
