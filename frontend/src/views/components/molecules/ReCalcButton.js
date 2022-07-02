import { Button } from "@mui/material";
import resetCalc from "../../../function/resetCalc";

const ReCalcButton = (props) => {
    const { calcModeChange, calcMode, resetState, isResetState, resetCalcState, isResetCalcState } = props;
    
    return (
        <Button
            variant="outlined"
            onClick={() => resetCalc(calcModeChange, calcMode, resetState, isResetState, resetCalcState, isResetCalcState)}
        >
            再計算
        </Button>
    )
}

export default ReCalcButton;