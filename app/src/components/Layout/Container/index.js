import { Grid } from "@mui/material";

function Container(props) {

    return (
        <Grid container style={{background:"#f4f4f4", height: "100vh"}}>
            {props.children}            
        </Grid>
    );
  }
  
  export default Container;