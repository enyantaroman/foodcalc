import { Link } from 'react-router-dom';
import { Typography, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const breadcrumbs = [
    <Link to={`/`}>
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        食材一覧
    </Typography>,
];

const CustomBreadCrumbs = () => {
    return (
        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    )
}

export default CustomBreadCrumbs;