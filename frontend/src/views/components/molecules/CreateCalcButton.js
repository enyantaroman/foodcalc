import { Button } from "@mui/material";
import create from '../../../function/create';
import resetCalc from "../../../function/resetCalc";

const CreateCalcButton = (props) => {
    const { calcModeChange, calcMode, resetState, isResetState, resetCalcState, isResetCalcState, createUrl, createData } = props;

    return (
        <Button
            variant="contained"
            onClick={() => {
                create(resetState, isResetState, createUrl, createData);
                resetCalc(calcModeChange, calcMode, resetState, isResetState, resetCalcState, isResetCalcState);
            }}
        >
            登録
        </Button>
    )
}

export default CreateCalcButton;