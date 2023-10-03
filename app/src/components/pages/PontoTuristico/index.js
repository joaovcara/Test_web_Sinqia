import PageGeneric from '../PageGeneric';
import api from '../../../services/api/api'
import { useEffect, useState } from 'react';
import Modal from '../../Widgets/Modal'

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
    <>
      <PageGeneric 
        title={"Ponto Turístico"} 
        data={listPontoTuristico} 
        columns={columns}
        Add={() => setOpenModal(true)} 
        Update={() => alert("Update")} 
        Delete={() => alert("Delete")} 
        View={() => alert("View")} 
      />
      {
        openModal && 
        <Modal 
          title={"Novo Ponto Turístico"}
          openClose={openModal} 
          funcOpenClose={setOpenModal}
          content={
            <div>
              <p>Campos de cadastro</p>
            </div>
          }
        />  
      }
    </>
  );
}

export default PagePontoTuristico;