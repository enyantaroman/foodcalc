import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CalculateIcon from '@mui/icons-material/Calculate';

const StickItem = (props) => {
    const { title, cost } = props;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar variant="dense">
                <CalculateIcon />
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    ml: 2,
                }}>
                    <Typography variant="h6" color="inherit" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        {cost}
                    </Typography>
                </Box>
            </Toolbar>
            </AppBar>
        </Box>
    );
}

export default StickItem;