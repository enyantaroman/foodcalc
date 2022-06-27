import { Grid, Stack } from "@mui/material";
import ResetButton from "../molecules/ResetButton";
import CreateButton from '../molecules/CreateButton';

const CreateForm = (props) => {
    const { children, resetState, isResetState, createUrl, createData } = props;

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
                    <ResetButton
                        resetState={resetState}
                        isResetState={isResetState}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CreateButton
                        resetState={resetState}
                        isResetState={isResetState}
                        createUrl={createUrl}
                        createData={createData}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    )
}

export default CreateForm;