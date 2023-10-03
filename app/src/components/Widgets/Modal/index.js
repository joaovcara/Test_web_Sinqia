
import React from "react";
import { Button, Grid } from '@mui/material';
import { Dialog } from 'primereact/dialog';

export default function Modal(props) {
  const footerContent = (
    <Grid container justifyContent="flex-end">
      <Grid style={{ margin: 5 }}>
        <Button variant="contained" onClick={() => props.funcOpenClose(false)} >Cancelar</Button>
      </Grid>
      <Grid style={{ margin: 5 }}>
        <Button variant="contained" onClick={() => props.funcOpenClose(false)} >Confirmar</Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid>
      <div style={{position: "fixed", top: 0, left: 0, width:  '100%', height: '100%', zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}></div>
      <Dialog header={props.title} visible={props.openClose} style={{ width: '60vh', background: '#FFF', padding: 10, borderRadius: 5, boxShadow: "initial" }} onHide={() => props.funcOpenClose(false)} footer={footerContent}>
        {props.content}
      </Dialog>
    </Grid>
  )
}
