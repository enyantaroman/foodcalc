import { Typography } from "@mui/material";

const LogoTitle = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            }}
        >
        FOODCALC
      </Typography>
    )
}

export default LogoTitle;