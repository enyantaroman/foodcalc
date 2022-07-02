import { Button } from "@mui/material";
import calc from "../../../function/calc";

const Calcbutton = (props) => {
    const { calcMode, calcModeChange, createData, createDataChange, calcData, calcDataChange } = props;

    return (
        <Button
            variant="contained"
            onClick={() => calc(calcMode, calcModeChange, createData, createDataChange, calcData, calcDataChange)}
            disabled={calcMode}
        >
            計算
        </Button>
    )
}

export default Calcbutton;