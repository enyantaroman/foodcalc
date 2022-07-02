import { Grid, Stack } from "@mui/material";
import ReCalcButton from "../molecules/ReCalcButton";
import CreateCalcButton from '../molecules/CreateCalcButton';

const CreateCalcForm = (props) => {
    const { children, resetState, isResetState, resetCalcState, isResetCalcState, calcMode, calcModeChange, createUrl, createData } = props;

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
                    <ReCalcButton
                        calcModeChange={calcModeChange}
                        calcMode={calcMode}
                        resetState={resetState}
                        isResetState={isResetState}
                        resetCalcState={resetCalcState}
                        isResetCalcState={isResetCalcState}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CreateCalcButton
                        calcModeChange={calcModeChange}
                        calcMode={calcMode}
                        resetState={resetState}
                        isResetState={isResetState}
                        resetCalcState={resetCalcState}
                        isResetCalcState={isResetCalcState}
                        createUrl={createUrl}
                        createData={createData}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    )
}

export default CreateCalcForm;