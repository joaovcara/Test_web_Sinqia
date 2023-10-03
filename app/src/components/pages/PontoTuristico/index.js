import PageGeneric from '../PageGeneric';
import api from '../../../services/api/api'
import { useEffect, useState } from 'react';
import FormPontoTuristico from './Form';

const APIPontoTuristico = api("PontoTuristico");

function PagePontoTuristico() {
  const [listPontoTuristico, setListPontoTuristico] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getPontoTuristico()
  }, [])

  const columns = [
    {
      field: 'nome',
      headerName: 'Nome',
      flex: 1
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      flex: 1
    },
  ];

  /**
   * Função responsável por retornar os dados da API
   */
  const getPontoTuristico = async () => {
    await APIPontoTuristico.get("GetAllPontoTuristico")
      .then(result => {
        setListPontoTuristico(result.data);
      });
  }

  return (
    <PageGeneric
      title={"Ponto Turístico"}
      data={listPontoTuristico}
      columns={columns}
      Add={() => setOpenModal(true)}
      Update={() => alert("Update")}
      Delete={() => alert("Delete")}
      View={() => alert("View")}
      openClose={openModal}
      funcOpenClose={setOpenModal}
      content={
        <FormPontoTuristico />
      }
    />
  );
}

export default PagePontoTuristico;