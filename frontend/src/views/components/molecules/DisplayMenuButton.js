import { Button } from "@mui/material";


const DisplayMenuButton = (props) => {
    const { changeMenuDisp, menuDisp } = props;
    return (
        <Button
            variant="contained"
            onClick={() => changeMenuDisp(!menuDisp)}
        >
            メニュー表示・非表示
        </Button>
    )
}

export default DisplayMenuButton;