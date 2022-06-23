import { Container } from "@mui/material";
import Header from "../organisms/Header";
import HeaderBottom from "../organisms/HeaderBottom";
import Footer from "../organisms/Footer";
import {Box} from "@mui/material";

const BasicTemplate = (props) => {
    const { children, breadcrumbs } = props;
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header />
            <Box sx={(theme) => ({...theme.mixins.toolbar,})}></Box>
            <HeaderBottom breadcrumbs={breadcrumbs} />
            <Container maxWidth="md">
                {children}
            </Container>
            <Box sx={{
                mt: 'auto',
            }}>
                <Footer />
            </Box>
        </Box>
    )
}

export default BasicTemplate;