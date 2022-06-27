import { Box, Container, Toolbar } from "@mui/material";
import CustomBreadCrumbs from '../molecules/CustomBreadCrumbs';
import HomeButton from '../molecules/HomeButton';

const HeaderBottom = (props) => {
    const {breadcrumbs} = props;
    return (
        <>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CustomBreadCrumbs breadcrumbs={breadcrumbs} />
                    <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
                    <HomeButton />
                </Toolbar>
            </Container>
        </>
    )
}

export default HeaderBottom;