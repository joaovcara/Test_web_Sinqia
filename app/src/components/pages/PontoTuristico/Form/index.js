import { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Autocomplete, Button, FormHelperText, Typography } from "@mui/material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { getCidades } from '../../../../services/functions/utils'
import api from '../../../../services/api/api'
import Notify from "../../../Widgets/Notify";

const APIEstado = api("Estado");
const APIPontoTuristico = api("PontoTuristico");

let listEstado = [];

function FormPontoTuristico(props) {
    const objEstadoClicado = props.objClicked;

    const [objId, setObjId] = useState(0);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [estadoSelected, setEstadoSelected] = useState('');
    const [idEstado, setIdEstado] = useState(0);
    const [cidade, setCidade] = useState('');

    const [listCidades, setListCidades] = useState([]);

    const [openSnack, setOpenSnack] = useState(false);
    const [variantSnack, setVariantSnack] = useState("");
    const [contentSnack, setContentSnack] = useState("");

    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        openComponent();
    }, [])

    useEffect(() => {
        getCidades(estadoSelected).then(res => {
            let listCidades = res.map(cidade => {
                return {
                    id: cidade.id,
                    label: cidade.nome
                }
            })
            setListCidades(listCidades);
        });
    }, [estadoSelected])

    const openComponent = async () => {
        listEstado = await getEstado();
        let estadoSelectedObj = listEstado.filter(x => x.id === objEstadoClicado.idEstado);
        objEstadoClicado.sigla = estadoSelectedObj[0]?.sigla ?? '';

        if (props.action === "View" || props.action === "Update") {
            setObjId(objEstadoClicado.id);
            setCidade(objEstadoClicado.cidade);
            setNome(objEstadoClicado.nome);
            setDescricao(objEstadoClicado.descricao);
            setLocalizacao(objEstadoClicado.localizacao);
            setIdEstado(objEstadoClicado.idEstado)
            setEstadoSelected(objEstadoClicado.sigla)
        } else if (props.action === "Insert") {
            clearForm();
        }
    }

    /**
     * Função para recuperar dados dos estados da API
     */
    const getEstado = async () => {
        const response = await APIEstado.get("GetAllEstado");
        return response.data;
    }

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
        if (!estadoSelected) {
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
            if (props.action === "Insert")
                savePontoTuristico();

            if (props.action === "Update")
                updatePontoTuristico();
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
            .then((res) => {
                setOpenSnack(true);
                setVariantSnack("success");
                setContentSnack("Ponto turístico adicionado com sucesso!");
                clearForm();
                let newItem = {
                    id: res.data,
                    nome: nome,
                    descricao: descricao,
                    localizacao: localizacao,
                    cidade: cidade,
                    idEstado: idEstado
                }

                let listNewPonto = [...props.listPontoTuristico, newItem];
                props.setListPontoTuristico(listNewPonto);
            })
            .catch(() => {
                setOpenSnack(true);
                setVariantSnack("error");
                setContentSnack("Erro ao adicionar Ponto turístico!");
            });
    }

    /**
     * Função de insert chama API e persiste os dados
     */
    const updatePontoTuristico = async () => {
        await APIPontoTuristico.put("UpdatePontoTuristico/", {
            id: objId,
            nome: nome,
            descricao: descricao,
            localizacao: localizacao,
            cidade: cidade,
            idEstado: idEstado
        })
            .then((res) => {
                setOpenSnack(true);
                setVariantSnack("success");
                setContentSnack("Ponto turístico adicionado com sucesso!");
                props.updateList(true);
                setTimeout(() => {
                    props.setOpenModal(false);
                }, 1200);
            })
            .catch(() => {
                setOpenSnack(true);
                setVariantSnack("error");
                setContentSnack("Erro ao adicionar Ponto turístico!");
            });
    }

    /**
     * Função responável por deletar um ponto turistico
     * @returns 
     */
    const handleDeleteClick = async () => {
        const id = objEstadoClicado.id;
        if (!id)
            return;

        await APIPontoTuristico.delete(`DeletePontoTuristico?id=${id}`)
            .then(() => {
                setOpenSnack(true);
                setVariantSnack("success");
                setContentSnack("Ponto turístico adicionado com sucesso!");
                props.updateList(true);
                setTimeout(() => {
                    props.setOpenModal(false);
                }, 1200);
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
        setObjId(0);
        setNome('');
        setDescricao('');
        setLocalizacao('');
        setEstadoSelected('');
        setIdEstado(0);
        setCidade('');
    }

    /**
     * Função que gerencia a mudança de estado no select
     */
    const handleChangeEstado = (value) => {
        const estado = listEstado.filter(x => x.sigla === value);
        setEstadoSelected(estado[0].sigla);
        setIdEstado(estado[0].id);
        setCidade('');
    };

    /**
     * Função que gerencia a mudança de cidade no autocomplete
     */
    const handleChangeCidade = (newValue) => {
        if (newValue == null)
            return setCidade('');

        setCidade(newValue.label);
    }

    /**
     * Função retorna o conteudo do formulário
     */
    const contentForm = () => {
        return (
            <>
                <TextField
                    disabled={props.action === "View" ? true : false}
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
                    disabled={props.action === "View" ? true : false}
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
                    disabled={props.action === "View" ? true : false}
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
                    <FormControl disabled={props.action === "View" ? true : false} required={true} style={{ marginTop: 10, flex: 1 }} size="small" error={!!validationErrors.estado}>
                        <InputLabel>Estado</InputLabel>
                        <Select
                            value={estadoSelected}
                            label="Estado"
                            onChange={(e) => handleChangeEstado(e.target.value)}
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
                        disabled={props.action === "View" ? true : false}
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
            </>
        )
    }

    return (
        <>
            <Grid style={{ paddingTop: "2vh" }} justifyContent="space-around" >
                {props.action !== "Delete" ?
                    contentForm()
                    :
                    <Grid display="flex" margin={2} alignItems="center">
                        <NotInterestedIcon style={{ color: "red" }} fontSize="large" />
                        <Typography width={"100%"} flex={1}>Deseja realmente excluir o ponto turístico?</Typography>
                    </Grid>
                }
            </Grid>
            {
                props.action !== "View" &&
                <Grid container justifyContent="flex-end" style={{ marginTop: 10 }}>
                    {
                        props.action === "Delete" ?
                            <Button style={{ background: 'red' }} variant="contained" onClick={() => handleDeleteClick()} >Deletar</Button>
                            :
                            <Button variant="contained" onClick={() => handleSaveClick()} >Salvar</Button>
                    }
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