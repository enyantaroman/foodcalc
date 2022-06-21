import { Box, Menu } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const pages = [
    {
      name: 'ホーム',
      path: '/'
    },
    {
      name: '食材一覧',
      path: '/food'
    },
    {
      name: '食材登録',
      path: '/food/create'
    },
    {
      name: 'メニュー一覧',
      path: '/menu'
    },
    {
      name: 'メニュー登録',
      path: '/menu/create'
    },
    {
      name: '計算一覧',
      path: '/calc'
    },
    {
      name: '計算登録',
      path: '/calc/create'
    },
];

const NavMenuIcon = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
            {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                    <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
    )
}

export default NavMenuIcon;