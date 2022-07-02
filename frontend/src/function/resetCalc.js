const resetCalc = (calcModeChange, calcMode, resetState, isResetState, resetCalcState, isResetCalcState) => {
    calcModeChange(false);
    resetState(isResetState);
    resetCalcState(isResetCalcState);
}

export default resetCalc;