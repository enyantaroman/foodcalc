import { Grid, Stack } from "@mui/material";
import DeleteButton from "../molecules/DeleteButton";
import DisplayMenuButton from "../molecules/DisplayMenuButton";
import DisplayFoodButton from "../molecules/DisplayFoodButton";

const EditCalcForm = (props) => {
    const { children, url, destroyRedirectPath, changeMenuDisp, menuDisp, changeFoodDisp, foodDisp } = props;

    return (
        <>
            <Grid
                container
                spacing={2}
                columns={16}
                p={2}
            >
                <Grid item xs={2}></Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    <DeleteButton
                        destroyUrl={url}
                        redirectPath={destroyRedirectPath}
                    />
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center'}}>
                    <DisplayMenuButton
                        changeMenuDisp={changeMenuDisp}
                        menuDisp={menuDisp}
                    />
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', justifyContent: 'flex-start'}}>
                    <DisplayFoodButton
                        changeFoodDisp={changeFoodDisp}
                        foodDisp={foodDisp}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Stack spacing={2}>
                {children}
            </Stack>
        </>
    )
}

export default EditCalcForm;