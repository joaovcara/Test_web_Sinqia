import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Grid, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/img/Logo.png'
import { Link } from 'react-router-dom';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid variant="h6" component="div" sx={{ flexGrow: 1, alignSelf:'auto' }}>
            <Link to="/">
              <img src={Logo} height={45} alt='Logo'></img>
            </Link>
          </Grid>
          <Tooltip title="Menu">
            <IconButton
              size="small"
              color="inherit"
              onClick={() => props.funcOpenSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}