import { Button, Grid, TextField, Typography } from '@mui/material'
import Table from '../../Widgets/Table'
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../Widgets/Modal'
import { useEffect, useState } from 'react';

function PageGeneric(props) {
  const [dataList, setDataList] = useState([]);
  const [dataListBackup, setDataListBackup] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    setDataList(props.data);
    setDataListBackup(props.data);
  }, [props.data])

  useEffect(() => {
    const filtered = dataListBackup.filter(x => {
      return x.nome.toLowerCase().includes(textSearch.toLowerCase())
        || x.descricao.toLowerCase().includes(textSearch.toLowerCase())
        || x.localizacao.toLowerCase().includes(textSearch.toLowerCase())
    });
    setDataList(filtered);
  }, [textSearch]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setTextSearch(text);
  }

  return (
    <Grid container paddingX={"5%"} paddingY={"2%"}>
      <Grid container justifyContent="space-between" flexWrap="nowrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
          <Typography variant='h6' marginRight="10px">{props.title}</Typography>
          <Button variant='contained' onClick={() => { props.funcActionUser(); props.setAction("Insert") }}>
            <Typography style={{ textTransform: "none", marginRight: "10px" }} variant='subtitle2' >Adicionar</Typography>
            <AddIcon fontSize='small' />
          </Button>
        </div>
        
      </Grid>
      <Grid container paddingTop={"2%"}>
        <TextField onChange={handleInputChange} value={textSearch} style={{ width: "40%", minWidth: '100%' }} variant='filled' size='small' label="Pesquisar" id="fullWidth" />
      </Grid>      
      <Grid container marginTop="10px">
        <Table
          data={dataList}
          columns={props.columns}
          funcOpenClose={props.funcOpenClose}
          funcSetAction={props.setAction}
          funcSetObjPontoTuristicoClicked={props.setObjPontoTuristicoClicked}
        />
      </Grid>
      {props.openClose && (
        <Modal
          title={props.title}
          openClose={props.openClose}
          funcOpenClose={props.funcOpenClose}
          content={<div>{props.content}</div>}
        />
      )}
    </Grid>
  );
}

export default PageGeneric;