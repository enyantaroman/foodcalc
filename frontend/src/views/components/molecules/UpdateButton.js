import { Button } from "@mui/material";
import update from "../../../function/update";

const UpdateButton = (props) => {
    const { editModeChange, updateUrl, updateData } = props;

    return (
        <Button
            variant="contained"
            onClick={() => {update(updateUrl, updateData);editModeChange(true)}}
        >
            更新
        </Button>
    )
}

export default UpdateButton;