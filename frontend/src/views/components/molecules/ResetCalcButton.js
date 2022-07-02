import { Button } from "@mui/material";

const ResetCalcButton = (props) => {
    const { calcModeChange, calcMode, resetState, isResetState, resetCalcState, isResetCalcState } = props;

    const reset = (resetState, isResetState, resetCalcState, isResetCalcState) => {
        resetState(isResetState);
        resetCalcState(isResetCalcState);
    }

    return (
        <Button
            variant="outlined"
            onClick={() => reset(resetState, isResetState, resetCalcState, isResetCalcState)}
            disabled={calcMode}
        >
            リセット
        </Button>
    )
}

export default ResetCalcButton;