import { Button } from "@mui/material";
import create from '../../../function/create';

const CreateButton = (props) => {
    const { resetState, isResetState, createUrl, createData } = props;

    return (
        <Button
            variant="contained"
            onClick={() => create(resetState, isResetState, createUrl, createData)}
        >
            登録
        </Button>
    )
}

export default CreateButton;