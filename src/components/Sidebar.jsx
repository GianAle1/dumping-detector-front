// src/components/Sidebar.jsx
import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Home, AccountCircle, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>

        <ListItem button component={Link} to="/scrapear">
          <ListItemIcon><Search /></ListItemIcon>
          <ListItemText primary="Scrapear" />
        </ListItem>

        <ListItem button component={Link} to="/perfil">
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
