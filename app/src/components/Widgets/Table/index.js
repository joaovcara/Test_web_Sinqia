import { DataGrid } from '@mui/x-data-grid';
import { Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

export default function Table(props) {
  let columns = []
  const columnDefault = [
    {
      field: 'actions',
      headerName: 'Ações',
      width: 135,
      renderCell: () => (
        <Grid container style={{ display: "flex", justifyContent: "space-between", textAlign: 'right' }}>
          <Button sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="primary" onClick={() => props.funcView()}>
            <SearchIcon />
          </Button>
          <Button sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="primary" onClick={() => props.funcUpdate()}>
            <EditIcon />
          </Button>
          <Button sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="secondary" onClick={() => props.funcDelete()}>
            <DeleteIcon />
          </Button>
        </Grid>
      )
    },
  ];

  columns = [...props.columns, ...columnDefault]

  return (
    <div style={{ height: '80vh', width: '100%', background:' #fff', borderRadius: 5 }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}