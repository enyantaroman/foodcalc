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
            <HeaderBottom breadcrumbs={breadcrumbs} />
            <Container maxWidth="md">
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default BasicTemplate;