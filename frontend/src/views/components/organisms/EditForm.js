import { Grid, Stack } from "@mui/material";
import DeleteButton from "../molecules/DeleteButton";
import EditButton from "../molecules/EditButton";
import UpdateButton from "../molecules/UpdateButton";

const EditForm = (props) => {
    const { children, url, destroyRedirectPath, editMode, editModeChange, updateData } = props;

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
                    <DeleteButton
                        destroyUrl={url}
                        redirectPath={destroyRedirectPath}
                    />
                </Grid>
                <Grid item xs={4}>
                    {
                        editMode?
                            <EditButton
                                editModeChange={editModeChange}

                            />
                        :
                            <UpdateButton
                                editModeChange={editModeChange}
                                updateUrl={url}
                                updateData={updateData}
                            />
                    }
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </>
    )
}

export default EditForm;