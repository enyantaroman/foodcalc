import NoFoodIcon from '@mui/icons-material/NoFood';

const LogoIcon = () => {
    return (
        <>
            <NoFoodIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <NoFoodIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        </>
    )
}

export default LogoIcon;