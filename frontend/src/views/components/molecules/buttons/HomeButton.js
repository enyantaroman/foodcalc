import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <>
            <Button variant="outlined" component={Link} to="/">Homeへ</Button>
        </>
    )
}

export default HomeButton;