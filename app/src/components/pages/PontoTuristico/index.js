import PageGeneric from '../PageGeneric';
import api from '../../../services/api/api'
import { useEffect, useState } from 'react';
import FormPontoTuristico from './Form';

const APIPontoTuristico = api("PontoTuristico");

function PagePontoTuristico() {
  const [listPontoTuristico, setListPontoTuristico] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState('');
  const [objPontoTuristicoClicked, setObjPontoTuristicoClicked] = useState({});
  const [updateGrid, setUpdateGrid] = useState(true)

  useEffect(() => {
    getPontoTuristico();
  }, [updateGrid])

  const columns = [
    {
      field: 'nome',
      headerName: 'Nome',
      width: 400
    },
    {
      field: 'localizacao',
      headerName: 'Localização',
      flex: 1
    },
    {
      field: 'dataInclusao',
      headerName: 'Data Inclusão',
      width: 200,
      sortable: true,
      hide: true
    },
  ];

  /**
   * Função responsável por retornar os dados  da API
   */
  const getPontoTuristico = async () => {
    await APIPontoTuristico.get("GetAllPontoTuristico")
      .then(result => {
        setListPontoTuristico(result.data);
      });

    setUpdateGrid(false)
  }

  return (
    <PageGeneric
      title={"Ponto Turístico"}
      data={listPontoTuristico}
      columns={columns}
      funcActionUser={() => setOpenModal(true)}
      setAction={setAction}
      setObjPontoTuristicoClicked={setObjPontoTuristicoClicked}
      openClose={openModal}
      funcOpenClose={setOpenModal}
      content={
        <FormPontoTuristico
          setOpenModal={setOpenModal}
          action={action}
          objClicked={objPontoTuristicoClicked}
          listPontoTuristico={listPontoTuristico}
          setListPontoTuristico={setListPontoTuristico}
          updateList={setUpdateGrid}
        />
      }
    />
  );
}

export default PagePontoTuristico;