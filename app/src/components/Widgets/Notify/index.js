import { Alert, Snackbar } from "@mui/material";

export default function Notify(props) {
    return (
        <Snackbar open={props.open} autoHideDuration={1500} onClose={props.handleClose}>
            <Alert variant="filled" severity={props.variant} >
                {props.content}
            </Alert>
        </Snackbar>
    )
}
