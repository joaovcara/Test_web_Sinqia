import { Grid, Typography } from "@mui/material"
import Mui from '../../../assets/img/mui.png'
import Html from '../../../assets/img/html.png'
import css from '../../../assets/img/css.png'
import Js from '../../../assets/img/js.png'
import CSharp from '../../../assets/img/csharp.png'
import Sql from '../../../assets/img/sql.png'
import ReactJS from '../../../assets/img/react.png'

function PageHome() {
    return (
        <Grid container paddingTop={'10%'}>
            <Grid container justifyContent="center">
                <Typography variant="h3" color="#11223F">Bem Vindo!</Typography>
            </Grid>
            <Grid container justifyContent="center" paddingTop='2%' paddingX="5%" textAlign="center">
                <Typography>Este projeto tem como foco principal, apresentar minhas habilidades e competências em desenvolvimento de software.</Typography>
            </Grid>
            <Grid container justifyContent="center" paddingTop='2%' textAlign="center">
                <Typography color="#11223F" variant="h5">TECNOLOGIAS E BIBLIOTECAS UTILIZADAS</Typography>
            </Grid>
            <Grid container display="flex" flexWrap="wrap" justifyContent="center">
                <Grid variant="h6" component="div" padding={2}>
                    <img src={Html} height={60} alt='Logo'></img>
                </Grid>
                <Grid variant="h6" component="div" padding={2}>
                    <img src={css} height={60} alt='Logo'></img>
                </Grid>
                <Grid variant="h6" component="div" padding={2}>
                    <img src={Js} height={60} alt='Logo'></img>
                </Grid>
                <Grid variant="h6" component="div" padding={2}>
                    <img src={CSharp} height={60} alt='Logo'></img>
                </Grid>
                <Grid variant="h6" component="div" padding={2}>
                    <img src={Sql} height={60} alt='Logo'></img>
                </Grid>
                <Grid variant="h6" component="div" padding={2}>
                    <img src={ReactJS} height={60} alt='Logo'></img>
                </Grid>
                <Grid variant="h6" component="div" padding={2}>
                    <img src={Mui} height={60} alt='Logo'></img>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PageHome