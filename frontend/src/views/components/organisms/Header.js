import { AppBar, Container, Toolbar } from "@mui/material";
import AccountMenu from "../molecules/AccountMenu";
import Logo from "../molecules/Logo";
import NavMenu from "../molecules/NavMenu";
import NavMenuIcon from "../molecules/NavMenuIcon";

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavMenuIcon />
                    <Logo />
                    <NavMenu />
                    <AccountMenu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;