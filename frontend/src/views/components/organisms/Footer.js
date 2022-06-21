import { Box } from "@mui/material";
import CopyRight from "../atoms/CopyRight";

const Footer = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#333",
                color: "#eee",
                p: 1,
                width: "100%",
                mt: 'auto',
            }}>
                <CopyRight />
            </Box>
        </>
    )
}

export default Footer;