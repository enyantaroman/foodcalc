import { Button } from "@mui/material";
import destroy from "../../../function/destroy";


const DeleteButton = (props) => {
    const { destroyUrl, redirectPath } = props;
    return (
        <Button
            variant="outlined"
            onClick={() => destroy(destroyUrl, redirectPath)}
        >
            削除
        </Button>
    )
}

export default DeleteButton;