import { Button } from "@mui/material";

const EditButton = (props) => {
    const { editModeChange } = props;
    return (
        <Button
            variant="contained"
            onClick={() => editModeChange(false)}
        >
            編集
        </Button>
    )
}

export default EditButton;