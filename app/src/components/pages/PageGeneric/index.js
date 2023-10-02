import { Button, Grid, TextField, Typography } from '@mui/material'
import Table from '../../Widgets/Table'
import AddIcon from '@mui/icons-material/Add';

function PageGeneric(props) {
  return (
    <Grid container paddingX={"5%"} paddingY={"2%"}>
      <Grid container justifyContent="space-between" flexWrap="nowrap">
        <div style={{ display: "flex", alignItems: "center", width: "30%", justifyContent:"space-between"}} >
          <Typography variant='h6' marginRight="10px">{props.title}</Typography>
          <Button variant='contained'>
            <Typography style={{textTransform: "none", marginRight: "10px"}} variant='subtitle2' >Adicionar</Typography>
            <AddIcon fontSize='small' />
          </Button>
        </div>
        <TextField style={{ width: "40%" }} variant='filled' size='small' label="Pesquisar" id="fullWidth" />
      </Grid>
      <Grid container marginTop="10px">
        <Table></Table>
      </Grid>
    </Grid>
  );
}

export default PageGeneric;