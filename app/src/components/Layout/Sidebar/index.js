import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, Divider, Grid } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      onClick={() => props.funcOpenSidebar(false)}
      onKeyDown={() => props.funcOpenSidebar(false)}
    >
      <Grid container style={{ display: "flex", alignItems: "center", height: 50, background: "#1769aa", justifyContent: "center" }}>
        <Typography variant="subtitle2" gutterBottom color="#fff" >MENU</Typography>
        <Divider />
      </Grid>
      <List>
        <ListItem key={"Estado"} disablePadding>
          <Link style={{textDecoration: "none", color:"#707070"}} to="/Estado">
            <ListItemButton>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={"Estado"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"PontoTuristico"} disablePadding>
          <Link style={{textDecoration: "none", color:"#707070"}} to="/PontoTuristico">
            <ListItemButton>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={"Ponto Turístico"} />
            </ListItemButton>
          </Link>
        </ListItem>
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