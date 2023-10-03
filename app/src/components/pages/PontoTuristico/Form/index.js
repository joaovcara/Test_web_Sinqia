import { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Autocomplete } from "@mui/material";
import { getCidades } from '../../../../services/functions/utils'
import api from '../../../../services/api/api'

const APIEstado = api("Estado");

function FormPontoTuristico() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [estado, setEstado] = useState('');
    const [idEstado, setIdEstado] = useState(0);
    const [cidade, setCidade] = useState('');
    const [listEstado, setListEstado] = useState([]);
    const [listCidades, setListCidades] = useState([]);

    useEffect(() => {
        getEstado()
    }, [])

    useEffect(() => {
        getCidades(estado).then(res => {
            let listCidades = res.map(cidade => {
                return {
                    id: cidade.id,
                    label: cidade.nome
                }
            })
            setListCidades(listCidades);
        });

    }, [estado])

    //Função para recuperar dados da API
    const getEstado = async () => {
        APIEstado.get("GetAllEstado")
            .then(result =>
                setListEstado(result.data)
            );
    }

    const handleChange = (event) => {
        const estado = listEstado.filter(x => x.sigla === event.target.value);
        setEstado(estado[0].sigla);
        setIdEstado(estado[0].id);
    }

    return (
        <Grid style={{ paddingTop: "2vh" }} justifyContent="space-around" >
            <TextField value={nome} onChange={(e) => setNome(e.target.value)} style={{ marginTop: 10 }} fullWidth size="small" label="Nome" variant="outlined" />
            <TextField value={descricao} onChange={(e) => setDescricao(e.target.value)} style={{ marginTop: 10 }} fullWidth size="small" label="Descrição" variant="outlined" />
            <TextField value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} style={{ marginTop: 10 }} fullWidth size="small" label="Localização" variant="outlined" />
            <Grid display="flex">
                <FormControl style={{ marginTop: 10, minWidth: 120 }} size="small">
                    <InputLabel>Estado</InputLabel>
                    <Select
                        value={estado}
                        label="Estado"
                        sx={{ width: 200 }}
                        onChange={handleChange}
                    >
                        {
                            listEstado.map(x => {
                                return <MenuItem key={x.id} value={x.sigla}>{x.descricao}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <Autocomplete
                    size="small"
                    disablePortal
                    options={listCidades}
                    value={cidade}
                    onChange={(event, newValue) => {
                        setCidade(newValue);
                    }}
                    sx={{ flex: 1, marginTop: '10px', marginLeft: '2vh' }}
                    renderInput={(params) => <TextField {...params} label="Cidades" />}
                />
            </Grid>
        </Grid>
    )
}

export default FormPontoTuristico