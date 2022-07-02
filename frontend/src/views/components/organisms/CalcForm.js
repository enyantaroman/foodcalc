import { Grid, Stack } from "@mui/material";
import ResetCalcButton from "../molecules/ResetCalcButton";
import CalcButton from "../molecules/CalcButton";

const CalcForm = (props) => {
    const { children, resetState, isResetState, resetCalcState, isResetCalcState, calcMode, calcModeChange, createData, createDataChange, calcData, calcDataChange } = props;

    return (
        <>
            <Stack spacing={2}>
                {children}
            </Stack>
            <Grid
                container
                spacing={2}
                columns={16}
                p={2}
            >
                <Grid item xs={4}></Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <ResetCalcButton
                        calcModeChange={calcModeChange}
                        calcMode={calcMode}
                        resetState={resetState}
                        isResetState={isResetState}
                        resetCalcState={resetCalcState}
                        isResetCalcState={isResetCalcState}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CalcButton
                        calcModeChange={calcModeChange}
                        calcMode={calcMode}
                        createDataChange={createDataChange}
                        createData={createData}
                        calcDataChange={calcDataChange}
                        calcData={calcData}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    )
}

export default CalcForm;