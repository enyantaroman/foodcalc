import { Button } from "@mui/material";

const ResetButton = (props) => {
    const { resetState, isResetState } = props;

    return (
        <Button
            variant="outlined"
            onClick={() => resetState(isResetState)}
        >
            リセット
        </Button>
    )
}

export default ResetButton;