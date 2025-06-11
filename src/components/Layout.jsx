import React from 'react';
import {
  Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Toolbar, AppBar, Typography, IconButton
} from '@mui/material';
import { Home, Search, AccountCircle, Dashboard } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Inicio', icon: <Home />, path: '/' },
    { text: 'Scrapear', icon: <Search />, path: '/scrape' },
    { text: 'Perfil', icon: <AccountCircle />, path: '/perfil' },
    { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'primary.dark',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            🧠 Dumping Detector
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => navigate(item.path)}>
              <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontWeight: 'medium' }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#fafafa',
          p: 4,
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
