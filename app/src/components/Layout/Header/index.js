import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/img/Logo.png'

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignSelf: 'self-end' }}>
            <img src={Logo} height={50} alt='Logo'></img>
          </Typography>
          <IconButton
            size="small"
            color="inherit"
            onClick={() => props.funcOpenSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}