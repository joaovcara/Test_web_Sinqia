
import React from "react";
import { Grid } from '@mui/material';
import { Dialog } from 'primereact/dialog';

export default function Modal(props) {
  return (
    <Grid>
      <div style={{ position: "fixed", top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
      <Dialog header={props.title} visible={props.openClose} style={{ margin: '1vh', width: 'auto', maxWidth: '80vh', background: '#FFF', padding: 15, borderRadius: 5, boxShadow: "initial" }} onHide={() => props.funcOpenClose(false)} >
        {props.content}
      </Dialog>
    </Grid>
  )
}
