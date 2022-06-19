import { Typography } from "@mui/material";

const CopyRight = () => {
    return (
        <Typography
            sx={{
            fontFamily: 'monospace',
            fontSize: '10px',
            fontWeight: 700,
            color: 'inherit',
            }}
        >
            &copy;foodcalc2022
        </Typography>
    )
}

export default CopyRight;