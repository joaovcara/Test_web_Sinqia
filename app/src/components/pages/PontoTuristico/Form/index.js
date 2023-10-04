import { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Autocomplete, Button, FormHelperText, Typography } from "@mui/material";
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { getCidades } from '../../../../services/functions/utils'
import api from '../../../../services/api/api'
import Notify from "../../../Widgets/Notify";

const APIEstado = api("Estado");
const APIPontoTuristico = api("PontoTuristico");

function FormPontoTuristico(props) {
    const [operationUser, setOperationUser] = useState('');
    const [objClicked, setObjClicked] = useState('');

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
        setOperationUser(props.action)
        setObjClicked(props.objClicked)
    }, [props.action, props.objClicked, objClicked, operationUser])

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

    /**
     * Função para recuperar dados dos estados da API
     */
    const getEstado = async () => {
        await APIEstado.get("GetAllEstado")
            .then(result =>
                setListEstado(result.data)
            );
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
     * Função responável por deletar um ponto turistico
     * @returns 
     */
    const handleDeleteClick = async () => {
        const id = objClicked.id;
        if (!id)
            return;

        let listPontoFilter = props.listPontoTuristico.filter(x => x.id !== id);
        props.setListPontoTuristico(listPontoFilter);

        await APIPontoTuristico.delete(`DeletePontoTuristico?id=${id}`)
            .then(() => {
                setOpenSnack(true);
                setVariantSnack("success");
                setContentSnack("Ponto turístico adicionado com sucesso!");
                setTimeout(props.setOpenModal(false), 5000);
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
        if (newValue == null)
            return setCidade('');

        setCidade(newValue.label);
    }

    const contentForm = () => {
        return (
            <>
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
            </>
        )
    }

    return (
        <>
            <Grid style={{ paddingTop: "2vh" }} justifyContent="space-around" >
                {operationUser !== "Delete" ?
                    contentForm()
                    :
                    <Grid display="flex" margin={2} alignItems="center">
                        <NotInterestedIcon style={{ color: "red" }} fontSize="large" />
                        <Typography width={"100%"} flex={1}>Deseja realmente excluir o ponto turístico?</Typography>
                    </Grid>
                }
            </Grid>
            {
                operationUser !== "View" &&
                <Grid container justifyContent="flex-end" style={{ marginTop: 10 }}>
                    {
                        operationUser === "Delete" ?
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