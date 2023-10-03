import api from '../../../services/api/api'
import { useEffect, useState } from 'react';
import PageGeneric from '../PageGeneric';

const APIEstado = api("Estado");

function PageEstado() {
  const [listEstado, setListEstado] = useState([])

  useEffect(() => {
    getEstado()
  }, [])

  const columns = [
    {
      field: 'sigla',
      headerName: 'Sigla',
      flex: 1
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      flex: 1
    }
  ]

  //Função para recuperar dados da API
  const getEstado = async () => {
    APIEstado.get("GetAllEstado")
      .then(result =>
        setListEstado(result.data)
      );
  }

  return (
    <PageGeneric
      title={"Estado"}
      columns={columns}
      data={listEstado}
      Add={() => alert("Insert")} 
      Update={() => alert("Update")} 
      Delete={() => alert("Delete")} 
      View={() => alert("View")} 
    />
  );
}

export default PageEstado;