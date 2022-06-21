import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Typography key="2" color="text.primary">
        メニュー一覧
    </Typography>,
];

const MenuList = () => {
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>メニュー一覧</h1>
            </BasicTemplate>
        </>
    )
}

export default MenuList;