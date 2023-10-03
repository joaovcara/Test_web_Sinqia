import { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getCidades } from '../../../../services/functions/utils'
import api from '../../../../services/api/api'

const APIEstado = api("Estado");

function FormPontoTuristico() {
    const [estado, setEstado] = useState('');
    const [listEstado, setListEstado] = useState([]);
    const [listCidades, setListCidades] = useState([]);

    useEffect(() => {
        getEstado()
    }, [])

    useEffect(() => {
        let teste = getCidades(estado)
        setListCidades(teste)
    }, [estado])

    const handleChange = (event) => {
        setEstado(event.target.value);
    };

    //Função para recuperar dados da API
    const getEstado = async () => {
        APIEstado.get("GetAllEstado")
            .then(result =>
                setListEstado(result.data)
            );
    }

    return (
        <Grid style={{ paddingTop: "2vh" }} justifyContent="space-around" >
            <TextField style={{ marginTop: 10 }} fullWidth size="small" label="Nome" variant="outlined" />
            <TextField style={{ marginTop: 10 }} fullWidth size="small" label="Descrição" variant="outlined" />
            <TextField style={{ marginTop: 10 }} fullWidth size="small" label="Localização" variant="outlined" />
            <FormControl style={{ marginTop: 10, minWidth: 120 }} size="small">
                <InputLabel>Estado</InputLabel>
                <Select
                    value={estado}
                    label="Estado"
                    onChange={handleChange}
                >
                    {
                        listEstado.map(x => {
                            return <MenuItem key={x.id} value={x.sigla}>{x.descricao}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <TextField style={{ marginTop: 10, marginLeft: 10 }} size="small" label="Cidade" variant="outlined" />
        </Grid>
    )
}

export default FormPontoTuristico