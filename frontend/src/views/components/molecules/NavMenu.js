import { Box, Button } from "@mui/material";
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
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                    key={page.name}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    component={Link}
                    to={page.path}
                    >
                    {page.name}
                    </Button>
                ))}
            </Box>
        </>
    )
}

export default NavMenu;