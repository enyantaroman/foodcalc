import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";

const breadcrumbs = [
    <Link to={`/`} key="1">
        ホーム
    </Link>,
    <Link to={`/food`} key="2">
        食材一覧
    </Link>,
    <Typography key="3" color="text.primary">
        食材詳細
    </Typography>,
];

const FoodDetail = () => {
    return (
        <>
            <BasicTemplate breadcrumbs={breadcrumbs}>
                <h1>食材詳細</h1>
            </BasicTemplate>
        </>
    )
}

export default FoodDetail;