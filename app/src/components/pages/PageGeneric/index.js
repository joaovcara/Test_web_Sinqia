import { Button, Grid, TextField, Typography } from '@mui/material'
import Table from '../../Widgets/Table'
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../Widgets/Modal'

function PageGeneric(props) {
  return (
    <Grid container paddingX={"5%"} paddingY={"2%"}>
      <Grid container justifyContent="space-between" flexWrap="nowrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
          <Typography variant='h6' marginRight="10px">{props.title}</Typography>
          <Button variant='contained' onClick={() => {props.funcActionUser(); props.setAction("Insert")}}>
            <Typography style={{ textTransform: "none", marginRight: "10px" }} variant='subtitle2' >Adicionar</Typography>
            <AddIcon fontSize='small' />
          </Button>
        </div>
        <TextField style={{ width: "40%" }} variant='filled' size='small' label="Pesquisar" id="fullWidth" />
      </Grid>
      <Grid container marginTop="10px">
        <Table
          data={props.data}
          columns={props.columns}
          funcOpenClose={props.funcOpenClose}
          funcSetAction={props.setAction}
          funcSetObjPontoTuristicoClicked={props.setObjPontoTuristicoClicked}
        />
      </Grid>
      {
        props.openClose &&
        <Modal
          title={props.title}
          openClose={props.openClose}
          funcOpenClose={props.funcOpenClose}
          content={
            <div>
              {props.content}
            </div>
          }
        />
      }
    </Grid>
  );
}

export default PageGeneric;