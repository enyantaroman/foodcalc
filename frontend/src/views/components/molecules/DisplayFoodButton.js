import { Button } from "@mui/material";


const DisplayFoodButton = (props) => {
    const { changeFoodDisp, foodDisp } = props;
    return (
        <Button
            variant="contained"
            onClick={() => changeFoodDisp(!foodDisp)}
        >
            食材表示・非表示
        </Button>
    )
}

export default DisplayFoodButton;