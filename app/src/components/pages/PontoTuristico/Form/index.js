import { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Autocomplete, Button, FormHelperText } from "@mui/material";
import { getCidades } from '../../../../services/functions/utils'
import api from '../../../../services/api/api'
import Notify from "../../../Widgets/Notify";

const APIEstado = api("Estado");
const APIPontoTuristico = api("PontoTuristico");

function FormPontoTuristico(props) {
    //const [actionUser, setActionUser] = useState('');
    //const objClicked = props.objClicked;

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [estado, setEstado] = useState('');
    const [idEstado, setIdEstado] = useState(0);
    const [cidade, setCidade] = useState('');

    const [listEstado, setListEstado] = useState([]);
    const [listCidades, setListCidades] = useState([]);

    const [openSnack, setOpenSnack] = useState(false);
    const [variantSnack, setVariantSnack] = useState("");
    const [contentSnack, setContentSnack] = useState("");

    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        getEstado();
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

    // const handleEventTable = (action) => {
    //     console.log(props.action)
    // }

    /**
     * Função para recuperar dados dos estados da API
     */
    const getEstado = async () => {
        await APIEstado.get("GetAllEstado")
            .then(result =>
                setListEstado(result.data)
            );
    }

    // const handleIsView = () => {
    //     setNome(objClicked.nome);
    //     setDescricao(objClicked.descricao);
    //     setLocalizacao(objClicked.localizacao);
    //     setEstado();
    //     setIdEstado(0);
    //     setCidade('');
    // }

    // const handleIsUpdate = () => {
    // }

    // const handleIsDelete = () => {
    // }

    /**
     * Validação do formulário
     */
    const validateForm = () => {
        const errors = {};
        if (!nome) {
            errors.nome = "O campo Nome é obrigatório";
        }
        if (!descricao) {
            errors.descricao = "O campo Descrição é obrigatório";
        }
        if (!localizacao) {
            errors.localizacao = "O campo Localização é obrigatório";
        }
        if (!estado) {
            errors.estado = "Selecione um Estado";
        }
        if (!cidade) {
            errors.cidade = "Selecione uma Cidade";
        }
        return errors;
    }

    /**
     * Função responsável por validar e salvar formulário
     */
    const handleSaveClick = () => {
        const errors = validateForm();
        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            savePontoTuristico();
        }
    };

    /**
     * Função de insert chama API e persiste os dados
     */
    const savePontoTuristico = async () => {
        await APIPontoTuristico.post("InsertPontoTuristico/", {
            nome: nome,
            descricao: descricao,
            localizacao: localizacao,
            cidade: cidade,
            idEstado: idEstado
        })
            .then(() => {
                setOpenSnack(true);
                setVariantSnack("success");
                setContentSnack("Ponto turístico adicionado com sucesso!");
                clearForm();
            })
            .catch(() => {
                setOpenSnack(true);
                setVariantSnack("error");
                setContentSnack("Erro ao adicionar Ponto turístico!");
            });
    }

    /**
     * Função de limpar formulário
     */
    const clearForm = () => {
        setNome('');
        setDescricao('');
        setLocalizacao('');
        setEstado('');
        setIdEstado(0);
        setCidade('');
    }

    const handleChangeEstado = (event) => {
        const estado = listEstado.filter(x => x.sigla === event.target.value);
        setEstado(estado[0].sigla);
        setIdEstado(estado[0].id);
    };

    const handleChangeCidade = (newValue) => {
        if(newValue == null)
            return setCidade('');

        setCidade(newValue.label);
    }

    return (
        <>
            <Grid style={{ paddingTop: "2vh" }} justifyContent="space-around" >
                <TextField
                    required={true}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    error={!!validationErrors.nome}
                    helperText={validationErrors.nome}
                    style={{ marginTop: 10 }}
                    fullWidth
                    size="small"
                    label="Nome"
                    variant="outlined"
                />
                <TextField
                    required={true}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    error={!!validationErrors.descricao}
                    helperText={validationErrors.descricao}
                    style={{ marginTop: 10 }}
                    fullWidth
                    size="small"
                    label="Descrição"
                    variant="outlined"
                />
                <TextField
                    required={true}
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                    error={!!validationErrors.localizacao}
                    helperText={validationErrors.localizacao}
                    style={{ marginTop: 10 }}
                    fullWidth
                    size="small"
                    label="Localização"
                    variant="outlined"
                />
                <Grid display="flex">
                    <FormControl required={true} style={{ marginTop: 10, flex: 1 }} size="small" error={!!validationErrors.estado}>
                        <InputLabel>Estado</InputLabel>
                        <Select
                            value={estado ?? undefined}
                            label="Estado"
                            onChange={(e) => handleChangeEstado(e)}
                        >
                            {
                                listEstado.map(x => {
                                    return <MenuItem key={x.id} value={x.sigla}>{x.descricao}</MenuItem>
                                })
                            }
                        </Select>
                        {!!validationErrors.estado && (
                            <FormHelperText>{validationErrors.estado}</FormHelperText>
                        )}
                    </FormControl>
                    <Autocomplete
                        disabled={listCidades.length > 0 ? false : true}
                        size="small"
                        options={listCidades}
                        value={cidade ?? undefined}
                        onChange={(event, newValue) => handleChangeCidade(newValue)}
                        style={{ flex: 1, marginTop: 10, marginLeft: '2vh' }}
                        renderInput={(params) =>
                            <TextField {...params}
                                required={true}
                                label="Cidades"
                                error={!!validationErrors.cidade}
                                helperText={validationErrors.cidade}
                            />
                        }
                    />
                </Grid>
            </Grid>
            {
                props.action === "isView" &&
                <Grid container justifyContent="flex-end" style={{ marginTop: 10 }}>
                    <Button variant="contained" onClick={() => handleSaveClick()} >Salvar</Button>
                </Grid>
            }
            {
                openSnack &&
                <Notify open={openSnack} handleClose={() => setOpenSnack(false)} content={contentSnack} variant={variantSnack} />
            }
        </>
    )
}

export default FormPontoTuristico