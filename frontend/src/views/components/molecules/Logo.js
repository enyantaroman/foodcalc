import { Toolbar } from "@mui/material";
import LogoIcon from "../atoms/LogoIcon";
import LogoTitle from "../atoms/LogoTitle";

const Logo = () => {
    return (
        <>
            <Toolbar disableGutters>
                <LogoIcon />
                <LogoTitle />
            </Toolbar>
        </>
    )
}

export default Logo;