import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Link to={`/menu`} key="2">
        メニュー一覧
    </Link>,
    <Typography key="3" color="text.primary">
        メニュー詳細
    </Typography>,
];

const MenuDetail = () => {
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>メニュー詳細</h1>
            </BasicTemplate>
        </>
    )
}

export default MenuDetail;