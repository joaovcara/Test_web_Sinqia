import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, Divider, Grid } from '@mui/material';
import KayakingIcon from '@mui/icons-material/Kayaking';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom'

const widthAll = 250;

export default function Sidebar(props) {
  const list = () => (
    <Box
      sx={{ width: widthAll }}
      onClick={() => props.funcOpenSidebar(false)}
      onKeyDown={() => props.funcOpenSidebar(false)}
    >
      <Grid container style={{ display: "flex", alignItems: "center", height: 50, background: "#1769aa", justifyContent: "center" }}>
        <Typography variant="subtitle2" gutterBottom color="#fff" >MENU</Typography>
        <Divider />
      </Grid>
      <List>
        <ListItem key={"Home"} disablePadding>
          <Link style={{ textDecoration: "none", color: "#707070", width: widthAll }} to="/">
            <ListItemButton>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </Link>
        </ListItem>
        {/* <ListItem key={"Estado"} disablePadding>
          <Link style={{ textDecoration: "none", color: "#707070", width: widthAll }} to="/Estado">
            <ListItemButton>
              <ListItemIcon><MapIcon /></ListItemIcon>
              <ListItemText primary={"Estado"} />
            </ListItemButton>
          </Link>
        </ListItem> */}
        {/* <ListItem key={"PontoTuristico"} disablePadding>
          <Link style={{ textDecoration: "none", color: "#707070", width: widthAll }} to="/PontoTuristico">
            <ListItemButton>
              <ListItemIcon><KayakingIcon /></ListItemIcon>
              <ListItemText primary={"Ponto Turístico"} />
            </ListItemButton>
          </Link>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"anchor"}>
        <Drawer
          anchor={"right"}
          open={props.openSidebar}
          onClose={() => props.funcOpenSidebar(false)}
        >
          {list("anchor")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}