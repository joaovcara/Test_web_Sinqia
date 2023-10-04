import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

function Container(props) {
    const [appBarHeight, setAppBarHeight] = useState(0);

    // Função para calcular a altura do AppBar e atualizar o estado
    const updateAppBarHeight = () => {
        const appBar = document.querySelector('.MuiAppBar-root');
        if (appBar) {
            setAppBarHeight(appBar.clientHeight);
        }
    };


    useEffect(() => {
        updateAppBarHeight();

        // Adicionar um ouvinte de redimensionamento da janela para atualizar a altura quando necessário
        window.addEventListener('resize', updateAppBarHeight);

        // Remover o ouvinte de redimensionamento quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', updateAppBarHeight);
        };
    }, []);

    return (
        <Grid container style={{ paddingTop: appBarHeight + "px", display: "flex" }}>
            {props.children}
        </Grid>
    );
}

export default Container;