import { DataGrid } from '@mui/x-data-grid';
import { Grid, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

export default function Table(props) {
  const columnDefault = [
    {
      field: 'actions',
      headerName: 'Ações',
      width: 125,
      renderCell: () => (
        <Grid container style={{ display: "flex", justifyContent: "space-between", textAlign: 'right' }}>
          <Button sx={{
            maxWidth: '30px',
            maxHeight: '30px',
            minWidth: '30px',
            minHeight: '30px',
            background: 'gray',
            '&:hover': {
              backgroundColor: '#606060',
            },
          }} variant="contained" onClick={() => props.funcView()}>
            <SearchIcon />
          </Button>
          <Button sx={{
            maxWidth: '30px',
            maxHeight: '30px',
            minWidth: '30px',
            minHeight: '30px',
            background: 'orange',
            '&:hover': {
              backgroundColor: '#e89200',
            },
          }} variant="contained" onClick={() => props.funcUpdate()}>
            <EditIcon />
          </Button>
          <Button sx={{
            maxWidth: '30px',
            maxHeight: '30px',
            minWidth: '30px',
            minHeight: '30px',
            background: 'red',
            '&:hover': {
              backgroundColor: '#e00000',
            },
          }} variant="contained" onClick={() => props.funcDelete()}>
            <DeleteIcon />
          </Button>
        </Grid>
      )
    },
  ];

  const columns = [...props.columns, ...columnDefault]

  return (
    <div style={{ height: '80vh', width: '100%', background: ' #fff', borderRadius: 5 }}>
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