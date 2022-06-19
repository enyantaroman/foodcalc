import { useState } from "react";
import { Box, Button ,Menu, MenuItem, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

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

const NavMenu = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                    component={Link}
                    to={page.path}
                    >
                    {page.name}
                    </Button>
                ))}
            </Box>
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
        </>
    )
}

export default NavMenu;